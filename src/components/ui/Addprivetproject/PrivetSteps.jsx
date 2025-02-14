import React from 'react'
import { PiBuildingsFill } from "react-icons/pi";

import { FaUsers } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
const PrivetSteps = () => {
  return (
    <div className=" bg-white dark:bg-form-input min-h-full right_box h-full w-full xl:w-[20%] lg:w-[20%] shadow-lg p-5 rounded-md flex flex-col gap-10">
           <div className="Project_completion_stage flex gap-4">
             <div className="icon relative w-[30px] h-[30px] flex items-center justify-center p-2 bg-main rounded-full">
               <PiBuildingsFill />
               <div className="absolute left-1/2 top-full border-dotted border-t border-gray-300 w-full"></div>
             </div>
             <div className="text">
               <p className="font-semibold text-sm">بيانات المشروع</p>
               <p className="text-gray-500 text-xs">ادخل تفاصيل المشروع - الاسم -  </p>
             </div>
           </div>
        
           <div className="Project_completion_stage flex gap-4">
             <div className="icon relative p-2 w-[30px] h-[30px] flex items-center justify-center bg-main rounded-full">
               <IoMdLink />
             </div>
             <div className="text">
               <p className="font-semibold text-sm">مرفقات</p>
               <p className="text-gray-500 text-xs">ادخال مرفقات المشروع</p>
             </div>
           </div>
         </div>
  )
}

export default PrivetSteps