import React, { useState  , useEffect} from "react";
import { NavLink , useNavigate, useParams } from "react-router-dom";
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";
import UploadSingalefile from "../../../hooks/UploadSingalefile";
import Renderfile from "../../../hooks/Renderfile";
import useQueryadditeam from "../../../services/Queryadditeam"
import Loader from "../../../components/common/Loader";
import useQueryupdate from "../../../services/useQueryupdate";
import useQuerygetSpacficIteam from "../../../services/QuerygetSpacficIteam";
const UpdateVisaRequire = () => {
  const {id} = useParams()
  const {data , isLoading:getLoading} = useQuerygetSpacficIteam("visav" , "visav" , id)
  const {isLoading , updateiteam} = useQueryupdate("visav" , "visav")
  const CurrentVisa = data?.data
    const [features, setFeatures] = useState([]);
    const [newFeature, setNewFeature] = useState("");
    const [details , setDeatils] = useState("")
      const navigate = useNavigate()
    const [image , setImages] = useState({
      file:"",
      view:""
    })
    const [flag , setIflag] = useState({
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
  const handelFileflag = (e) => {
    const file = e.target.files[0]
    setIflag({
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
      const newItem = {
        id:Date.now(),
        title:newFeature,
        details:details
      }
      setFeatures((prev) => [...prev, newItem]);
      setNewFeature(""); // Clear the input after adding
      setDeatils("")
    };
  
    // Handle deleting a feature
    const handleDelete = (id) => {
      const updatedFeatures = features.filter((item) => item.id !== id);
      setFeatures(updatedFeatures);
    };
    const handelSubmit = (e) => {
      e.preventDefault();
      const formData = new FormData(e.currentTarget);
    
      const data = Object.fromEntries(formData);
     
      data.Features = features
      formData.set("Features" , JSON.stringify(features) )
      formData.set("image" , image.file)
      formData.set("flag" , flag.file)
      if(!data.title){
        toast.error("يجب إضافة عنوان التأشيره ")
          return ;
      }
  
      if(!image.view){
        toast.error("يجب إضافه صوره للتاشيره الدوله")
        return ;
    }
    if(!flag.view){
      toast.error("يجب إضافه صور علم للتاشيره الدوله")
      return ;
  }
    if(!features.length){
      toast.error("يجب إضافه  متطلبات  التأشيره")
      return ;
    }

   
      try {
      
          
        updateiteam({data:formData , id} , {
              onSuccess:() =>{
               
                  e.target.reset()
                  toast.success("تم تعديل متطلبات تأشيره بنجاح")
                  navigate("/website-Visa")
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
      if (CurrentVisa?.Features) {
        const vaildRequire = CurrentVisa.Features.map((item) => ({
          id: item?._id, 
          ...item
        }));
        setFeatures(vaildRequire); // Set the array directly
        setImages({
          file:"" ,
          view:CurrentVisa?.image?.imageURL
        })
        setIflag({
          file:"",
          view:CurrentVisa?.flag?.imageURL
        })
      }
    }, [CurrentVisa]);
    
  
   
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
                 تأشيره
              </label>
              <input
                type="text"
                id="title"
                name="title"
                defaultValue={CurrentVisa?.title}
                className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
              />
            </div>
  
         
  
            {/* Service Features */}
            <div className="mb-6 flex flex-col gap-2 mt-5">
               
           
              <div className="mb-6 flex flex-col gap-2 mt-5">
              <label
                htmlFor="features"
                className="w-full text-lg font-medium text-black dark:text-white"
              > 
              العنوان
              </label>
                <input
                  type="text"
                  id="features"
                  name="features"

                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                  className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                />
              
              </div>
              <div className="mb-6 flex flex-col gap-2 mt-5">
              <label
                htmlFor="features"
                className="w-full text-lg font-medium text-black dark:text-white"
              > 
              التفاصيل
              </label>
                <textarea value={details} onChange={(e) => setDeatils(e.target.value)} className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                >

                </textarea>
              
              </div>
              <button
                  type="button"
                  onClick={handleAddFeature}
                  className="flex items-center gap-1 bg-main text-white p-3 rounded-md hover:bg-blue-600"
                >
                  <FiPlus /> إضافة
                </button>
            </div>
  
            {/* Display Added Features */}
            {features.length > 0 && (
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4">
                {features.map((item, index) => (
                  <div
                    key={item.id}
                    className="w-full p-4 shadow-md rounded-[10px] flex justify-between items-center bg-white dark:bg-gray-700"
                  >
                    <div className="w-full h-full grid grid-cols-1 h-auto min-h-[150px]">
                    <span className="text-main font-medium break-words">{item.title}</span>
                    <span className="mt-5 break-words">{item.details}</span>
                    </div>
                    
                    <span
                      onClick={() => handleDelete(item.id)}
                      className="text-red-500 font-bold text-lg cursor-pointer"
                    >
                      x
                    </span>
                  </div>
                ))}
              </div>
            )}
     <h2 className="mt-5 ">صوره علم الدولة </h2>
     <UploadSingalefile images={flag} handelFile={handelFileflag} id="flag-icon"  />
  <h2 className="mt-5 "> قم بارفاق صوره من معالم الدولة</h2>
 
  <UploadSingalefile images={image} handelFile={handelFile} id="cover" />
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
                to="/website-Visa"
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

export default UpdateVisaRequire