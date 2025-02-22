import {Services , AddServices ,   GetServicesByid,
    UpdateServices ,  
    GetVisarequire,
    GetVisavByid,
    AddVisaRequire,
    GetMessages,
    UpdateVisaRequire ,
    PrivcyPolicy
} from "../pages";
import store from "../store/index"
import Checkuserautherzationview from "../middleware/Checkuserautherzationview";  
    export const WebsiteRoutes = [
        { path: "/website-Services", element: <Services />  ,  loader:Checkuserautherzationview(store , "canViewServices") },
        { path: "/website-Add-Services", element: <AddServices />  ,  loader:Checkuserautherzationview(store , "canAddServices") },
        { path: "/website-Edit-Services/:id", element: <UpdateServices />  ,  loader:Checkuserautherzationview(store , "canEditServices") },
        { path: "/website-Services/:id", element: <GetServicesByid />  ,  loader:Checkuserautherzationview(store , "canViewServices") },
        { path: "/website-Visa", element: <GetVisarequire /> ,  loader:Checkuserautherzationview(store , "canViewvisa") },
        { path: "/website-Visa/:id", element: <GetVisavByid /> , loader:Checkuserautherzationview(store , "canViewvisa") },
        { path: "/website-Add-Visa", element: <AddVisaRequire /> , loader:Checkuserautherzationview(store , "canAddvisa")  },
        { path: "/website-Edit-Visa/:id", element: <UpdateVisaRequire />  , loader:Checkuserautherzationview(store , "canEditvisa")},
        { path: "/website-Messages",

          
          element: <GetMessages/>
        ,loader:Checkuserautherzationview(store , "canViewmassgaes")
        } ,
           
          
          { path: "/privacy-policy", element: <PrivcyPolicy />
            ,loader:Checkuserautherzationview(store , "canViewSecurty")
           },
      ];