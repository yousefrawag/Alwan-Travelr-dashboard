import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';
import { FaCalendarAlt } from 'react-icons/fa';
import useQuerygetiteams from '../../services/Querygetiteams'
import Breadcrumb from '../../components/common/Breadcrumbs/Breadcrumb';
import { redirect } from 'react-router-dom';

const Calnder = () => {
  const {data , isLoading} = useQuerygetiteams("missions" , "missions") 
  const [clander, setClander] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    checkMobile();
  }, []);

  useEffect(() => {
    if (data &&  data?.data?.data) {
  

      const formattedCalendarMissions = data?.data?.data?.map((item) => ({
        id: `mission-${item?._id}`,
        title: `${item?.title}`,
        date: item?.deadline?.split('T')[0],
        extendedProps: {
          type: 'mission',
          assignedTo: item?.assignedTo,
         
          projectName: item?.project?.projectName,
          description: item?.description,
          status: item?.status,
        },
      })).filter((item) => item?.extendedProps?.status !== 'مكتملة');

      setClander([...formattedCalendarMissions]);
    }
  }, [data]);

  return (
    <div className='w-full h-full'>
        <Breadcrumb pageName="تقويم" />
        <div className='shadow-md w-full h-full '>
        <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                headerToolbar={{
                  start: 'today prev,next',
                  center: 'title',
                  end: 'dayGridMonth,timeGridWeek,timeGridDay',
                }}
                height={isMobile ? 'auto' : '90vh'} // Adjust height based on mobile
                events={clander}
                locales={allLocales}
                locale="ar"
              
                eventClassNames={() => "cursor-pointer w-full h-full "} // Add cursor pointer

                eventContent={(arg) => {
                  const { type  ,  assignedTo } = arg.event.extendedProps;

                  return (
                    <div className="fc-event-content p-4 w-full h-full  ">
                    
                
                        <>
                        <span>المهمة:{arg.event?.title}</span>
                        <div
                style={{
                  whiteSpace: "wrap",
                }}
                className='flex  items-center w-full h-full'
              >
              
                <div className='w-full h-full grid items-center grid-cols-2 lg:grid-cols-2'>
                  {assignedTo?.slice(0, 2).map((item, index) => (
                    <img
                      key={index}
                      className='w-[30px] h-[30px] object-cover rounded-full border-[1px] border-main'
                      src={item?.imageURL}
                      alt='user-image'
                      style={{borderRadius:"50%"}}
                      title={item?.name} // Show user name on hover
                    />
                  ))}
                </div>
                {assignedTo?.length > 2 && (
                  <span style={{borderRadius:"50%"}} className='w-[30px] h-[30px] bg-main text-white flex items-center justify-center text-xs'>
                    +{assignedTo?.length - 2}
                  </span>
                )}
              </div>
                   
                          <div style={{ marginTop: '5px' }}>
                            <p className="ivo-client"> حالة المهمة: <span>{arg.event.extendedProps.status }</span></p>
                          </div>
                        </>
                    
                    </div>
                  );
                }}
              />
        </div>
      
    </div>
  )
}

export default Calnder