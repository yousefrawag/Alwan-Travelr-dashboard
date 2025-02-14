import React from 'react'
import Breadcrumb from '../../components/common/Breadcrumbs/Breadcrumb'
import { NavLink , Link } from 'react-router-dom'
import Loader from '../../components/common/Loader'
import useQuerygetiteams from '../../services/Querygetiteams'
import toast from 'react-hot-toast'
import useQueryupdate from '../../services/useQueryupdate'
const PrivcyPolicy = () => {
    const {data , isLoading} = useQuerygetiteams("prvicy" , "prvicy")
    const {isLoading:addLoading , updateiteam} = useQueryupdate("prvicy" , "prvicy")
    const CurrentPrivcy = data?.data?.data
  const handelSupmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  const id = CurrentPrivcy[0]?._id
    const data = Object.fromEntries(formData);
    if(!data.details) {
        return toast.error("يجب إضافه سياسه الخصوصيه")
    }
    try {
        updateiteam({data , id} , {
            onSuccess:() =>{
          
                toast.success("تم   حفظ سياسة الخصوصيه بنجاح")
               
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
        toast.error("يجب مراجعه البيانات بشكل صحيح")
    }
  }
    
if(isLoading || addLoading){
    return <Loader />
}    
  return (
    <div className='w-full h-full'>
        <Breadcrumb pageName="سياسه الخصوصيه" />
        <form onSubmit={handelSupmit} className='w-full h-full shadow-lg p-4 min-h-[500px] bg-white rounded-lg'>
        <textarea defaultValue={CurrentPrivcy[0]?.details} name='details'  className="min-h-[400px] w-full focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                >

                </textarea>
             <div  className="add_return flex justify-between items-center mt-4 p-4 bg-white dark:bg-form-input">
                        <div className="add_btn">
                          <button
                            type="submit"
                            className="py-2 px-6 rounded-md bg-main text-white hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600"
                          >
                            حفظ
                          </button>
                        </div>
                  
                      </div>    
        </form>
    </div>
  )
}

export default PrivcyPolicy