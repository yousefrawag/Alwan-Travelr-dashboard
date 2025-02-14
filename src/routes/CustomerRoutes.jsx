import {GetCustomers , AddCustomer ,  GetCustomerByid,
    UpdateCutomer} from "../pages";
    export const CustomerRoutes = [
        { path: "/cutomers", element: <GetCustomers /> },
        { path: "/Add-Customer", element: <AddCustomer /> },
        { path: "/Edit-Customer/:id", element: <UpdateCutomer /> },
        { path: "/cutomers/:id", element: <GetCustomerByid /> },
    
      ];