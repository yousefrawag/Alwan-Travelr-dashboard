import React, { useState, useMemo, useEffect } from 'react';
import HeadPagestyle from '../../../components/common/HeadPagestyle';
import CustomeTabel from '../../../components/common/CustomeTabel';
import { Link, useParams } from 'react-router-dom';
import { GrFormView } from "react-icons/gr";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { format } from "date-fns";
import useGetUserAuthentications from '../../../middleware/GetuserAuthencations';
import useQuerygetiteams from '../../../services/Querygetiteams';
import Loader from '../../../components/common/Loader';
import useQueryDelete from '../../../services/useQueryDelete';
import FiltertionHook from "../../../hooks/FiltertionHook";

const SectionClients = () => {
    const {section} = useParams()
  const { data, isLoading } = useQuerygetiteams("projects", "projects");
  const { deleteIteam } = useQueryDelete("projects", "projects");
  const { CanAdd, CanDelte, CanEdit, CanView, isAdmin } = useGetUserAuthentications("Clients");
  const [Clients , setClients] = useState([])
  const [params, setParams] = useState({
    field: "",
    searchTerm: "",
    startDate: "",
    endDate: "",
  });
useEffect(() => {
    if(data?.data?.data) {
        setClients(data?.data?.data?.filter((item) => item.section?._id === section))
    }
} , [section , data])
  const filters = [
    {
      value: "name",
      name: "إسم الخدمة"
    },
 
    {
      value: "customers.name",
      name: " العميل"
    },
    {
      value: "status",
      name: " حالة الخدمة"
    },
    {
      value: "addedBy.name",
      name: "مضاف من قبل"
    },
  ];
  const filteredData = useMemo(() => {
    if (!Clients) return [];

    return Clients?.filter(item => {
      if (params.searchTerm && params.field) {
        const fieldValue = params.field.split('.').reduce((obj, key) => obj?.[key], item);
        return fieldValue?.toLowerCase().includes(params.searchTerm.toLowerCase());
      }
      return true;
    });
  }, [Clients, params]);
  const columns = [
    {
      name: "اسم خدمة",
      selector: (row) => row.name,
      cell: (row) => <div style={{ whiteSpace: "wrap" }} title={row.title}>{row.name}</div>,
    },
    {
        name: "القسم",
        selector: (row) => row.section?.name,
        cell: (row) => <div style={{ whiteSpace: "wrap" }} >{row.section?.name}</div>,
      },
  
    {
      name: "العميل",
      selector: (row) => row.customers?.name,
      cell: (row) => <div style={{ whiteSpace: "wrap" }}>{row.customers?.name}</div>,
    },
    {
      name: " حالة الخدمة  ",
      selector: (row) => row.status,
      cell: (row) => <span style={{ color: row.status === "فى تقدم" ? "red" : "green" }}>{row.projectSatatus}</span>
    },
    {
      name: "تاريخ الموعد",
      selector: (row) => row.meetingDate,
      cell: (row) => <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "wrap" }}>{ row.meetingDate ? format(new Date(row.meetingDate), "dd MMMM, yyyy") : "غير محدد"}</span>
    },
    {
      name: "مضافه من قبل",
      selector: (row) => row?.addedBy?.name,
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
          <Link to={`/projects-main/${row._id}`} className="hover:text-primary">
            <GrFormView size={20} />
          </Link>
          {
            isAdmin || CanEdit ? <Link to={`/edtit-project/${row._id}`} className="hover:text-primary">
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

 

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <HeadPagestyle pageName="خدمات عامة" isAdmin={isAdmin} CanAdd={CanAdd} to="/Add-project" title="إضافة خدمة" />
      <FiltertionHook filteredData={filteredData} columns={columns} filters={filters} params={params} setParams={setParams} />
      <CustomeTabel data={filteredData} columns={columns} />
    </div>
  );
};

export default SectionClients;