import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { FaRegPenToSquare } from "react-icons/fa6";
import SelectoptionHook from '../../../hooks/SelectoptionHook';
import Loader from '../../../components/common/Loader/index';
import toast from 'react-hot-toast';
import useQuerygetiteams from '../../../services/Querygetiteams';
import useQuerygetSpacficIteam from '../../../services/QuerygetSpacficIteam'
import useQueryupdate from '../../../services/useQueryupdate';
import { format } from 'date-fns';
const UpdateTaske = () => {
    const {id} = useParams()
    const {data:taskinfo , isLoading:getinfoloading} = useQuerygetSpacficIteam("missions" , "missions" , id)
    const {updateiteam , isLoading} = useQueryupdate("missions" , "missions")
    const {data:Sections} = useQuerygetiteams("Section" , "Section")

    const CurrenTask = taskinfo?.data
    const {data} = useQuerygetiteams("users" , "users")
    const types = ["مشروع عام", "مشروع خاص"];
    const [missionType, setMissionType] = useState("مشروع عام");
    const [project, setProject] = useState("");
    const [privetProject, setPrivetProject] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]); // Array for selected users
    const [requirements, setRequirements] = useState([]); // Array for mission requirements
    const [newRequirement, setNewRequirement] = useState(""); // For inputting a new requirement
    const [search, setSearch] = useState(""); // Search input state
    const [users , setUsers] = useState([])
    const [missionStauts , setMissionStauts] = useState("")
      const [Section , setSection] = useState("")
 
    const navigate = useNavigate();



    const filteredUsers = users?.filter((user) =>
        user?.name?.toLowerCase().includes(search.toLowerCase())
      );
    
      const handleUserSelect = (userId) => {
        setSelectedUsers((prev) =>
          prev.includes(userId)
            ? prev.filter((id) => id !== userId)
            : [...prev, userId]
        );
      };
    
    
     
      useEffect(() => {
        if (data?.data?.data) {
            setUsers(data?.data?.data);
        }
        if (CurrenTask) {
            setSelectedUsers(CurrenTask?.assignedTo?.map((item) => item?._id));
            setRequirements(CurrenTask?.requirements || []); // Ensure default is an empty array
            setMissionStauts(CurrenTask?.status)
            setSection(CurrenTask?.section?._id)
            if (CurrenTask.missionType === "مشروع عام") {
                setProject(CurrenTask?.project?._id);
            } else {
                setPrivetProject(CurrenTask?.Privetproject?._id);
            }
        }
    }, [data, CurrenTask]);
const formattedDeadline = CurrenTask?.deadline ? format(new Date(CurrenTask.deadline), 'yyyy-MM-dd') : '';
   
const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        data.assignedTo = selectedUsers
        data.missionType = missionType
       
        if (missionType === "مشروع عام") {
            if(!project) {
                return toast.error("يجب إضافة مشروع عام")
            }
            data.project = project; // Set public project

            data.Privetproject = null; // Ensure Privetproject is null for public projects
        } else if (missionType === "مشروع خاص") {
            if(!privetProject) {
                return toast.error("يجب إضافة مشروع خاص")
            }
            data.Privetproject = privetProject; // Set private project
            data.project = null; // Ensure project is null for private projects
        }
        if (!data?.title) {
            toast.error("يجب إضافه  عنوان المهمة");
            return;
        }
        if (!data?.deadline) {
            toast.error("يجب إضافه موعد التسليم");
            return;
        }
        if (selectedUsers.length === 0) {
            toast.error("يجب إضافه الموظفين المعنين بالمهمة");
            return;
        }
        
   
console.log(data)
        try {
            updateiteam(
             {data , id},
                {
                    onSuccess: () => {
                        e.target.reset();
                        setSelectedUsers([]);
                        setRequirements([]);
                        toast.success("تم تحديث المهمة بنجاح ");
                        navigate("/Taskes");
                    },
                    onError: (error) => {
                        toast.error(error.response?.data?.mesg || "An error occurred. Please try again.");
                    },
                }
            );
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.mesg || "An error occurred. Please try again.");
        }
    };

    if (isLoading || getinfoloading) {
        return <Loader />;
    }

    return (
        <form onSubmit={handleSubmit} className='w-full h-full bg-white rounded-[10px] dark:bg-form-input'>
            <div className="dark:bg-form-input flex items-center shadow-lg gap-4 mb-4 w-full h-full p-4 bg-white rounded-[10px]">
                <div className="icon p-2 bg-main rounded-full">
                    <FaRegPenToSquare />
                </div>
                <p className="font-semibold text-lg">ادخل بيانات المهمة</p>
            </div>

            <div className='main-section w-full max-h-[400px] min-h-[100px] p-4 overflow-auto'>
                <div className="mb-6 flex flex-col gap-2">
                    <label htmlFor="title" className="w-full text-lg font-medium text-black dark:text-white">
                        عنوان المهمة
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={CurrenTask?.title}
                        className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                    />
                </div>

                <div className='w-full flex gap-2'>
                    {types.map((item) => (
                        <button
                            onClick={() => setMissionType(item)}
                            className={`w-[150px] p-4 ${missionType === item ? "bg-main text-white" : "dark:text-white border-[1px] border-main bg-transbarent text-black"} rounded-[6px]`}
                            type='button'
                            key={item}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {missionType === "مشروع عام" ? (
                    <SelectoptionHook
                        fectParentKEY="projects"
                        keyName="projects"
                        title="مشروع عام"
                        value={project}
                        setvalue={setProject}
                    />
                ) : (
                    <SelectoptionHook
                        fectParentKEY="Privetprojects"
                        keyName="Privetprojects"
                        title="مشروع خاص"
                        value={privetProject}
                        setvalue={setPrivetProject}
                    />
                )}

                    <div className="mb-6 flex flex-col gap-2">
                            <label className="w-full text-lg font-medium text-black dark:text-white">
                            الموظفين المعينون
                            </label>
                            <input
                            type="text"
                            placeholder="بحث عن موظف..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="mb-2 focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                            />
                            <div className="border border-gray-300 rounded-md max-h-40 overflow-y-auto p-2">
                            {filteredUsers?.map((user) => (
                                <label key={user?._id} className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    value={user?._id}
                                    checked={selectedUsers.includes(user?._id)}
                                    onChange={() => handleUserSelect(user?._id)}
                                    className="accent-main"
                                />
                                <span className="text-black dark:text-white">{user?.name}</span>
                                </label>
                            ))}
                            </div>
                    </div>
               
                <div className="mb-6 flex flex-col  gap-2">
                        <label
                            htmlFor="status"
                            className="w-full text-lg font-medium text-black dark:text-white"
                        >
                           حالة المهمة
                        </label>
                        <select value={missionStauts} onChange={(e) => setMissionStauts(e.target.value)} name="status" id="status"  className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"                        >
                            <option value="">
                                أختر الحالة
                            </option>
                            <option value="فى تقدم">
                            فى تقدم
                            </option>
                            <option value="مكتملة">
                            مكتملة
                            </option>
                            <option value="مغلقة">
                            مغلقة
                            </option>
                          
                        </select>
                     
                    
                </div>
                <div className="mb-6 flex flex-col gap-2">
                    <label htmlFor="deadline" className="w-full text-lg font-medium text-black dark:text-white">
                        إختار القسم
                    </label>
                  <select 
                  name='section' 
                  value={Section}
                  onChange={(e) => setSection(e.target.value)}
                  className="mb-2 focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                  >
                    <option value="">قم بالاختيار</option>
                    {
                        Sections?.data?.map((item) => {
                            return <option key={item?._id} value={item?._id}>{item?.name}</option>
                        })
                    }
                  </select>
                </div>
                <div className="mb-6 flex flex-col gap-2">
                    <label htmlFor="deadline" className="w-full text-lg font-medium text-black dark:text-white">
                        موعد التسليم المنتظر
                    </label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        defaultValue={formattedDeadline}
                        className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                    />
                </div>

                <div className="mb-6 flex flex-col gap-2">
                    <label htmlFor="description" className="w-full text-lg font-medium text-black dark:text-white">
                        ملاحظات 
                    </label>
                    <textarea
                        name="description"
                        defaultValue={CurrenTask?.description}
                        className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
                    ></textarea>
                </div>
            </div>

            <div className="add_return flex justify-between items-center mt-4 shadow-lg p-4 bg-white dark:bg-form-input">
                <div className="add_btn">
                    <button
                        type="submit"
                        className="py-2 px-6 rounded-md bg-main text-white hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600"
                    >
                        إضافة
                    </button>
                </div>
                <div className="return_btn">
                    <NavLink to="/Taskes" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md">
                        عوده
                    </NavLink>
                </div>
            </div>
        </form>
    );
};

export default UpdateTaske;
