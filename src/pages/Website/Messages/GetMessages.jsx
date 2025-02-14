import React from 'react'
import Breadcrumb from '../../../components/common/Breadcrumbs/Breadcrumb'
import CustomeTabel from '../../../components/common/CustomeTabel'
import { format } from 'date-fns'
import { Link } from 'react-router-dom';
import { GrFormView } from "react-icons/gr";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import useQuerygetiteams from '../../../services/Querygetiteams';
import useQueryDelete from '../../../services/useQueryDelete';
import { useState , useMemo } from 'react';
import FiltertionHook from '../../../hooks/FiltertionHook';
import Loader from '../../../components/common/Loader';
const GetMessages = () => {
  const {data , isLoading} = useQuerygetiteams("cutomerRequest" , "cutomerRequest")
  const {deleteIteam} = useQueryDelete("cutomerRequest" , "cutomerRequest")
// handel filter 
    const [params, setParams] = useState({
        field: "",
        searchTerm: "",
        startDate: "",
        endDate: "",
      });
    
      const filters = [
        {
          value: "Requesttype",
          name: " نوع الطلب "
        },
        {
          value: "name",
          name: "الإسم "
        },
        {
          value: "phone",
          name: " الجوال "
        },
        {
          value: "email",
          name: " الايميل "
        },
        {
          value: "services",
          name: "الخدمة"
        },
        
        {
          value: "visa",
          name: "التأشيره"
        },
        {
          value: "hotelName",
          name: "إسم الفندق"
        },
        {
          value: "numberOfUsers",
          name: "عدد الافراد "
        },
        {
          value: "numberOfRooms",
          name: "عدد الغرف "
        },
        {
          value: "ticketType",
          name: " نوع التذكره"
        },
        {
          value: "flyingType",
          name: " نوع الطيران"
        },
      ];


   

  const filteredData = useMemo(() => {
    if (!data?.data) return [];

    return data.data?.filter(item => {
      if (params.searchTerm && params.field) {
        const fieldValue = params.field.split('.').reduce((obj, key) => obj?.[key], item);
        return fieldValue?.toLowerCase().includes(params.searchTerm.toLowerCase());
      }
      return true;
    });
  }, [data, params]);

    const columns = [
      {
        name:"نوع الطلب",
        selector: (row) =>  row?.Requesttype  ,
        cell: (row) => <div   
        style={{
         
         whiteSpace: "wrap",
      
  
       }}
     >{row?.Requesttype}</div>,
      },
        {
          name: " الإسم",
          selector: (row) => row.name,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
         title={row.name }>{ row.name}</div>,
    
        },
        {
            name: " الجوال",
            selector: (row) => row.phone ,
            cell: (row) => <div   
            style={{
             
             whiteSpace: "wrap",
          
      
           }}
           title={row.phone }>{ 
            
            row.phone
            
            }</div>,
      
          },
     
        {
          name:"الايميل",
          selector: (row) =>  row?.email  ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
       >{row?.email}</div>,
        },
        {
          name:"الخدمة",
          selector: (row) =>  row?.services  ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
       >{row?.services}</div>,
        },
        {
          name:"التأشيره",
          selector: (row) =>  row?.visa  ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
       >{row?.visa}</div>,
        },
             
 
        {
          name:"تاريخ الوصول",
          selector: (row) =>  row?.arriveDate  ,
          cell: (row) => <span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace:"wrap"}}>{ row?.arriveDate  ?  format(new Date(row.arriveDate), "dd MMMM, yyyy") : "غير معروف"}</span>

        },
        {
          name:"تاريخ المغادره",
          selector: (row) =>  row?.outDate  ,
          cell: (row) => <span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace:"wrap"}}>{ row.outDate ? format(new Date(row.outDate), "dd MMMM, yyyy") : "غير معروف"}</span>

        },
        {
          name:"إسم الفندق",
          selector: (row) =>  row?.hotelName  ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
        >{ row.hotelName}</div>,
        },
        {
          name:"عدد الافراد ",
          selector: (row) =>  row?.numberOfUsers  ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
        >{ row.numberOfUsers}</div>,
        },
        {
          name:"عدد الغرف ",
          selector: (row) =>  row?.numberOfRooms  ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
        >{ row.numberOfRooms}</div>,
        },
        {
          name:" نوع التذكره ",
          selector: (row) =>  row?.ticketType  ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
        >{ row.ticketType}</div>,
        },
        {
          name:" نوع الطيران ",
          selector: (row) =>  row?.flyingType  ,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
        >{ row.flyingType}</div>,
        },
        {
          name:"تاريخ الطلب",
          selector: (row) => row.createdAt,
          cell: (row) => <span style={{overflow: "hidden", textOverflow: "ellipsis", whiteSpace:"wrap"}}>{row.createdAt ?  format(new Date(row.createdAt), "dd MMMM, yyyy") : "غير معروف"}</span>
        },
      
       {
                name: "اجراء",
                selector: (row) => row.procedure,
                cell: (row) => (
                 
                  
                  <div className="flex items-center justify-center space-x-3.5">
             
                  <button className="hover:text-red-500" onClick={() => deleteIteam(row._id)}>
                    <AiTwotoneDelete size={20}/>
                  </button>
                </div>
                ),
              },
      ];
if(isLoading){
  return <Loader />
}
  return (
    <div>
        <Breadcrumb  pageName="رسائل الموقع"/>
        <FiltertionHook filteredData={filteredData} columns={columns} filters={filters} params={params} setParams={setParams}/>

        <CustomeTabel
        
        data={filteredData}
        columns={columns}/>
    </div>
  )
}

export default GetMessages