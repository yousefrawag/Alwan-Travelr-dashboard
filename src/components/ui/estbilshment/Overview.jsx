import React from 'react'
import { Link } from 'react-router-dom'
const Overview = ({CurrenEstbilshment}) => {
    const {findEstablishment} = CurrenEstbilshment
  return (
     <div className='w-full h-full grid grid-cols-1 gap-2 xl:grid-cols-2	 shadow-md p-5	'>
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                        إسم المنشأه
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                    {
                        findEstablishment?.name
                    }
                </p>
              
               </div>
            
              
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                   مستوى المنشأه 
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                    {
                        findEstablishment?.mainCategory?.name
                    }
                </p>
              
               </div>
   
             
               <div className="mb-6 flex flex-col  gap-2">
                 <span
                   htmlFor="name"
                   className="w-full text-lg font-medium text-gray-700 dark:text-white"
                 >
                   نوع المنشأه
                 </span>
                 <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                
                >
                     {
                        findEstablishment?.estbilshType
                    }
                </p>
              
               </div>
        
     </div>
  )
}

export default Overview