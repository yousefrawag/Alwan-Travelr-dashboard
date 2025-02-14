import {

    Getpermissions ,
    Addpermission ,
    EditPermissions
    } from "../pages"
  export const PermissionsRoutes = [
      { path: "/permissions", element: <Getpermissions /> },
      { path: "/Add-permission", element: <Addpermission /> },
      { path: "/Edit-permission/:id", element: <EditPermissions /> },
  
    ];