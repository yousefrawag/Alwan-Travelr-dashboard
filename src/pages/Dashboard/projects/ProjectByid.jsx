import React from 'react'
import image1 from "../../../images/brand/brand-01.svg"
import image2 from "../../../images/brand/brand-02.svg"
import image3 from "../../../images/brand/brand-03.svg"
import { FaFilePdf } from "react-icons/fa6";

import { HiMiniViewfinderCircle } from "react-icons/hi2";
import HeadPagestyle from '../../../components/common/HeadPagestyle';

import Loader from '../../../components/common/Loader';
import useQuerygetSpacficIteam from '../../../services/QuerygetSpacficIteam';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns';

const ProjectByid = () => {
  const {id} =  useParams()
  const {data , isLoading} = useQuerygetSpacficIteam("projects" , "projects" , id)
  const Currentitem = data?.data
  if(isLoading){
    return <Loader />
  }
  return (
    <div className='w-full h-full'>
        <HeadPagestyle pageName="بيانات الخدمة" to="/projects-main" title="عوده" />
   <div className='w-full h-full grid grid-cols-1 gap-2 xl:grid-cols-2	 shadow-md p-5	'>
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                        إسم الخدمة
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                  {Currentitem?.name}
                </p>
              
               </div>
            
              
            
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                  حاله الخدمة
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                 {Currentitem?.projectSatatus}
                </p>
              
               </div>
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                  تاريخ الموعد
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                 {format(new Date(Currentitem.meetingDate), "dd MMMM, yyyy") || "غير محدد"  }
                </p>
              
               </div>
   
             
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                 العميل
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                      {Currentitem?.customers?.name}
                </p>
              
               </div>
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
               البريد الالكترونى
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                      {Currentitem?.customers?.email || ""}
                </p>
              
               </div>
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                 رقم الجوال
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                   {Currentitem?.customers?.phoneNumber}
                </p>
              
               </div>
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                 نوع العميل
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                           {Currentitem?.customers?.AplicationType}
                </p>
              
               </div> 
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                عدد الإشخاص
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                 {Currentitem?.customers?.AplicationType === "فرد"  ? Currentitem?.customers?.AplicationType : Currentitem?.customers?.numberusers }
                </p>
              
               </div>
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                ملاحظات العميل
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                    {Currentitem?.customers?.notes}
                </p>
              
               </div>
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
               ملاحظات المشروع 
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                    {Currentitem?.notes}
                </p>
              
               </div>
     </div>
     <br />
     <h2 className='mb-10 mt-5'>مرفقات المشروع</h2>
     <div className='w-full h-full grid grid-cols-1 gap-2 xl:grid-cols-2'>
      {
        Currentitem?.imagesURLs?.map((item) => {
          return <div key={item?.fileID}  className="relative rounded-lg overflow-hidden group">
                    
          <img
          src={item?.fileURL}
          
          className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex flex-col justify-between p-2 transition">
          <a
          href={item?.fileURL}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-main text-white"
            target="_blank"
          >
              <HiMiniViewfinderCircle />
          </a>
          
          </div>
      
  </div>
        })
      }
          
            
         
     </div>
     <br />
     <div className='mt-10 w-full h-full grid grid-cols-1 gap-2 xl:grid-cols-2'>
      {
        Currentitem?.docsURLs?.map((item) => {
          return  <div
                  key={item?.fileID}        
          className="relative flex items-center justify-between p-4 h-16 bg-red-100 rounded-lg group"
        >
 
          <FaFilePdf className="text-4xl text-red-500" />
          <a
           href={item?.fileURL}
            className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full bg-main text-white opacity-0 group-hover:opacity-100 transition"
              target="_blank"
          >
            <HiMiniViewfinderCircle />
          </a>
</div>
        })
      }
             
      
     </div>
    </div>
  )
}

export default ProjectByid