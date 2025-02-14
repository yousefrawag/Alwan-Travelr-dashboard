import React, { useState, useMemo } from 'react';
import HeadPagestyle from '../../../components/common/HeadPagestyle';
import CustomeTabel from '../../../components/common/CustomeTabel';
import { Link } from 'react-router-dom';
import { GrFormView } from "react-icons/gr";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { format } from "date-fns";
import useGetUserAuthentications from '../../../middleware/GetuserAuthencations';
import useQuerygetiteams from '../../../services/Querygetiteams';
import Loader from '../../../components/common/Loader';
import useQueryDelete from '../../../services/useQueryDelete';
import FiltertionHook from "../../../hooks/FiltertionHook";

const GetSections = () => {
  const { data, isLoading } = useQuerygetiteams("Section", "Section");
  const { deleteIteam } = useQueryDelete("Section", "Section");
  const { CanAdd, CanDelte, CanEdit, CanView, isAdmin } = useGetUserAuthentications("Section");
  const [params, setParams] = useState({
    field: "",
    searchTerm: "",
    startDate: "",
    endDate: "",
  });

  const filters = [
    {
      value: "name",
      name: "إسم القسم"
    },
  
   
  ];

  const columns = [
    {
      name: "اسم القسم",
      selector: (row) => row.name,
      cell: (row) => <div style={{ whiteSpace: "wrap" }} title={row.name}>{row.name}</div>,
    },
 
    {
      name: "تاريخ الإنشاء",
      selector: (row) => row.createdAt,
      cell: (row) => <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap" }}>{format(new Date(row.createdAt), "dd MMMM, yyyy")}</span>
    },
    {
      name: "اجراء",
      selector: (row) => row.procedure,
      cell: (row) => (
        <div className="flex items-center justify-center space-x-3.5">
          <Link to={`/Sections/${row._id}`} className="hover:text-primary">
            <GrFormView size={20} />
          </Link>
          {
            isAdmin || CanEdit ? <Link to={`/edtit-Sections/${row._id}`} className="hover:text-primary">
              <MdOutlineEditNote size={20} />
            </Link> : null
          }
          {
            isAdmin || CanDelte ?
              <button className="hover:text-red-500" onClick={() => deleteIteam(row._id)}>
                <AiTwotoneDelete size={20} />
              </button> : null
          }
        </div>
      ),
    },
  ];

  const filteredData = useMemo(() => {
    if (!data?.data) return [];

    return data.data.filter(item => {
      if (params.searchTerm && params.field) {
        const fieldValue = params.field.split('.').reduce((obj, key) => obj?.[key], item);
        return fieldValue?.toLowerCase().includes(params.searchTerm.toLowerCase());
      }
      return true;
    });
  }, [data, params]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <HeadPagestyle pageName="الإقسام" isAdmin={isAdmin} CanAdd={CanAdd} to="/Add-Sections" title="إضافة قسم" />
      <FiltertionHook filteredData={filteredData} columns={columns} filters={filters} params={params} setParams={setParams} />
      <CustomeTabel data={filteredData} columns={columns} />
    </div>
  );
};

export default GetSections;