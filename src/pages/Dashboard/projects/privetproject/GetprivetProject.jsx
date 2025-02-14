import React from 'react'
import HeadPagestyle from '../../../../components/common/HeadPagestyle'
import CustomeTabel from '../../../../components/common/CustomeTabel'
import DropdownDefault from '../../../../components/common/Dropdowns/DropdownDefault'
import { Link } from 'react-router-dom';
import { GrFormView } from "react-icons/gr";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { format } from "date-fns";
import useQuerygetiteams from '../../../../services/Querygetiteams';
import Loader from '../../../../components/common/Loader';
import useQueryDelete from '../../../../services/useQueryDelete';
import useGetUserAuthentications from '../../../../middleware/GetuserAuthencations';
import FiltertionHook from '../../../../hooks/FiltertionHook';
import { useState } from 'react';
import { useMemo } from 'react';
const GetprivetProject = () => {
  const {data , isLoading} = useQuerygetiteams("Privetprojects" , "Privetprojects")
  const {deleteIteam} = useQueryDelete("Privetprojects" , "Privetprojects")
  const {CanAdd , CanDelte , CanEdit , CanView , isAdmin} = useGetUserAuthentications("PrivetProjects")
     const [params, setParams] = useState({
        field: "",
        searchTerm: "",
        startDate: "",
        endDate: "",
      });
    
      const filters = [
        {
          value: "name",
          name: " إسم المشروع "
        },
        {
          value: "projectRequire",
          name: " متطلبات المشروع"
        },
        {
          value: "addedBy.name",
          name: " مضاف من قبل"
        },
     
      ];


   

        const filteredData = useMemo(() => {
          if (!data?.data?.data) return [];
      
          return data.data?.data.filter(item => {
            if (params.searchTerm && params.field) {
              const fieldValue = params.field.split('.').reduce((obj, key) => obj?.[key], item);
              return fieldValue?.toLowerCase().includes(params.searchTerm.toLowerCase());
            }
            return true;
          });
        }, [data, params]);

const columns = [
  {
    name: "اسم مشروع",
    selector: (row) => row.name,
    cell: (row) => <div   
    style={{
      
      whiteSpace: "wrap",
  

    }}
    title={row.title }>{ row.name}</div>,

  },

  {
    name: "متطلبات المشروع",
    selector: (row) =>  row.projectRequire,
    cell: (row) => <div   
    style={{
      
      whiteSpace: "wrap",
  

    }}
  >{row?.projectRequire }</div>,
  },

  {
    name: "مضافه من قبل",
    selector: (row) => row?.addedBy?.name,
  },
  {
    name:"تاريخ الإنشاء",
    selector: (row) => row.createdAt,
    cell: (row) => <span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace:"wrap"}}>{format(new Date(row.createdAt), "dd MMMM, yyyy")}</span>
  },

  {
    name: "اجراء",
    selector: (row) => row.procedure,
    cell: (row) => (
      
      
              <div className="flex items-center justify-center space-x-3.5">
                    <Link to={`/privte-projects/${row._id}`} className="hover:text-primary">
                    <GrFormView size={20} />
                    </Link>
                    {
                      isAdmin || CanAdd ? 
                      <Link to={`/edit-privte-projects/${row._id}`}  className="hover:text-primary">
                      <MdOutlineEditNote size={20}/>
                    </Link>
                      : null
                    }
                  {
                  isAdmin || CanDelte ? 
                  <button className="hover:text-red-500" onClick={() => deleteIteam(row._id)}>
                  <AiTwotoneDelete size={20}/>
                </button>
                    : null
                  }
                
                  </div>
    ),
  },
];       
        
 if(isLoading){
  return <Loader />
 }    
  return (
    <div>
        <HeadPagestyle isAdmin={isAdmin} CanAdd={CanAdd}  pageName="مشاريع خاصة" to="/Add-privte-projects" title="إضافة مشروع"/>
       <FiltertionHook filteredData={filteredData} columns={columns} key="المشاريع الخاصة.xlsx" filters={filters} params={params} setParams={setParams}/>
        <CustomeTabel  data={filteredData} columns={columns}/>
    </div>
  )
}

export default GetprivetProject