import {
  Establishments , 
  MainCategoray 
  ,ECommerce , AddnewEstbilshments ,
   UpdatedEstbilshment,
   Estbilshmentoverview,
   Getusers,
   AddNewuser ,
   UserOverview , 
   ChatOverview
  } from "../pages/Dashboard/admin"
export const AdminRoutes = [
    { path: "/", element: <ECommerce /> },
    { path: "/main-categoary", element: <MainCategoray /> },
    { path: "/Est-ablishments", element: <Establishments /> },
    { path: "/Add-Establishment", element: <AddnewEstbilshments />},
    { path: "/update-Establishment/:id", element: <UpdatedEstbilshment /> },
    { path: "/Establishment-overView/:id", element: <Estbilshmentoverview /> },
    { path: "/All-users", element: <Getusers /> },
    { path: "/Add-user", element: <AddNewuser /> },
    { path: "/user-overview/:id", element: <UserOverview /> },
    { path: "/support-weqa", element: <ChatOverview /> },
  ];