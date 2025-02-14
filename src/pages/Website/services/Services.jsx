import React from 'react'
import HeadPagestyle from '../../../components/common/HeadPagestyle'
import CustomeTabel from '../../../components/common/CustomeTabel'
import { Link } from 'react-router-dom';
import { GrFormView } from "react-icons/gr";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { format } from "date-fns";
import useQuerygetiteams from '../../../services/Querygetiteams';
import useQueryDelete from '../../../services/useQueryDelete';
import Loader from '../../../components/common/Loader';
import useGetUserAuthentications from '../../../middleware/GetuserAuthencations';
import { useState , useMemo } from 'react';
import FiltertionHook from '../../../hooks/FiltertionHook';
const Services = () => {
  const {data , isLoading} = useQuerygetiteams("Services" , "Services")
  const {deleteIteam} = useQueryDelete("Services" , "Services")
  const {CanAdd , CanDelte , CanEdit , CanView , isAdmin} = useGetUserAuthentications("Services")
// handel filter 
    const [params, setParams] = useState({
        field: "",
        searchTerm: "",
        startDate: "",
        endDate: "",
      });
    
      const filters = [
        {
          value: "title",
          name: "عنوان الخدمة"
        },
        {
          value: "desc",
          name: "تفاصيل الخدمة"
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
      name: "عنوان الخدمة",
      selector: (row) => row.title,
      cell: (row) => <div   
      style={{
       
       whiteSpace: "wrap",
    

     }}
     title={row.title }>{ row.title}</div>,

    },
 
    {
      name: "تفاصيل الخدمة",
      selector: (row) =>  row?.desc  ,
      cell: (row) => <div   
      style={{
       
       whiteSpace: "wrap",
    

     }}
     title={row.desc }>{row?.desc?.slice(0 ,50)+ "..."}</div>,
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
              <Link to={`/website-Services/${row._id}`} className="hover:text-primary">
              <GrFormView size={20} />
              </Link>
              {
                isAdmin || CanEdit ?
                <Link to={`/website-Edit-Services/${row._id}`}  className="hover:text-primary">
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
    <HeadPagestyle isAdmin={isAdmin} CanAdd={CanAdd}  pageName="خدمات الشركة" to="/website-Add-Services" title="إضافة خدمة"/>
    <FiltertionHook filteredData={filteredData} columns={columns} filters={filters} params={params} setParams={setParams}/>

    <CustomeTabel  data={filteredData} columns={columns}/>
</div>
)
}

export default Services