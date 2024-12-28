import React, { useState } from 'react'
import Breadcrumb from '../../../../components/common/Breadcrumbs/Breadcrumb'
import { Link, useNavigate } from 'react-router-dom'
import useQuerygetiteams from '../../../../services/Querygetiteams'
import useQueryadditeam from '../../../../services/Queryadditeam'
import toast from 'react-hot-toast'
const AddnewEstbilshments = () => {
  // react hooks && custome fetch and add
  const{isError , isLoading , data} =  useQuerygetiteams("mainCategory" , "mainCategory")
  const {addIteam} =  useQueryadditeam("estbilshment" , "estbilshment")
  const [errors , setErrors] = useState({})
  const navigate = useNavigate()
   // react hooks && custome fetch and add


// handel add new Estbilshment
const handelSubmit = (e) =>{
  e.preventDefault();
  try {
      const formData = new FormData(e.currentTarget);

      const data = Object.fromEntries(formData);
      if(!data.name){
          return setErrors({...errors , name:"يجب إضافه اسم للمنشأه"})
      }
      if(!data.mainCategory){
        return setErrors({...errors , mainCategory:"يجب إضافه مستوى للمنشأه"}) 
    }
    if(!data.estbilshType){
      return setErrors({...errors , estbilshType:"يجب إضافه نوع للمنشأه"}) 
  }
      
      addIteam(data , {
          onSuccess:() =>{
             setErrors({})
              e.target.reset()
              toast.success("تم إضافه منشأه جديد")
              navigate("/Est-ablishments")
          }
      })
  } catch (error) {
      console.log(error);
      
  }
}
  return (
    <div className='w-full'>
        <Breadcrumb  pageName="إضافه منشأه"/>
        {/* form add new estbilshment */}
        <form onSubmit={handelSubmit} className='w-full h-full grid grid-rows-1	lg:grid-rows-3 shadow-md p-5	'>
            <div className="mb-6 flex flex-col  gap-2">
              <label
                htmlFor="name"
                className="w-full text-lg font-medium text-gray-700 dark:text-white"
              >
                إسم المنشأه
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Title name..."
                className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
              />
              {
               errors.name && <p className='text-red-500'>{errors.name}</p>
              }
            </div>
            {/* set estbilshment mainCategory */}
           
            <div className="mb-6 flex flex-col  gap-5">
                    <label
                      htmlFor="mainCategory"
                      className="w-full  text-lg font-medium text-gray-700 dark:text-white"
                    >
                    مستوى المنشأه
                    </label>
                  <select name='mainCategory' className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 pr-10 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
                      <option>
                                قم بالإختيار
                      </option>
                        {
                          data?.data?.allCategory?.map((item) =>{
                            return <option key={item._id} value={item._id}>{item.name}</option>
                          })
                        }
                                  
                      
                  </select>
                  {
               errors.mainCategory && <p className='text-red-500'>{errors.mainCategory}</p>
              }
              </div>

               {/*END set estbilshment mainCategory */}

              <div className="mb-6  flex flex-col  gap-2">
                <label
                  htmlFor="estbilshType"
                  className="w-full text-lg font-medium text-gray-700 dark:text-white"
                >
                  نوع المنشأه
                </label>
                <input
                  type="text"
                  id="estbilshType"
                  name="estbilshType"
                  placeholder="نوع المنشأه"
                  className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                />
                  {
                     errors.name && <p className='text-red-500'>{errors.name}</p>
                  }
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
        {/* form add new estbilshment */}
    </div>
  )
}

export default AddnewEstbilshments