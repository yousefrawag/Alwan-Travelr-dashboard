import {GetCustomers , AddCustomer ,  GetCustomerByid,
    UpdateCutomer} from "../pages";
    import store from "../store/index"
 import Checkuserautherzationview from "../middleware/Checkuserautherzationview";   
    export const CustomerRoutes = [
        { path: "/cutomers", element: <GetCustomers />  , loader:Checkuserautherzationview(store , "canViewClients")},
        { path: "/Add-Customer", element: <AddCustomer /> , loader:Checkuserautherzationview(store , "canAddClients") },
        { path: "/Edit-Customer/:id", element: <UpdateCutomer /> , loader:Checkuserautherzationview(store , "canEditClients") },
        { path: "/cutomers/:id", element: <GetCustomerByid /> , loader:Checkuserautherzationview(store , "canViewClients")},
    
      ];