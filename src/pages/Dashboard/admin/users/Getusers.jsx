import React from 'react'
import Breadcrumb from '../../../../components/common/Breadcrumbs/Breadcrumb'
import CustomeTabel from '../../../../components/common/CustomeTabel'
import { GrFormView } from "react-icons/gr";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';

import { Link } from 'react-router-dom'
const Getusers = () => {
    const columns = [
        {
            name:"الإسم",
            selector: (row) => row.name,

        },
        {
            name:"رقم الجوال",
            selector: (row) => row.name,

        },
        {
            name:"الايميل",
            selector: (row) => row.name,

        },
        {
            name:"المدينه",
            selector: (row) => row.name,

        },
        {
            name:"المنشأه التابع لها",
            selector: (row) => row.name,

        },
        {
            name:"الصلاحية",
            selector: (row) => row.name,

        },
      
     
         {
                   name:"إجراء",
                   cell:(row) => (
                       <div className="flex items-center justify-center space-x-3.5">
                       <Link to={`/Establishment-overView/${row._id}`} className="hover:text-primary">
                       <GrFormView size={20} />
                       </Link>
                       <Link to={`/update-Establishment/${row._id}`}  className="hover:text-primary">
                         <MdOutlineEditNote size={20}/>
                       </Link>
                       <button className="hover:text-primary" onClick={() => deleteIteam(row._id)}>
                         <AiTwotoneDelete size={20}/>
                       </button>
                     </div>
                   )
              
               }
    ]
    const data = [
        {
              name:"محمد احمد"
        },
        {
            name:" يوسف رواج"
      },
      {
        name:" طارق السلام"
  },
  {
    name:"ماجد الهوارى"
},

    ]
  return (
    <div>
        
    <div className='flex justify-between w-full'>
    <Breadcrumb pageName="المستخدمين" />
    <Link to="/Add-user" className="block text-white bg-main hover:bg-main2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800" type="button">
    إضافه مستخدم 
    </Link>
    </div>
    
    <div className='shadow-[#EFEEF4] w-full h-full rounded-md'>
    <CustomeTabel columns={columns} data={data}/>
    </div>
    
        </div>
  )
}

export default Getusers