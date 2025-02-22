import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { useState } from 'react';
import useQueryadditeam from "../../../services/Queryadditeam"
import toast from 'react-hot-toast';
import Loader from "../../../components/common/Loader/index"
const AddCustomer = () => {
  const {isError , isLoading , addIteam} = useQueryadditeam("customers" , "customers")
  const [totalPrices , setTotal] = useState("")
  const [Arrievcashe , setArrievCashe] = useState("")
 const inprocessCashe  = (totalPrices && Arrievcashe) ? totalPrices - Arrievcashe : 0
  const navigate = useNavigate()
    const Customertype = ["فرد", "عائلة"]
    const [selectedType , setSelectedType] = useState("فرد")
 const handelSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const data = Object.fromEntries(formData);
 
  data.AplicationType = selectedType
  if(!data.name){
    toast.error("يجب إضافه اسم العميل")
      return ;
  }

  if(!data.phoneNumber){
    toast.error("يجب إضافه الجوال")
    return ;
}
if(!data.Section){
  toast.error("يجب إضافه  القسم التابع له")
  return ;
}
if(!data.total){
toast.error("يجب إضافه إجمالى المبلغ")
return ;
}
  try {
  
      
      addIteam(data , {
          onSuccess:() =>{
           
              e.target.reset()
              toast.success("تم إضافه عميل جديد")
              navigate("/cutomers")
          },  
           onError: (error) => {
            if (error.response && error.response.data && error.response.data.mesg) {
              toast.error(error.response.data.mesg);
            } else {
              toast.error("An error occurred. Please try again.");
            }
          }
      })
  } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.mesg)
  }
 } 
 if(isLoading) {
  return <Loader />
 }
  return (
    <div className='w-full h-full'>
   <form onSubmit={handelSubmit} className='w-full h-full bg-white rounded-[10px] dark:bg-form-input' >
    <div className="dark:bg-form-input flex items-center shadow-lg gap-4 mb-4 w-full h-full p-4 bg-white rounded-[10px]">
      <div className="icon p-2 bg-main rounded-full">
        <FaRegPenToSquare />
      </div>
      <p className="font-semibold text-lg">ادخل بيانات العميل</p>
    </div>
   
   <div className='main-section w-full max-h-[400px] min-h-[100px] p-4 overflow-auto	'>
     <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="name"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                            الإسم كامل
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                    
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                    
            </div>
            <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="email"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                          البريد الالكترونى
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                    
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                    
            </div>
          
            <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="phoneNumber"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                          رقم الجوال
                        </label>
                        <input
                            type="text"
                            id="phoneNumber"
                            name="phoneNumber"
                    
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                    
            </div>
                <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="Section"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                         القسم
                        </label>
                        <select name="Section" id="Section"  className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"                        >
                            <option value="">
                                أختر القسم
                            </option>
                            <option value="التأشيرات">
                              التأشيرات
                            </option>
                            <option value="حجوزات">
                                حجوزات
                            </option>
                            <option value="طيران">
                               طيران
                            </option>
                            <option value="">
                                دراسة
                            </option>
                        </select>
                     
                    
                </div>
                <div className='w-full flex gap-2'>
                {
                    Customertype?.map((item) => {
                        return <button onClick={() => setSelectedType(item)} className={`w-[150px] p-4 ${selectedType === item ? "bg-main text-white" :"border-[1px] border-main bg-transbarent text-balck"}  rounded-[6px]`} type='button' key={item}>{item}</button>
                    })
                }
                </div>
            
              {
                selectedType === "عائلة"  ?  <div className="mb-6 flex flex-col  gap-2">
                <label
                    htmlFor="numberusers"
                    className="w-full text-lg font-medium text-black dark:text-white"
                >
                 عدد الإشخاص
                </label>
                <input
                    type="text"
                    id="numberusers"
                    name="numberusers"
            
                    className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                />
            
                </div>: null
              }
                <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="total"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                         إجمالى المبلغ
                        </label>
                        <input
                            type="number"
                            id="total"
                            name="total"
                            value={totalPrices}
                            onChange={(e) => setTotal(e.target.value)}
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                    
            </div>
            <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="Paymenttype"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                         نوع الدفع
                        </label>
                        <select name="Paymenttype" id="Paymenttype"  className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"                        >
                            <option value="">
                                أختر 
                            </option>
                            <option value="كاش">
                              كاش
                            </option>
                            <option value="تحويل">
                                تحويل
                            </option>
                            <option value="شبكة">
                               شبكة
                            </option>
                        
                        </select>
                     
                    
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="Arrievcashe"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                         مبلغ واصل
                        </label>
                        <input
                            type="number"
                            id="Arrievcashe"
                            name="Arrievcashe"
                            value={Arrievcashe}
                            onChange={(e) => setArrievCashe(e.target.value)}
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                    
                </div>
                <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="inprocessCashe"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                         مبلغ متبقى
                        </label>
                        <input
                            type="number"
                            id="inprocessCashe"
                            name="inprocessCashe"
                            value={inprocessCashe}
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                    
                </div>
                <div className="mb-6 flex flex-col  gap-2 mt-5">
                        <label
                            htmlFor="assetsName"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                           ملاحظات 
                        </label>
                        <textarea name='notes' className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500" >

                        </textarea>
                    
                </div>
                
      
   </div>
  

    <div className="add_return flex justify-between items-center mt-4 shadow-lg p-4 bg-white dark:bg-form-input">
    <div className="add_btn">
        <button type="submit"  className={` py-2 px-6 rounded-md bg-main text-white hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600`}>
         إضافة
        </button>
      </div>
      <div className="return_btn">
        <NavLink to="/cutomers" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md">عوده</NavLink>
      </div>
    
    </div>
  </form>
    </div>
  )
}

export default AddCustomer