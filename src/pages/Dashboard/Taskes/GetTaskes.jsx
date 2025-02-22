import React from 'react'
import HeadPagestyle from '../../../components/common/HeadPagestyle'
import CustomeTabel from '../../../components/common/CustomeTabel'

import { Link } from 'react-router-dom';
import { GrFormView } from "react-icons/gr";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { format } from "date-fns";

import useQuerygetiteams from '../../../services/Querygetiteams';
import Loader from '../../../components/common/Loader';
import useQueryDelete from '../../../services/useQueryDelete';
import useGetUserAuthentications from '../../../middleware/GetuserAuthencations';
import { useState , useMemo } from 'react';
import FiltertionHook from '../../../hooks/FiltertionHook';
const GetTaskes = () => {
  const {data , isLoading} = useQuerygetiteams("missions" , "missions")
  const {deleteIteam} = useQueryDelete("missions" , "missions")
  const {CanAdd , CanDelte , CanEdit , CanView , isAdmin} = useGetUserAuthentications("Missions")
// handel filter 
    const [params, setParams] = useState({
        field: "",
        searchTerm: "",
        startDate: "",
        endDate: "",
      });
    
      const filters = [
     
        {
          value: "missionType",
          name: " نوع المشروع"
        },
        {
          value: "assignedBy.name",
          name: " مضاف من قبل"
        },
        {
          value: "status",
          name: " حالة المهمة "
        },
        {
          value: "project.name",
          name: "مشروع عام"
        },
        
        {
          value: "Privetproject.name",
          name: "مشروع خاص"
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
        name: "نوع الخدمة",
        selector: (row) => row?.missionType ,
      },
      {
        name: "الخدمة",
        selector: (row) =>  row?.missionType === "خدمة عامة" ? row?.project?.name : row?.Privetproject?.name,
        cell: (row) => <div   
        style={{
         
         whiteSpace: "wrap",
      
  
       }}
       >{ row?.missionType === "خدمة عامة" ? row?.project?.name : row?.Privetproject?.name}</div>,
      },

        {
          name: "القسم",
          selector: (row) => row.project?.section?.name ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
        >{  row.project?.section?.name || "خدمه مخصصة"}</div>,
    
        },
    
   
        {
          name: "مضافه من قبل",
          selector: (row) => row?.assignedBy?.name,
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
            <Link to={`/Taskes/${row._id}`} className="hover:text-primary">
            <GrFormView size={20} />
            </Link>
            {
              isAdmin || CanAdd ? 
              <Link to={`/edit-Taskes/${row._id}`}  className="hover:text-primary">
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
   
        <HeadPagestyle  isAdmin={isAdmin} CanAdd={CanAdd} pageName="توزيع المهام" to="/Add-Taskes" title="إضافة مهمة"/>
        <FiltertionHook filteredData={filteredData} columns={columns}  filters={filters} params={params} setParams={setParams}/>
        <CustomeTabel  data={filteredData} columns={columns}/>
    </div>
  )
}

export default GetTaskes