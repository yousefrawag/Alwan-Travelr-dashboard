import { GetSections , AddSection , GetsectionByid , UpdateSection} from "../pages";
    export const SectionRoutes = [
        { path: "/Sections", element: <GetSections /> },
        { path: "/Add-Sections", element: <AddSection /> },
        { path: "/Sections/:id", element: <GetsectionByid /> },
        { path: "/edtit-Sections/:id", element: <UpdateSection /> },
      ];