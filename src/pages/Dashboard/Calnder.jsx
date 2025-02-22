import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import allLocales from '@fullcalendar/core/locales-all';
import timeGridWeek from '@fullcalendar/timegrid';
import timeGridDay from '@fullcalendar/timegrid';
import { useNavigate } from 'react-router-dom';
import useQuerygetiteams from '../../services/Querygetiteams';
import Breadcrumb from '../../components/common/Breadcrumbs/Breadcrumb';

const Calnder = () => {
  const { data, isLoading } = useQuerygetiteams("missions", "missions");
  const { data: projects } = useQuerygetiteams("projects", "projects");
  const [calendarEvents, setCalendarEvents] = useState([]);
  const [selectedSection, setSelectedSection] = useState(""); // Section filter state
  const [isMobile, setIsMobile] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
      setIsMobile(mobileRegex.test(userAgent));
    };

    checkMobile();
  }, []);

  useEffect(() => {
    if (data?.data?.data && projects?.data?.data) {
      // Format missions for calendar
      const formattedMissions = data?.data?.data
        ?.map((item) => ({
          id: item?._id,
          title: item?.project ? item?.project?.name : item?.Privetproject?.name,
          date: item?.deadline?.split('T')[0],
          extendedProps: {
            type: 'mission',
            assignedTo: item?.assignedTo,
            projectName: item?.project?.projectName,
            description: item?.description,
            status: item?.status,
          },
        }))
        .filter((item) => item?.extendedProps?.status !== 'مكتملة');

      // Filter projects based on selected section
      let filteredProjects = projects?.data?.data;
      if (selectedSection) {
        filteredProjects = filteredProjects.filter(
          (item) => item.section?._id === selectedSection
        );
      }

      // Format projects for calendar
      const formattedProjects = filteredProjects.map((item) => ({
        id: item?._id,
        title: item?.name,
        date: item?.meetingDate?.split('T')[0],
        extendedProps: {
          type: "projects",
          client: item?.customers?.name,
          section: item?.section?.name
        }
      }));

      setCalendarEvents([...formattedMissions, ...formattedProjects]);
    }
  }, [data, projects, selectedSection]);

  const handleEventClick = (info) => {
    const id = info.event.id;
    const type = info.event.extendedProps.type;
    if (type === "projects") {
      navigate(`/projects-main/${id}`);
    } else {
      navigate(`/Taskes/${id}`);
    }
  };

  return (
    <div className='w-full h-full'>
      <Breadcrumb pageName="التقويم" />

      {/* Section Filter Dropdown */}
      <div className="mb-4">
  <label className="block text-lg font-semibold text-gray-700 mb-2">فلترة حسب القسم:</label>
  <div className="relative">
    <select 
      value={selectedSection} 
      onChange={(e) => setSelectedSection(e.target.value)} 
      className="w-full p-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-main focus:border-main transition-all"
    >
      <option value="" className="bg-gray-100 text-gray-700">جميع الأقسام</option>
      
      {Array.from(
        new Set(
          projects?.data?.data
            ?.filter((project) => project?.section) // Remove projects without a section
            ?.map((project) => JSON.stringify({
              id: project.section._id,
              name: project.section.name
            })) // Convert to JSON to avoid duplicates
        )
      ).map((section) => {
        const parsedSection = JSON.parse(section);
        return (
          <option 
            className="bg-white text-gray-700 hover:bg-gray-200 transition-all" 
            key={parsedSection.id} 
            value={parsedSection.id}
          >
            {parsedSection.name}
          </option>
        );
      })}
    </select>
  
  </div>
</div>


      <div className='shadow-md w-full h-full'>
        <FullCalendar
     plugins={[dayGridPlugin, timeGridWeek, timeGridDay, interactionPlugin]}
     initialView="dayGridMonth"
     headerToolbar={{
       start: 'today prev,next',
       center: 'title',
       end: 'dayGridMonth,timeGridWeek,timeGridDay',
     }}
          height={isMobile ? 'auto' : '90vh'}
          events={calendarEvents}
          locales={allLocales}
          locale="ar"
          eventClick={handleEventClick}
          eventClassNames={() => "cursor-pointer w-full h-full"}
          eventContent={(arg) => {
            const { type, assignedTo } = arg.event.extendedProps;
            return (
              <div className="fc-event-content p-2 w-full h-full">
                {type === "mission" ? (
                  <>
                    <span>المهمة: {arg.event?.title}</span>
                    <div className='flex items-center w-full h-full'>
                      <div className='w-full h-full grid items-center grid-cols-2 lg:grid-cols-2'>
                        {assignedTo?.slice(0, 2).map((item, index) => (
                          <img
                            key={index}
                            className='w-[30px] h-[30px] object-cover rounded-full border-[1px] border-main'
                            src={item?.imageURL}
                            alt='user-image'
                            title={item?.name}
                          />
                        ))}
                      </div>
                      {assignedTo?.length > 2 && (
                        <span className='w-[30px] h-[30px] bg-main text-white flex items-center justify-center text-xs rounded-full'>
                          +{assignedTo?.length - 2}
                        </span>
                      )}
                    </div>
                    <div style={{ marginTop: '5px' }}>
                      <p className="ivo-client">حالة المهمة: <span>{arg.event.extendedProps.status}</span></p>
                    </div>
                  </>
                ) : (
                  <>
                    <span>الخدمة: {arg.event?.title}</span>
                    <div style={{ marginTop: '5px' }}>
                      <p className="ivo-client text-wrap">العميل: <span>{arg.event.extendedProps.client}</span></p>
                      <p className="ivo-client">القسم: <span>{arg.event.extendedProps.section}</span></p>
                    </div>
                  </>
                )}
              </div>
            );
          }}
        />
      </div>
    </div>
  );
};

export default Calnder;
