import React from 'react'
import HeadPagestyle from '../../../components/common/HeadPagestyle'
import CustomeTabel from '../../../components/common/CustomeTabel'
import DropdownDefault from '../../../components/common/Dropdowns/DropdownDefault'
import { Link } from 'react-router-dom';
import { TbListDetails } from "react-icons/tb";
import { BiSolidShow } from "react-icons/bi";
import { format } from "date-fns";
import { MdDelete } from "react-icons/md";
import useQuerygetiteams from '../../../services/Querygetiteams';
import useQueryDelete from '../../../services/useQueryDelete';
import Loader from '../../../components/common/Loader';
import { useState , useMemo } from 'react';
import useGetUserAuthentications from '../../../middleware/GetuserAuthencations';
import FiltertionHook from '../../../hooks/FiltertionHook';
const GetVisarequire = () => {
  const {data , isLoading} = useQuerygetiteams("visav" , "visav")
  const {deleteIteam} = useQueryDelete("visav" , "visav")
  const {CanAdd , CanDelte , CanEdit , CanView , isAdmin} = useGetUserAuthentications("visa")

  const countryData = data?.data?.data
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = (id) => {
    setIsDropdownOpen(() => isDropdownOpen === id ? null : id);
  };
      const [params, setParams] = useState({
          field: "",
          searchTerm: "",
          startDate: "",
          endDate: "",
        });
      
        const filters = [
          {
            value: "title",
            name: "إسم الدوله او التأشيره "
          },
        
      
      
       
        ];
  
  
     
  
    const filteredData = useMemo(() => {
      if (!countryData) return [];
  
      return countryData.filter(item => {
        if (params.searchTerm && params.field) {
          const fieldValue = params.field.split('.').reduce((obj, key) => obj?.[key], item);
          return fieldValue?.toLowerCase().includes(params.searchTerm.toLowerCase());
        }
        return true;
      });
    }, [data, params]);
  if(isLoading){
    return <Loader />
  }
    return (
    <div>
        <HeadPagestyle  pageName="متطلبات التأشيرات" isAdmin={isAdmin} CanAdd={CanAdd} to="/website-Add-Visa" title="إضافة تأشيره"/>
        <FiltertionHook filteredData={filteredData}  key="المشاريع العامه.xlsx" filters={filters} params={params} setParams={setParams}/>


        <div className="grid grid-cols-1 lg:grid-cols-3  gap-4">
                {
                    filteredData?.map((item) => {
                        return (
                          <div className={cardStyle} key={item._id}>
                          {/* Dropdown Menu */}
                       
                    
                          {/* Card Content */}
                          <div className="w-full h-full bg-white rounded-[20px] shadow-md overflow-hidden">
                            <div className="w-full h-[150px] relative">
                              <img
                                src={item.image?.imageURL}
                                alt="feat"
                                width={400}
                                height={50}
                                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                                className="rounded-[20px]"
                              />
                              <img
                                src={item.flag?.imageURL}
                                alt="feat"
                                width={50}
                                height={50}
                                style={{ objectFit: "cover" }}
                                className="rounded-full absolute w-[50px] h-[50px] bottom-[-15px] left-1/2 transform -translate-x-1/2"
                              />
                            </div>
                            <div className="py-4 flex items-center justify-center w-full">
                              <Link
                                to={`/website-Visa/${item._id}`}
                                className="text-[#2C2C2E] font-bold mb-2 flex text-xl mt-5 items-center justify-center text-center"
                              >
                                {item?.title}
                              </Link>

                              {isDropdownOpen === item._id && (
                              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                                <div className="py-1">
                                  <Link
                                    to={`/website-Visa/${item._id}`}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                  >
                                    <BiSolidShow />
                                  </Link>
                                  {
                                    isAdmin || CanEdit ? 
                                    <Link
                                    to={`/website-Edit-Visa/${item._id}`}
                                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                     >
                                       <TbListDetails />
                                     </Link>
                                     : null
                                  }
                              {
                                isAdmin || CanDelte ?
                                <button
                                onClick={() => deleteIteam(item?._id)}
                                className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                              >
                                    <MdDelete />
                              </button>
                                 : null
                              }
                           
                                </div>
                              </div>
                            )}
                               <div className="absolute top-4 right-4">
                            <button
                              onClick={() => toggleDropdown(item?._id)}
                              className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 focus:outline-none"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                              </svg>
                            </button>
                    
                           
                          
                          </div>
                            </div>
                          </div>
                        </div>
                        )
                    })
                }
    
        </div>
    </div>
    )
}
const cardStyle = "h-[240px] relative bg-white rounded-[20px] shadow-lg border-1 border-gray-600 flex flex-col items-start";

export default GetVisarequire