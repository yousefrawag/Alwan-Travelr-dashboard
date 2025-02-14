import {Services , AddServices ,   GetServicesByid,
    UpdateServices ,  
    GetVisarequire,
    GetVisavByid,
    AddVisaRequire,
    GetMessages,
    UpdateVisaRequire ,
    PrivcyPolicy
} from "../pages";
    export const WebsiteRoutes = [
        { path: "/website-Services", element: <Services /> },
        { path: "/website-Add-Services", element: <AddServices /> },
        { path: "/website-Edit-Services/:id", element: <UpdateServices /> },
        { path: "/website-Services/:id", element: <GetServicesByid /> },
        { path: "/website-Visa", element: <GetVisarequire /> },
        { path: "/website-Visa/:id", element: <GetVisavByid /> },
        { path: "/website-Add-Visa", element: <AddVisaRequire /> },
        { path: "/website-Edit-Visa/:id", element: <UpdateVisaRequire /> },
        { path: "/website-Messages",

          
          element: <GetMessages/>} ,
          
          { path: "/privacy-policy", element: <PrivcyPolicy /> },
      ];