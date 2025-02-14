import React from 'react'

import image1 from "../../../images/brand/brand-01.svg"
import image2 from "../../../images/brand/brand-02.svg"
import image3 from "../../../images/brand/brand-03.svg"
import { FaFilePdf } from "react-icons/fa6";
import { Link, useParams } from 'react-router-dom';
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import HeadPagestyle from '../../../components/common/HeadPagestyle';
import QuerygetSpacficIteam from '../../../services/QuerygetSpacficIteam';
import Loader from '../../../components/common/Loader';

const GetVisavByid = () => {
  const {id} = useParams()
  const {data , isLoading} = QuerygetSpacficIteam("visav" , "visav" , id)
  const currentCountry = data?.data
if(isLoading){
  return <Loader />
}  
    return (
        <div className='w-full h-full'>
        <HeadPagestyle pageName="بيانات التأشيره" to="/website-Visa" title="عوده" />
        <div className="w-full h-full mb-10  pt-5">
      <h1 className="w-full text-4xl font-bold text-center">متطلبات التأشيره</h1>
      <span className="w-full text-center font-bold text-3xl flex items-center justify-center mt-10 text-main">
        {currentCountry?.title}
      </span>
      <div className="container flex items-center justify-center w-full bg-white mx-auto mt-10">
        <div className="w-full border-y-[1px] border-gray-400">
          {
            currentCountry?.Features?.map((item ,i) => {
              return (
                <div key={`${i+1}-${item.title}`} className="w-full flex flex-col lg:flex-row gap-0 border-b border-gray-400">
                <div className="border-l border-gray-400 p-5 w-[30%] flex items-center justify-center">
                 <span>{item.title}</span> 
                </div>
                <div className="p-5 text-right">
                <p >
                {
                  item?.details
                }        
                </p>
                 
                </div>
              </div>
              )
            })
          }
       
      
          
          {/* Add more grid items here if needed */}
          
        </div>

      </div>
 

    </div>
    </div>
      )
}

export default GetVisavByid