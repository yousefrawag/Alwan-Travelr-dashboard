import React from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../../../components/common/Breadcrumbs/Breadcrumb'
const UserOverview = () => {
  return (
    <div className='w-full'>
              {/* wrrap button layout */}
              <div className='w-full flex justify-between items-center'>
              <Breadcrumb  pageName="بيانات المستخدم محمد كمال"/>
              <Link to="/All-users" className="block text-white bg-main hover:bg-main2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800" >
                    عودة
                  </Link>
             

          </div>
      {/* wrrap buttons layout */}
 
    {/* form add new user */}
    <form  className='w-full h-full shadow-md p-5	'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-3 2xl:gap-7.5 w-full items-center'>
              <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                    إسم الموظف
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                    محمد كمال 
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                    رقم الهوية / الإقامة
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                    3784غ293883
                  </p>
              
                </div>
           
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                  الرقم الوظيفى
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                   763487973
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                    الجنس
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                   ذكر
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                   تاريخ الميلاد
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                    3784غ293883
                  </p>
              
                </div>
                  
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                  الجنسية
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                    سعودى
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                  المؤهل العلمى
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                    3784غ293883
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                  المسمى الوظيفى
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                 مهندس تقنى
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                   المنشأه التابع لها
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                   فرع القاهره
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                   الصلاحية
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                   مدير
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                  رقم الجوال
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                    3784غ293883
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
                 البريد الإلكترونى
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                  yousefrawag908@gmail.com
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
              المنطقة
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                        جده   
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
               المدينة
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                 الدمام
                  </p>
              
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                  <span
                   
                    className="w-full text-lg font-medium text-gray-700 dark:text-white"
                  >
               العنوان
                  </span>
                  <p 
                   className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  rounded-md border border-gray-300 shadow-sm "
                  >
                13 شارع الجلاء 
                  </p>
              
                </div>
      </div>
    
    
    </form>
    {/* END form add new user */}
</div>
  )
}

export default UserOverview