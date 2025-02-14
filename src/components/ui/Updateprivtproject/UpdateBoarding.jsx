import React from 'react'
import PrivetSteps from '../Addprivetproject/PrivetSteps'
import UpdateformPrivte from './UpdateformPrivte'
const UpdateBoarding = () => {
  return (
    <section className=" w-full h-full">
    <div className="w-full h-full">
      <div className="title_top py-4 ">
        <p className="text-black dark:text-white font-semibold text-lg">ادخل بيانات المشروع</p>
      </div>
      <div className="main_project_content flex gap-5 flex-col lg:flex-row justify-between w-full h-full">
        <PrivetSteps />
        <div className="bg-white dark:bg-transparent  w-full h-full lg:w-[80%] shadow-lg rounded-md ">
            <UpdateformPrivte />
        </div>
      </div>
    </div>
  </section>
  )
}

export default UpdateBoarding