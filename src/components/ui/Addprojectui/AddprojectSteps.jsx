import React from 'react'

import AddprojectForm from './AddprojectForm';
import Addprojectleftsteps from './Addprojectleftsteps';
const AddprojectSteps = () => {
  return (
    <section className=" w-full h-full">
    <div className="w-full h-full">
      <div className="title_top py-4 ">
        <p className="text-black dark:text-white font-semibold text-lg">ادخل بيانات الخدمة</p>
      </div>
      <div className="main_project_content flex gap-5 flex-col lg:flex-row justify-between w-full h-full">
        <Addprojectleftsteps />
        <div className="bg-white dark:bg-transparent  w-full h-full lg:w-[80%] shadow-lg rounded-md ">
            <AddprojectForm />
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default AddprojectSteps