import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useQuerygetSpacficIteam from "../../../services/QuerygetSpacficIteam"
import Loader from '../../../components/common/Loader'
import Carduser from '../../../components/common/Carduser'
import { FaSpinner, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import BarChart from '../../../components/common/Charts/BarChart'

const GetuserByid = () => {
  const {id} = useParams()
  
  const [startDate , SetstartDay] = useState("")
  const [endDate ,setEndDay] = useState("")
  const [params , setParams] = useState({
    startDate,
    endDate
  })
  const {data , isLoading} = useQuerygetSpacficIteam("users" , "users" , id , params)
  const TotalFince = data?.TotalFince
 const Currentuser = data?.data
  useEffect(() => {
    setParams({
      startDate,
      endDate
    })
  } , [startDate , endDate])
 const handelset = () => {
  SetstartDay("")
  setEndDay("")

 } 
 if(isLoading){
  return <Loader />
 } 
  return (
    <>
 
     <img src={Currentuser?.imageURL} alt={Currentuser?.name}  className='w-20 h-20 rounded-full '/> 
     <div className='w-full h-full grid grid-cols-1 gap-2 xl:grid-cols-2	 shadow-md p-5	'>
         
        
        
          
         <div className="mb-6 flex flex-col  gap-2">
           <span
             htmlFor="name"
             className="w-full text-lg font-medium text-gray-700 dark:text-white"
           >
         الاسم
           </span>
           <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
          
          >
          {
           Currentuser?.name
          }
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
              {
                 Currentuser?.email
              }
          </p>
        
         </div>
         <div className="mb-6 flex flex-col  gap-2">
           <span
             htmlFor="name"
             className="w-full text-lg font-medium text-gray-700 dark:text-white"
           >
        الجوال
           </span>
           <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
          
          >
              {
                 Currentuser?.phone
              }
          </p>
        
         </div>
         <div className="mb-6 flex flex-col  gap-2">
           <span
             htmlFor="name"
             className="w-full text-lg font-medium text-gray-700 dark:text-white"
           >
        الوظيفة
           </span>
           <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
          
          >
              {
                 Currentuser?.job
              }
          </p>
        
         </div>
         <div className="mb-6 flex flex-col  gap-2">
           <span
             htmlFor="name"
             className="w-full text-lg font-medium text-gray-700 dark:text-white"
           >
        نوع المستخدم
           </span>
           <p className=" dark:border-form-strokedark dark:bg-form-input  text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
          
          >
              {
                 Currentuser?.type
              }
          </p>
        
         </div>
     </div>
     <div className='flex items-center w-full gap-4 mt-10'>
<div className="mb-6 flex flex-col gap-2">
              <label
                htmlFor="title"
                className="w-full text-lg font-medium text-black dark:text-white"
              >
                تاريخ البداية 
              </label>
              <input
                type="date"
                id="title"
                name="startDate"
                value={startDate}
                onChange={(e) => SetstartDay(e.target.value)}
                className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
              />
            </div>
<div className="mb-6 flex flex-col gap-2">
              <label
                htmlFor="endDate"
                className="w-full text-lg font-medium text-black dark:text-white"
              >
                 تاريخ النهاية
              </label>
              <input
                type="date"
                id="endDate"
                name="endDate"
                value={endDate}
                onChange={(e) => setEndDay(e.target.value)}
                className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
              />
            </div>
       <button  
       onClick={handelset}
                 className="flex items-center justify-center gap-2 bg-main hover:bg-main-200 text-white w-[150px] h-[50px] rounded-lg shadow-md"

       >
        إعاده تعين
        </button>     
</div>
     <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-5 mt-10'>

<Carduser title="إجمالى الرصيد" total={TotalFince?.totalAmount} >
  <RiMoneyDollarCircleLine size={40} />
</Carduser>

<Carduser title="إجمالى الرصيد المتاح" levelUp total={TotalFince?.totalArrivedCash} >
  <FaCheckCircle className="text-green-500" size={30}/>
</Carduser>

<Carduser title="إجمالى الرصيد المتبقى"  total={TotalFince?.totalInProcessCash}>
  <FaSpinner className="text-blue-500 animate-spin" size={30}/>
</Carduser>





</div>

<BarChart data={data?.TotalpyemtyypeforEachuser} />

    </>

  )
}

export default GetuserByid