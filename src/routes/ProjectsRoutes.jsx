import { Getprojects  , AddProject , Updateproject , ProjectByid , GetprivetProject ,
  UpdatePrivetproject,
  GetPrivetprojectByid,AddPrivetproject} from "../pages";
  export const ProjectsRoutes = [
      { path: "/projects-main", element: <Getprojects /> },
      { path: "/Add-project", element: <AddProject /> },
      { path: "/edtit-project/:id", element: <Updateproject /> },
      { path: "/projects-main/:id", element: <ProjectByid /> },
      { path: "/privte-projects", element: <GetprivetProject /> },
      { path: "/privte-projects/:id", element: <GetPrivetprojectByid /> },
      { path: "/Add-privte-projects", element: <AddPrivetproject /> },
      { path: "/edit-privte-projects/:id", element: <UpdatePrivetproject /> },
  
    ];