import React from 'react'
import HeadPagestyle from '../../../components/common/HeadPagestyle'
import CustomeTabel from '../../../components/common/CustomeTabel'
import { GrFormView } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { format } from "date-fns";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import { FaWhatsapp } from "react-icons/fa";
import useQueryDelete from '../../../services/useQueryDelete';
import useQuerygetiteams from "../../../services/Querygetiteams"
import Loader from '../../../components/common/Loader';
import useGetUserAuthentications from '../../../middleware/GetuserAuthencations';
import { useState , useMemo } from 'react';
import FiltertionHook from '../../../hooks/FiltertionHook';
const GetCustomers = () => {
  const { isError , isLoading , data} = useQuerygetiteams("customers" , "customers")
  const {deleteIteam} = useQueryDelete("customers" , "customers")
  const {CanAdd , CanDelte , CanEdit , CanView , isAdmin} = useGetUserAuthentications("Clients")
// handel filter 
    const [params, setParams] = useState({
        field: "",
        searchTerm: "",
        startDate: "",
        endDate: "",
      });
    
      const filters = [
        {
          value: "name",
          name: "الإسم  "
        },
        {
          value: "email",
          name: " البريد الالكترونى "
        },
        {
          value: "phoneNumber",
          name: "الجوال"
        },
        {
          value: "addBy.name",
          name: " إنشاء بواسطة "
        },
        {
          value: "Section",
          name: "القسم"
        },
        {
          value: "AplicationType",
          name: "نوع العميل"
        },
        {
          value: "numberusers",
          name: "الإفراد التابعين للعميل"
        },
        {
          value: "numberusers",
          name: "الإفراد التابعين للعميل"
        },
        {
          value: "total",
          name: "إجمالى المبلغ"
        },
        {
          value: "Arrievcashe",
          name: " مبلغ واصل"
        },
        {
          value: "inprocessCashe",
          name: " مبلغ متبقى"
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
          name: "الإسم ",
          selector: (row) => row.name,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
         title={row.title }>{ row.name}</div>,
    
        },
        {
          name: "البريد الالكترونى",
          selector: (row) => row.email ,
          cell: (row) => <div   
      className='w-full p-x-3 text-wrap'
         >{ row.email}</div>,
    
        },
        
        {
          name: "الجوال",
          selector: (row) => row.phoneNumber ,
          cell:(row) =>  <span
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            display:"flex",
            flexDirection:"column",
            gap:"10px"
          }}
        >
          {" "}
         { row.phoneNumber}
    
          <a style={{fontSize:"20px" , color:"#075E54"}}  href={`whatsapp://send?phone=${row.phoneNumber}`} target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
          </a>
       
        </span>
        },
        {
          name: "القسم",
          selector: (row) =>  row.Section,
          cell: (row) => <div   
          style={{
           
           whiteSpace: "wrap",
        
    
         }}
         >{row.Section}</div>,
        },
        {
          name: "نوع العميل",
          selector: (row) => row.AplicationType ,
          cell:(row) => <span >{row.AplicationType}</span>
        },
     
          {
            name: "الإشخاص التابعين",
            selector: (row) => row.status ,
            cell:(row) => <span >{row.AplicationType === "فرد"  ? row.AplicationType : row.numberusers }</span>
          },
          {
            name: "إجمالى المبلغ",
            selector: (row) => row.total ,
            cell:(row) => <span style={{color:"green"}}>{row.total}</span>
          },
          {
            name: "نوع الدفع",
            selector: (row) => row?.Paymenttype ,
            cell:(row) => <span>{row?.Paymenttype}</span>
          },
      
          {
            name: "مبلغ واصل ",
            selector: (row) => row.Arrievcashe ,
            cell:(row) => <span style={{color:"green"}}>{row.Arrievcashe}</span>
          },
          {
            name: "مبلغ متبقى",
            selector: (row) => row.status ,
            cell:(row) => <span style={{color: "red " }}>{row.inprocessCashe}</span>
          },
        {
          name: " إنشاء بواسطة ",
          selector: (row) => <span className='text-wrap'>{row?.addBy?.name}</span> ,
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
         {
          isAdmin || CanEdit ? 
          <Link to={`/Edit-Customer/${row._id}`} className="hover:text-primary">
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
        <HeadPagestyle isAdmin={isAdmin} CanAdd={CanAdd}  pageName="العملاء" to="/Add-Customer" title="إضافة عميل"/>
        <FiltertionHook filteredData={filteredData} columns={columns} key="المشاريع العامه.xlsx" filters={filters} params={params} setParams={setParams}/>

        <CustomeTabel  data={filteredData} columns={columns}/>
    </div>
  )
}

export default GetCustomers