import React from 'react'
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaUsers } from "react-icons/fa";
import { GrMapLocation } from "react-icons/gr";

import CardEstbilsh from '../../common/CardEstbilsh';
const EstbilshAbout = () => {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5 w-full">
       
            <CardEstbilsh icon={<HiOutlineBuildingOffice2 size={60} className="text-main" />} title="إجمالى الإصول" to="" total={30} />
            <CardEstbilsh icon={<FaUsers size={60} className="text-main" />} title="إجمالى المستخدمين" to="" total={20} />
            <CardEstbilsh icon={<GrMapLocation size={60} className="text-main" />} title="إجمالى المواقع" to="" total={40} />
            <CardEstbilsh icon={<HiOutlineBuildingOffice2 size={60} className="text-main" />} title="إجمالى مراكز الرعايه" to="" total={30} />
       
  
   
    </div>
  )
}

export default EstbilshAbout