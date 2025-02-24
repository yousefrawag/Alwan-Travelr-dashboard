import React, { useEffect, useRef, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../../images/logo/logo2.jpg';
import { FaGripHorizontal, FaUsers, FaTasks, FaProjectDiagram, FaCalendarAlt, FaChartLine, FaBuilding } from 'react-icons/fa';
import { MdContactSupport, MdOutlineSecurity } from 'react-icons/md';
import { IoLocation } from 'react-icons/io5';
import { useSelector } from 'react-redux';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const user = useSelector((state) => state.userState.userinfo )
  const isAdmin = user?.type === "admin"
  const Permissions = user?.role?.permissions || []
  const HasPermission = (key) => {
const isauthencated = Permissions?.some((per) => per === key)
return isauthencated
  }
  console.log( HasPermission("canViewAdmin"));
  console.log( Permissions);
  
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true'
  );

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute right-0 top-0 z-9 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white border-l duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : 'translate-x-[300px]'
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-6">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-[260px]  h-[140px]" />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z" fill="" />
          </svg>
        </button>
      </div>

      <div className="no-scrollbar flex flex-col overflow-y-auto">
        <nav className="mt-5 py-4 px-4 lg:mt-4 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
            {
     isAdmin || HasPermission("canViewClients") ? 
     <li>
 
                <NavLink
                  to="/cutomers"
                  className={`${liststyle} ${pathname.includes('cutomers') && itemstyle}`}
                >
                  <FaUsers className="text-lg" /> العملاء
                </NavLink>
 </li> : null
     
  }
  {
isAdmin || HasPermission("canViewProjects") ?     <li>
<NavLink
  to="/projects-main"
  className={`${liststyle} ${pathname.includes('projects-main') && itemstyle}`}
>
  <FaProjectDiagram className="text-lg" /> الخدمات العامة
</NavLink>
</li> :null
}
          
{
  isAdmin || HasPermission("canViewPrivetProjects") ?  
  <li>
  <NavLink
    to="/privte-projects"
    className={`${liststyle} ${pathname.includes('privte-projects') && itemstyle}`}
  >
    <FaProjectDiagram className="text-lg" /> الخدمات الخاصة
  </NavLink>
</li> :null
}
              <li>
                <NavLink
                  to="/"
                  className={`${liststyle} ${pathname === '/' && itemstyle}`}
                >
                  <FaTasks className="text-lg" /> مهامي
                </NavLink>
              </li>
 
        

           
{
  isAdmin || HasPermission("canViewMissions") ?       <li>
  <NavLink
    to="/Taskes"
    className={`${liststyle} ${pathname.includes('Taskes') && itemstyle}`}
  >
    <FaTasks className="text-lg" /> توزيع المهام
  </NavLink>
</li> : null

}
         
{
   isAdmin || HasPermission("canViewReports") ? 
   <li>
   <NavLink
     to="/Repoarts-Boarding"
     className={`${liststyle} ${pathname === '/Repoarts-Boarding' && itemstyle}`}
   >
     <FaChartLine className="text-lg" /> التقارير والتواصل
   </NavLink>
 </li>:null
}
           


  {
    isAdmin || HasPermission("canViewAdmin") ? 
    <>
    <span className='text-xl text-black dark:text-white  mt-7 mb-5'>الإداره</span>
    <li>
      <NavLink
        to="/dashboard"
        className={`${liststyle} ${pathname.includes('dashboard') && itemstyle}`}
      >
        <FaGripHorizontal className="text-lg" /> لوحة التحكم
      </NavLink>
    </li>
    </> : null
  }

            
          {
              isAdmin || HasPermission("canViewEmployees") ? 
              <li>
              <NavLink
                to="/All-users"
                className={`${liststyle} ${pathname.includes('All-users') && itemstyle}`}
              >
                <FaUsers className="text-lg" /> جميع الموظفين
              </NavLink>
            </li> : null
          }
               {
              isAdmin || HasPermission("canViewSection") ? 
              <li>
              <NavLink
                to="/Sections"
                className={`${liststyle} ${pathname.includes('Sections') && itemstyle}`}
              >
                <FaGripHorizontal className="text-lg" /> الإقسام
              </NavLink>
            </li> : null
          }
            
{
   isAdmin || HasPermission("canViewAdministration") ? 
   <li>
                <NavLink
                  to="/permissions"
                  className={`${liststyle} ${pathname.includes('permissions') && itemstyle}`}
                >
                  <MdOutlineSecurity className="text-lg" /> الصلاحيات
                </NavLink>
              </li> : null

}
              
<span className='text-xl text-black  dark:text-white mt-7 mb-5'>الموقع</span>

{
   isAdmin || HasPermission("canViewServices") ? 
   <li>
   <NavLink
     to="/website-Services"
     className={`${liststyle} ${pathname.includes('website-Services') && itemstyle}`}
   >
     <MdContactSupport className="text-lg" /> خدمات الشركة
   </NavLink>
 </li> : null

}
          
      {
           isAdmin || HasPermission("canViewvisa") ? 
           <li>
           <NavLink
             to="/website-Visa"
             className={`${liststyle} ${pathname.includes('website-Visa') && itemstyle}`}
           >
             <IoLocation className="text-lg" /> المتطلبات بضغطة زر
           </NavLink>
         </li> : null
      }    

            
{
  isAdmin || HasPermission("canViewmassgaes") ? 
  <li>
  <NavLink
    to="/website-Messages"
    className={`${liststyle} ${pathname.includes('website-Messages') && itemstyle}`}
  >
    <MdContactSupport className="text-lg" /> الرسائل
  </NavLink>
</li> : null
}
             
{
   isAdmin || HasPermission("canViewSecurty") ? 
   <li>
   <NavLink
     to="/privacy-policy"
     className={`${liststyle} ${pathname.includes('privacy-policy') && itemstyle}`}
   >
     <MdOutlineSecurity className="text-lg" /> سياسة الخصوصية
   </NavLink>
 </li> : null
}
            
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
const itemstyle = 'text-main  border-main mr-6 dark:!text-main bg-gray-100 dark:bg-gray-800'
const liststyle =   'group relative border-[1px] rounded-[11px] flex items-center gap-2.5 rounded-sm px-4 py-3 font-bold dark:text-white duration-300 ease-in-out hover:text-main hover:border-main hover:mr-6 dark:hover:text-main hover:bg-gray-100 hover:dark:bg-gray-800';

