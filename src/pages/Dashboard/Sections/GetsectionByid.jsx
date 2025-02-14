import React from 'react';
import { useParams } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa6";
import { HiMiniViewfinderCircle } from "react-icons/hi2";
import HeadPagestyle from '../../../components/common/HeadPagestyle';
import useQuerygetSpacficIteam from '../../../services/QuerygetSpacficIteam';
import Loader from '../../../components/common/Loader';

const GetsectionByid = () => {
  const { id } = useParams();
  const { data, isLoading } = useQuerygetSpacficIteam("Section", "Section", id);

  console.log("Fetched Data:", data); // Debugging Log

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full">
      <HeadPagestyle pageName="بيانات القسم" to="/Sections" title="عوده" />
      <div className="w-full h-full grid grid-cols-1 gap-2 xl:grid-cols-2 shadow-md p-5">
        {/* Title */}
        <div className="mb-6 flex flex-col gap-2">
          <span className="w-full text-lg font-medium text-gray-700 dark:text-white">
            عنوان القسم
          </span>
          <p className="dark:border-form-strokedark dark:bg-form-input text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
            {data?.name}
          </p>
        </div>

        {/* Features */}
        <div className="mb-6 flex flex-col gap-2">
          <span className="w-full text-lg font-medium text-gray-700 dark:text-white">
            متطلبات القسم
          </span>
          <div className="w-full h-full grid grid-cols-2 gap-4">
            {data?.Features?.map((item, index) => (
              <p key={index} className="dark:border-form-strokedark dark:bg-form-input text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500">
                {item?.type}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetsectionByid;
