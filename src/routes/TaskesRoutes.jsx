import { UserTaskes  , GetTaskes , AddTask , UpdateTaske , GetReports , TaskOverview , ReportChat} from "../pages";
  export const TaskesRoutes = [
      { path: "/", element: <UserTaskes /> },
      { path: "/Taskes", element: <GetTaskes /> },
      { path: "/Add-Taskes", element: <AddTask /> },
      { path: "/edit-Taskes/:id", element: <UpdateTaske /> },
      { path: "/missions-repoart", element: <GetReports /> },
      { path: "/Taskes/:id", element: <TaskOverview /> },
      { path: "/team-chat/:missionid/:chatid", element: <ReportChat /> },
  
    ];