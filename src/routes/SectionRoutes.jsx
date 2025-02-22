import { GetSections , AddSection , GetsectionByid , UpdateSection} from "../pages";

import store from "../store/index"
import Checkuserautherzationview from "../middleware/Checkuserautherzationview"; 

    export const SectionRoutes = [
        { path: "/Sections", element: <GetSections /> ,  loader:Checkuserautherzationview(store , "canViewSection") },
        { path: "/Add-Sections", element: <AddSection />  ,  loader:Checkuserautherzationview(store , "canAddSection") },
        { path: "/Sections/:id", element: <GetsectionByid />  ,  loader:Checkuserautherzationview(store , "canViewSection") },
        { path: "/edtit-Sections/:id", element: <UpdateSection />  ,  loader:Checkuserautherzationview(store , "canEditSection")},
      ];