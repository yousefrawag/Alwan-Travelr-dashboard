import {

    Getpermissions ,
    Addpermission ,
    EditPermissions
    } from "../pages"
    import store from "../store/index"
    import Checkuserautherzationview from "../middleware/Checkuserautherzationview"; 
  export const PermissionsRoutes = [
      { path: "/permissions", element: <Getpermissions />  , loader:Checkuserautherzationview(store , "canViewAdministration")},
      { path: "/Add-permission", element: <Addpermission />  , loader:Checkuserautherzationview(store , "canAddAdministration")},
      { path: "/Edit-permission/:id", element: <EditPermissions /> , loader:Checkuserautherzationview(store , "canEditAdministration") },
  
    ];