import React from 'react';
import CardDataStats from '../../../components/common/CardDataStats';
import ChartOne from '../../../components/common/Charts/ChartOne';
import ChatCard from '../../../components/common/Chat/ChatCard';
import { FaSpinner, FaTimesCircle, FaCheckCircle } from 'react-icons/fa';
import { FaUsers } from "react-icons/fa";
import { GrTask } from "react-icons/gr";
import useQuerygetiteams from '../../../services/Querygetiteams';
import Loader from '../../../components/common/Loader';
import Cutomestatict from '../../../hooks/Cutomestatict';
import TopUsersChart from './TopUsersChart';
const ECommerce = () => {
  const {isLoading , data} = useQuerygetiteams("Systemstatistics" , "Systemstatistics")
  const {data:customers} = useQuerygetiteams("customers" , "customers")
  console.log("hello" , data);
  const missionStats = data?.data?.missionStats
  const generalStats = data?.data?.generalStats
  const topUsers = data?.data?.topUsers || []
  if(isLoading){
    return <Loader />
  }
  return (
    <>
 <div className='w-full h-full grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
                 <CardDataStats title="إجمالى المهام" total={missionStats?.totalMissions} >
                 <GrTask />

                 </CardDataStats>
                 <CardDataStats title="مهام متكملة" levelUp total={missionStats?.completedTasks}  >
                 <FaCheckCircle className="text-green-500" />

                </CardDataStats>
                <CardDataStats title="فى تقدم" levelUp total={missionStats?.inProgressTasks}  >
                <FaSpinner className="text-blue-500 animate-spin" />
                </CardDataStats>
                <CardDataStats title="ملغية" total={missionStats?.closedTasks}  >
                <FaTimesCircle className="text-red-500" />
                </CardDataStats>
                <CardDataStats title="إجمالى العملاء" total={generalStats?.totalCustomers}  >
                <FaUsers className="text-green-500" />
                </CardDataStats>
                <CardDataStats title="إجمالى الموظفين" total={generalStats?.totalEmployees}  >
                <FaUsers className="text-green-500" />
                </CardDataStats>
                <CardDataStats title="إجمالى الإدمن" total={generalStats?.totalAdmins}  >
                <FaUsers className="text-green-500" />
                </CardDataStats>
                <CardDataStats title="إجمالى المشاريع العامة" total={generalStats?.totlaProjects}  >
                <FaUsers className="text-green-500" />
                </CardDataStats>
                <CardDataStats title="إجمالى المشاريع الخاصة" total={generalStats?.totalPrivetproject}  >
                <FaUsers className="text-green-500" />
                </CardDataStats>
                <CardDataStats title="إجمالى  رسائل الموقع" total="3" >
                <FaUsers className="text-green-500" />
                </CardDataStats>
                <CardDataStats title="إجمالى خدمات الشركه" total={generalStats?.totalServices}  >
                <FaUsers className="text-green-500" />
                </CardDataStats>
                <CardDataStats title="إجمالى التأشيرات" total={generalStats?.totalVisa}   >
                <FaUsers className="text-green-500" />
                </CardDataStats>
        </div>

      <div className="mt-4 w-full">
      <span  className='
      
      text-xl
      mt-5
      mb-10
      '>  إحصائيات إجمالى العملاء</span>
        <Cutomestatict chartType={"area"} data={customers?.data?.data || []} seriesName="إجمالى العملاء" />
     

  
   
   <TopUsersChart topUsers={topUsers} />
     
      
      
      </div>
    </>
  );
};

export default ECommerce;
