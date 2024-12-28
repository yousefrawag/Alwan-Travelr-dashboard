import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
    const [module, setmodule] = useState(false);
const [editmainCategory , setEditmaincategory] = useState(false)
const [mainCategory , setmainCategory] = useState({
    _id:"",
    name:""
})
const handelEditmainCategory = (item) => {
setEditmaincategory(true)
setmainCategory(item)
}
    return (
        <DashboardContext.Provider
            value={{
                module,
                setmodule,
                editmainCategory , 
                setEditmaincategory,
                handelEditmainCategory,
                mainCategory,
                setmainCategory
            }}
        >
            {children}
        </DashboardContext.Provider>
    );
};

export default DashboardProvider;

export const useDashboardContext = () => useContext(DashboardContext);
