import { Getusers , Adduser , Updateuser} from "../pages";
  export const UserRoutes = [
      { path: "/All-users", element: <Getusers /> },
      { path: "/Add-user", element: <Adduser /> },
      { path: "/edtit-user/:id", element: <Updateuser /> },
   
  
    ];