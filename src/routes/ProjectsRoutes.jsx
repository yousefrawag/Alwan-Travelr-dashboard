import { Getprojects  , AddProject , Updateproject ,SectionClients , ProjectByid , GetprivetProject ,
  UpdatePrivetproject,
  GetPrivetprojectByid,AddPrivetproject} from "../pages";
  import store from "../store/index"
  import Checkuserautherzationview from "../middleware/Checkuserautherzationview"; 
  export const ProjectsRoutes = [
      { path: "/projects-main", element: <Getprojects />  , loader:Checkuserautherzationview(store , "canViewProjects") },
      { path: "/Add-project", element: <AddProject /> , loader:Checkuserautherzationview(store , "canAddProjects")  },
      { path: "/edtit-project/:id", element: <Updateproject /> , loader:Checkuserautherzationview(store , "canEditProjects")  },
      { path: "/projects-main/:id", element: <ProjectByid />, loader:Checkuserautherzationview(store , "canViewProjects") },
      { path: "/privte-projects", element: <GetprivetProject /> , loader:Checkuserautherzationview(store , "canViewPrivetProjects")},
      { path: "/privte-projects/:id", element: <GetPrivetprojectByid /> , loader:Checkuserautherzationview(store , "canViewPrivetProjects")},
      { path: "/Add-privte-projects", element: <AddPrivetproject /> , loader:Checkuserautherzationview(store , "canAddPrivetProjects") },
      { path: "/edit-privte-projects/:id", element: <UpdatePrivetproject /> , loader:Checkuserautherzationview(store , "canEditPrivetProjects") },
      { path: "/Section-Client/:section", element: <SectionClients /> },
  
    ];