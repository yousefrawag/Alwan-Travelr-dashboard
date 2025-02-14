
import React, { useEffect, useState } from "react";
import { NavLink, useParams , useNavigate } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";
import UploadSingalefile from "../../../hooks/UploadSingalefile";
import useQueryupdate from "../../../services/useQueryupdate";
import useQuerygetSpacficIteam from "../../../services/QuerygetSpacficIteam";
import Loader from "../../../components/common/Loader";
const UpdateServices = () => {
  const {id} = useParams()
  const {data , isLoading:getLoading} = useQuerygetSpacficIteam("Services" , "Services" , id)
  const CurrentServises = data?.data
  const {isLoading , updateiteam} = useQueryupdate("Services" , "Services")
  const [features, setFeatures] = useState([]);
  const [newFeature, setNewFeature] = useState("");
  const navigate = useNavigate()
  const [image , setImages] = useState({
    file:"",
    view:""
  })
const handelFile = (e) => {
    const file = e.target.files[0]
    setImages({
        file,
        view:URL.createObjectURL(file)
    })
}
  // Handle adding a new feature
  const handleAddFeature = () => {
    if (newFeature.trim() === "") {
        toast.error("Please enter a valid feature!");
      return;
    }
    if (features.includes(newFeature)) {
      toast.error("Feature already added!");
      return;
    }
    setFeatures((prev) => [...prev, newFeature]);
    setNewFeature(""); // Clear the input after adding
  };

  // Handle deleting a feature
  const handleDelete = (featureName) => {
    const updatedFeatures = features.filter((item) => item !== featureName);
    setFeatures(updatedFeatures);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    const data = Object.fromEntries(formData);
    data.Features = features
    formData.set("Features" , JSON.stringify(features) )
    formData.set("image" , image.file)
    if(!data.title){
      toast.error("يجب إضافة عنوان الخدمة ")
        return ;
    }
    if(!data.desc){
      toast.error("يجب إضافه تفاصيل الخدمة")
      return ;
  }
    if(!image.view){
      toast.error("يجب إضافه صوره للخدمة")
      return ;
  }
  if(!features.length){
    toast.error("يجب إضافه  مميزات الخدمة")
    return ;
  }
 console.log(data);
 
    try {
    
        
      updateiteam({data:formData , id} , {
            onSuccess:() =>{
             
                e.target.reset()
                toast.success("تم تعديل خدمة بنجاح")
                navigate("/website-Services")
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

  useEffect(() => {
    if(CurrentServises){
      setFeatures(CurrentServises.Features)
      setImages((prev) =>({...prev, view:CurrentServises?.image?.imageURL}))
    }
  } , [CurrentServises]) 
   if(isLoading || getLoading) {
    return <Loader />
   }

  return (
    <div className="w-full h-full">
      <form onSubmit={handelSubmit} className="w-full h-full bg-white rounded-[10px] dark:bg-form-input ">
        <div className="dark:bg-form-input flex items-center shadow-lg gap-4 mb-4 w-full h-full p-4 bg-white rounded-[10px]">
          <div className="icon p-2 bg-main rounded-full">
            <FaRegPenToSquare />
          </div>
          <p className="font-semibold text-lg">تعديل بيانات الخدمة</p>
        </div>

        <div className="main-section w-full max-h-[400px] min-h-[100px] p-4 overflow-auto">
          {/* Service Title */}
          <div className="mb-6 flex flex-col gap-2">
            <label
              htmlFor="title"
              className="w-full text-lg font-medium text-black dark:text-white"
            >
              عنوان الخدمة
            </label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={CurrentServises?.title}
              className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
            />
          </div>

          {/* Service Details */}
          <div className="mb-6 flex flex-col gap-2 mt-5">
            <label
              htmlFor="desc"
              className="w-full text-lg font-medium text-black dark:text-white"
            >
              تفاصيل الخدمة
            </label>
            <textarea
              id="desc"
              name="desc"
              defaultValue={CurrentServises?.desc}
              className="min-h-[200px] focus:border-primary active:border-primary min-h-[200px] dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
            ></textarea>
          </div>

          {/* Service Features */}
          <div className="mb-6 flex flex-col gap-2 mt-5">
            <label
              htmlFor="features"
              className="w-full text-lg font-medium text-black dark:text-white"
            >
              مميزات الخدمة
            </label>
            <div className="w-full flex gap-2">
              <input
                type="text"
                id="features"
                name="features"
                value={newFeature}
                onChange={(e) => setNewFeature(e.target.value)}
                className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleAddFeature}
                className="flex items-center gap-1 bg-main text-white p-3 rounded-md hover:bg-blue-600"
              >
                <FiPlus /> إضافة
              </button>
            </div>
          </div>

          {/* Display Added Features */}
          {features.length > 0 && (
            <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="w-full p-4 shadow-md rounded-[10px] flex justify-between items-center bg-white dark:bg-gray-700"
                >
                  <span className="text-main font-medium">{item}</span>
                  <span
                    onClick={() => handleDelete(item)}
                    className="text-red-500 font-bold text-lg cursor-pointer"
                  >
                    x
                  </span>
                </div>
              ))}
            </div>
          )}

<UploadSingalefile images={image} handelFile={handelFile} id="services" />
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
              to="/website-Services"
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

export default UpdateServices