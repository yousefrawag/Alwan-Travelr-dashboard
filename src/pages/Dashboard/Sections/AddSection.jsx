import React, { useState } from "react";
import { NavLink , useNavigate } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

import useQueryadditeam from "../../../services/Queryadditeam"
import Loader from "../../../components/common/Loader";
const AddSection = () => {
  const {isLoading , addIteam} = useQueryadditeam("Section" , "Section")
    const [features, setFeatures] = useState([]);
    const [newFeature, setNewFeature] = useState("");
    const [details , setDeatils] = useState("")
      const navigate = useNavigate()

      const handleAddRequirement = () => {
        if (newFeature.trim()) {
          const requirement = {
            type: newFeature.trim(), // Set the "type" field
            completed: false, // Default value for "completed"
            userEdit: null, // Default value for "userEdit"
          };
          setFeatures([...features, requirement]);
          setNewFeature("");
        }
      };

      const handelDeleteequire = (req) => {
        const newItems = features.filter((item) => item.type !== req.type);
        setFeatures(newItems);
      };
    const handelSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
    
      const data = Object.fromEntries(formData);
     
      data.Features = features
    
 
      if(!data.name){
        toast.error("يجب إضافة عنوان القسم ")
          return ;
      }

    if(!features.length){
      toast.error("يجب إضافه  متطلبات  القسم")
      return ;
    }
   console.log(data);
   
      try {
      
          
          addIteam(data , {
              onSuccess:() =>{
               
                  e.target.reset()
                  toast.success("تم إضافه  قسم جديد")
                  navigate("/Sections")
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
    return <Loader  />
  }   
    return (
      <div className="w-full h-full">
        <form onSubmit={handelSubmit} className="w-full h-full bg-white rounded-[10px] dark:bg-form-input ">
          <div className="dark:bg-form-input flex items-center shadow-lg gap-4 mb-4 w-full h-full p-4 bg-white rounded-[10px]">
            <div className="icon p-2 bg-main rounded-full">
              <FaRegPenToSquare />
            </div>
            <p className="font-semibold text-lg">ادخل البيانات </p>
          </div>
  
          <div className="main-section w-full max-h-[400px] min-h-[100px] p-4 overflow-auto">
            {/* Service Title */}
            <div className="mb-6 flex flex-col gap-2">
              <label
                htmlFor="title"
                className="w-full text-lg font-medium text-black dark:text-white"
              >
                 عنوان القسم
              </label>
              <input
                type="text"
                id="title"
                name="name"
                className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
              />
            </div>
            </div>
  
         
  
            {/* Service Features */}
            <div className="mb-6 flex flex-col gap-2 p-4">
                    <label htmlFor="newRequirement" className="w-full text-lg font-medium text-black dark:text-white">
                        متطلبات القسم
                    </label>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            id="newRequirement"
                            value={newFeature}
                            onChange={(e) => setNewFeature(e.target.value)}
                            className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                        />
                        <button
                            type="button"
                            onClick={handleAddRequirement}
                            className="bg-main text-white py-2 px-4 rounded-md"
                        >
                            إضافة
                        </button>
                    </div>
                    <ul className="mt-7 grid grid-cols-2 lg:grid-cols-3 gap-4">
                        {features.map((req, index) => (
                            <li key={index} className=" flex justify-between text-black dark:text-white shadow-md border-[1px] border-gary-500 p-4 rounded-[10px]">
                                - {req.type}
                                <button onClick={() => handelDeleteequire(req)} type='button' className='font-bold text-red-500 '>x</button>
                            </li>
                        ))}
                    </ul>
                </div>
  
          
 

  
 
          {/* Submit and Return Buttons */}
          <div className="add_return flex justify-between items-center mt-4 shadow-lg p-4 bg-white dark:bg-form-input">
            <div className="add_btn">
              <button
                type="submit"
                className="py-2 px-6 rounded-md bg-main text-white hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600"
              >
                إضافة
              </button>
            </div>
            <div className="return_btn">
              <NavLink
                to="/Sections"
                className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md"
              >
                عودة
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    );
}

export default AddSection