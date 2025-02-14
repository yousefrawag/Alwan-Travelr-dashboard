import React from 'react'
import image1 from "../../../images/brand/brand-01.svg"
import image2 from "../../../images/brand/brand-02.svg"
import image3 from "../../../images/brand/brand-03.svg"
import { FaFilePdf } from "react-icons/fa6";

import { HiMiniViewfinderCircle } from "react-icons/hi2";
import HeadPagestyle from '../../../components/common/HeadPagestyle';
import useQuerygetSpacficIteam from '../../../services/QuerygetSpacficIteam';
import { useParams } from 'react-router-dom';
import Loader from '../../../components/common/Loader';
const GetServicesByid = () => {
  const {id} = useParams()
 const {data , isLoading} = useQuerygetSpacficIteam("Services" , "Services" , id)
 const CurrentServices = data?.data
 if(isLoading){
  return <Loader />
 }
  return (
    <div className='w-full h-full'>
    <HeadPagestyle pageName="بيانات المشروع" to="/website-Services" title="عوده" />
<div className='w-full h-full grid grid-cols-1 gap-2 xl:grid-cols-2	 shadow-md p-5	'>
<div className="mb-6 flex flex-col  gap-2">
             <span
               htmlFor="name"
               className="w-full text-lg font-medium text-gray-700 dark:text-white"
             >
                 عنوان الخدمة
             </span>
             <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
            
            >
            {
              CurrentServices?.title
            }
            </p>
          
           </div>
           <div className="mb-6 flex flex-col  gap-2">
             <span
               htmlFor="name"
               className="w-full text-lg font-medium text-gray-700 dark:text-white"
             >
                 تفاصيل الخدمة
             </span>
             <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
            
            >
            {
              CurrentServices?.desc
            }
            </p>
          
           </div>
        
          
           <div className="mb-6 flex flex-col  gap-2">
             <span
            
               className="w-full text-lg font-medium text-gray-700 dark:text-white"
             >
             مميزات الخدمة
             </span>
             <div className='w-full h-full grid grid-cols-2 gap-4'>
             {
              CurrentServices?.Features?.map((item) => {
                return  <p key={item} className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
            
                >
                  {
                    item
                  }
                </p>
              })
             }
</div>
            
          
           </div>
        
               <div className="relative rounded-lg overflow-hidden group">
                               
                     <img
                     src={CurrentServices?.image?.imageURL}
                     
                     className="w-full h-40 object-cover"
                     />
                     <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-2 transition">
                     <a
                     href={CurrentServices?.image?.imageURL}
                         className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-main text-white"
                       target="_blank"
                     >
                         <HiMiniViewfinderCircle />
                     </a>
                     
                     </div>
                 
             </div>

         
     
 </div>

</div>
  )
}

export default GetServicesByid