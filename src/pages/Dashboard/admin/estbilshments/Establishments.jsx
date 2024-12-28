import React from 'react'
import Breadcrumb from '../../../../components/common/Breadcrumbs/Breadcrumb'
import CustomeTabel from '../../../../components/common/CustomeTabel'
import { Link } from 'react-router-dom'
import useQuerygetiteams from '../../../../services/Querygetiteams'
import { GrFormView } from "react-icons/gr";
import { AiTwotoneDelete } from 'react-icons/ai';
import { MdOutlineEditNote } from 'react-icons/md';
import useQueryDelete from '../../../../services/useQueryDelete'
const Establishments = () => {
  const { isError , isLoading , data} =  useQuerygetiteams("estbilshment" , "estbilshment")
  const {deleteIteam} = useQueryDelete("estbilshment" , "estbilshment")
// colums tabel
  const columns = [
        {
            name:"الإسم",
            selector: (row) => <span className='text-wrap	'>{row.name}</span> ,

        },
        {
            name:"مستوى المنشأه",
            selector: (row) => row?.mainCategory?.name,

        },
        {
            name:"نوع المنشاه",
            selector: (row) => row?.estbilshType,

        },
        {
            name:"عدد الموظفين",
            selector: (row) =>  40,

        },
        {
            name:"عدد المراكز الصحيه",
            selector: (row) => 10,

        },
        {
            name:"عدد المواقع",
            selector: (row) => 5,

        },
        {
            name:"عدد الاصول",
            selector: (row) => 7,

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
 
  return (
    <div>
        
    <div className='flex justify-between w-full'>
    <Breadcrumb pageName="المنشأت" />
    <Link to="/Add-Establishment" className="block text-white bg-main hover:bg-main2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800" type="button">
    إضافه منشأه 
    </Link>
    </div>
    
    <div className='shadow-[#EFEEF4] w-full h-full rounded-md'>
    <CustomeTabel columns={columns} data={data?.data?.allEstbilshment}/>
    </div>
    
        </div>
  )
}

export default Establishments