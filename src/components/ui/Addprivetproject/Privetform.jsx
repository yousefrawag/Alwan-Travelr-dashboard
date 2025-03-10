import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaRegPenToSquare } from "react-icons/fa6";
import { FiPlus } from "react-icons/fi";
import { useState } from 'react';
import vactor from "../../../images/icon/vactor.svg"
import vactor2 from "../../../images/icon/Group.svg"
import UpoladFiles from "../../../hooks/UpoladFiles"
const Privetform = () => {
    const [images_video , setimages_video] = useState([])
    const [docs , setDocs] = useState([])
    const [viewmenu , setViewmenu] = useState(false)
    const handleFileChange = (e) => {
      const selectedFiles = Array.from(e.target.files);
      setimages_video((prevFiles) => [...prevFiles, ...selectedFiles]);
      e.target.value = "";
    };
    const handelDoc = (e) => {
      const selectedFiles = Array.from(e.target.files);
      setDocs((prevFiles) => [...prevFiles, ...selectedFiles]);
      e.target.value = "";
    };
  
    return (
      <form className='w-full h-full bg-white rounded-[10px] dark:bg-form-input' >
      <div className="dark:bg-form-input flex items-center shadow-lg gap-4 mb-4 w-full h-full p-4 bg-white rounded-[10px]">
        <div className="icon p-2 bg-main rounded-full">
          <FaRegPenToSquare />
        </div>
        <p className="font-semibold text-lg">ادخل بيانات المشروع</p>
      </div>
     
     <div className='main-section w-full max-h-[400px] min-h-[100px] p-4 overflow-auto	'>
              <div className="mb-6 flex flex-col  gap-2">
                          <label
                              htmlFor="assetsName"
                              className="w-full text-lg font-medium text-black dark:text-white"
                          >
                              إسم المشروع
                          </label>
                          <input
                              type="text"
                              id="assetsName"
                              name="assetsName"
                      
                              className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                          />
                      
              </div>
           
              <div className="mb-6 flex flex-col  gap-2">
                          <label
                              htmlFor="assetsName"
                              className="w-full text-lg font-medium text-black dark:text-white"
                          >
                             متطلبات المشروع 
                          </label>
                          <textarea  className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500" >
  
                          </textarea>
                      
                  </div>
                  <div className="mb-6 flex flex-col  gap-2">
                          <label
                              htmlFor="assetsName"
                              className="w-full text-lg font-medium text-black dark:text-white"
                          >
                             ملاحظات المشروع
                          </label>
                          <textarea  className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500" >
  
                          </textarea>
                      
                  </div>
          <div className="add_files p-4">
        <div className="relative inline-block text-left">
          <button
            className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium text-white bg-main rounded-md "
            type="button"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
            onClick={() => setViewmenu(!viewmenu)}
          >
            <div className="flex items-center gap-2">
              <FiPlus /> إضافة مرفقات
            </div>
          </button>
  
          {/* Dropdown menu */}
          {
            viewmenu &&  <div
            className="absolute right-0 z-10 w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
          >
            <label
              htmlFor="files"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              <img src={vactor} alt="Vector" />
              اختر من الملفات
            </label>
            <input
              type="file"
              multiple
              className="hidden"
              name="files"
              id="files"
              onChange={handelDoc}
              accept="application/pdf"
            />
            <label
              htmlFor="image-video"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
              role="menuitem"
            >
              <img src={vactor2} alt="Group" />
              اختر صورة او فيديو
            </label>
            <input
              type="file"
              name="files"
              onChange={handleFileChange}
              accept="image/png, image/jpeg, video/mp4"
              multiple
              className="hidden"
              id="image-video"
            />
          </div>
          }
        
        </div>
        {images_video.length > 0 || docs.length > 0 ? (
                  <UpoladFiles
                    images={images_video}
                    setImages={setimages_video}
                    docs={docs}
                    setDocs={setDocs}
                  />
                ) : null}
                <br />
          </div>
     </div>
    
  
      <div className="add_return flex justify-between items-center mt-4 shadow-lg p-4 bg-white dark:bg-form-input">
      <div className="add_btn">
          <button type="submit"  className={` py-2 px-6 rounded-md bg-main text-white hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600`}>
           إضافة
          </button>
        </div>
        <div className="return_btn">
          <NavLink to="/projects-main" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md">عوده</NavLink>
        </div>
      
      </div>
    </form>
    )
}

export default Privetform