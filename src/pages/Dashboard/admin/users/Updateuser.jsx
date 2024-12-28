import React from 'react'
import Breadcrumb from '../../../../components/common/Breadcrumbs/Breadcrumb'
import { Link } from 'react-router-dom'
const Updateuser = () => {
  return (
    <div className='w-full'>
        <Breadcrumb  pageName="تعديل مستخدم"/>
        {/* form add new estbilshment */}
    <form  className='w-full h-full shadow-md p-5	'>
            <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-2 2xl:gap-7.5 w-full items-center'>
                    <div className="mb-6 flex flex-col  gap-2">
                        <label
                          htmlFor="name"
                          className="w-full text-lg font-medium text-gray-700 dark:text-white"
                        >
                          إسم الموظف
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="username"
                          placeholder="Title name..."
                          className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-6 flex flex-col  gap-2">
                        <label
                          htmlFor="name"
                          className="w-full text-lg font-medium text-gray-700 dark:text-white"
                        >
                          رقم الهويه / الإقامة 
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Title name..."
                          className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-6 flex flex-col  gap-2">
                        <label
                          htmlFor="name"
                          className="w-full text-lg font-medium text-gray-700 dark:text-white"
                        >
                          الرقم الوظيفى
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Title name..."
                          className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                      </div>
                      <div className="mb-6 flex flex-col  gap-5">
                              <label
                                htmlFor="name"
                                className="w-full  text-lg font-medium text-gray-700 dark:text-white"
                              >
                           الجنس
                              </label>
                            <select className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
                                    <option>
                                      أختر
                                      </option>
                                      <option>
                                      ذكر
                                      </option>
                                      <option>
                                      انثى
                                      </option>
                                    
                                     
                            </select>
                        </div>
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                            تاريخ الميلاد
                          </label>
                          <input
                            type="date"
                            id="birthdat"
                            name="name"
                           
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
                        
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                                الجنسية
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Title name..."
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                                المؤهل العلمى
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Title name..."
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                            المسمى الوظيفى 
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Title name..."
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-6 flex flex-col  gap-5">
                              <label
                                htmlFor="name"
                                className="w-full  text-lg font-medium text-gray-700 dark:text-white"
                              >
                           المنشأه التابع لها
                              </label>
                            <select className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
                                    <option>
                                      أختر
                                      </option>
                                      <option>
                                      مستشفى القاهره
                                      </option>
                                      <option>
                                      مستشفى العريش
                                      </option>
                                    
                                     
                            </select>
                        </div>
                        <div className="mb-6 flex flex-col  gap-5">
                            <label
                              htmlFor="name"
                              className="w-full  text-lg font-medium text-gray-700 dark:text-white"
                            >
                                  الصلاحية
                            </label>
                          <select className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
                                  <option>
                                    أختر
                                    </option>
                                    <option>
                                    مالك المنصة
                                    </option>
                                    <option>
                                     مدير 
                                    </option>
                                  
                                   
                          </select>
                      </div>
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                          رقم الجوال
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Title name..."
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                          البريد الالكترونى
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="email"
                            placeholder="Title name..."
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                         المنطقة
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="text"
                            placeholder="Title name..."
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                         المدينة
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="text"
                            placeholder="Title name..."
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
                        <div className="mb-6  flex flex-col  gap-2">
                          <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-gray-700 dark:text-white"
                          >
                         العنوان
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="text"
                            placeholder="Title name..."
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                        </div>
            </div>
          
                {/* wrrap button layout */}
                <div className='w-full flex justify-between items-center'>
                    <button type="submit" className="block text-white bg-main hover:bg-main2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800" >
                          حفظ
                        </button>
                      <Link to="/Est-ablishments" className="block text-white bg-main hover:bg-main2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800" >
                          عوده 
                        </Link>
  
                </div>
            {/* wrrap buttons layout */}
     </form>
    </div>
  )
}

export default Updateuser