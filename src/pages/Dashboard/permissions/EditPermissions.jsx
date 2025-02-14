/* eslint-disable no-unused-vars */


import { PiPencilLineThin } from "react-icons/pi";
import CustomeTabel from '../../../components/common/CustomeTabel';
import { Link, NavLink, useNavigate, useNavigation, useParams } from "react-router-dom";
import useQueryupdate from '../../../services/useQueryupdate';
import useQuerygetSpacficIteam from '../../../services/QuerygetSpacficIteam';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import HeadPagestyle from '../../../components/common/HeadPagestyle';
import Loader from "../../../components/common/Loader";
const EditPermissions = () => {
 const {id} =  useParams()
const navigate =  useNavigate()
  const { isError:errorGet , isLoading:loaddingGet , data:powerData} = useQuerygetSpacficIteam("roles" , "roles" , id)
 const { isError , isLoading , updateiteam , isPending}  = useQueryupdate("roles" , "roles")
 const [permissions, setPermissions] = useState([]);
useEffect(() => {
  if(powerData && powerData.permissions){
    setPermissions(powerData.permissions)
    console.log(powerData.permissions);
  }
 

} , [powerData])
 const handleCheckboxChange = (event) => {
  const { name, checked } = event.target;
  setPermissions((prevPermissions) => {
    if (checked) {
      return [...prevPermissions, name];
    } else {
      return prevPermissions.filter((permission) => permission !== name);
    }
  });
};
 const columns = [
  {
    name: "صلاحيه",
    selector: (row) => row.validity,
  },
  {
    name: " مشاهده ",
    cell: (row) => (
      <input
        type="checkbox"
        name={`canView${row.key}`}
        checked={permissions.includes(`canView${row.key}`)}
        onChange={handleCheckboxChange}
      />
    ),
  },
  {
    name: " إضافه ",
    cell: (row) => (
      <input
        type="checkbox"
        name={`canAdd${row.key}`}
        checked={permissions.includes(`canAdd${row.key}`)}
        onChange={handleCheckboxChange}
      />
    ),
  },
  {
    name: "تعديل",
    cell: (row) => (
      <input
        type="checkbox"
        name={`canEdit${row.key}`}
        checked={permissions.includes(`canEdit${row.key}`)}
        onChange={handleCheckboxChange}
      />
    ),
  },
  {
    name: " حذف",
    cell: (row) => (
      <input
        type="checkbox"
        name={`canDelete${row.key}`}
        checked={permissions.includes(`canDelete${row.key}`)}
        onChange={handleCheckboxChange}
      />
    ),
  },
];

  
const data = [
  { id: 1, key: "Projects", validity: "المشاريع العامه" },
  { id: 1, key: "PrivetProjects", validity: "المشاريع الخاصه" },
  { id: 2, key: "Reports", validity: "التقارير" },
  { id: 31, key: "clander", validity: " التقويم" },
  { id: 4, key: "Missions", validity: "توزيع المهام" },
  { id: 5, key: "Clients", validity: "العملاء" },
  { id: 6, key: "Employees", validity: "المستخدمين" },
  { id: 8, key: "Administration", validity: "صلاحيات" },
  { id: 81, key: "Admin", validity: "لوحه تحكم" },
  { id: 9, key: "Services", validity: "خدمات الموقع" },
  { id: 11, key: "visa", validity: "تأشيرات الموقع" },
  { id: 12, key: "massgaes", validity: "الرسائل" },
  { id: 13, key: "Securty", validity: "سياسه الخصوصيه" },
 

];


const handleSubmit = (event) => {
  event.preventDefault();
  const form = event.currentTarget;
const name = form.elements['name'].value;


// Construct the data object
const data = {
  name,
  permissions, // permissions array already contains the permission strings
};
console.log(data);

updateiteam({data , id} , {
  onSuccess:() => {
    toast.success("تم تعديل صلاحيه ")
    navigate("/permissions")
  }
}) 
event.target.reset()
setPermissions([])
 navigate('/permissions')
};

if(isLoading || loaddingGet){
    return <Loader />
}


  return (
    <section className='updatePermissions_section_wrapper'>
      <div className="container-fluid">
    <HeadPagestyle  pageName="تعديل صلاحية"  title="عوده"  to="/permissions" />

          {/* update permissions box */}

          <div className="updatePermissions_box">
         
                <form onSubmit={handleSubmit}>
                <div className="permission_name mb-5">
                    <div className="main_input">
                    <label htmlFor="permissionName">اسم الصلاحية*</label>
                    <div>
                    <input type="text" name='name' defaultValue={powerData?.name} id='permissionName'                             className="focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary text-main p-3 w-full  outline-0 rounded-md border border-gray-300 shadow-sm focus:ring-blue-500"
 required />
                  

                    </div>
                    </div>
                 
                    </div>
                  <CustomeTabel columns={columns} data={data} />
          
                      <div className="add_return flex justify-between items-center mt-4 shadow-lg p-4 bg-white dark:bg-form-input">
                        <div className="add_btn">
                            <button type="submit"  className={` py-2 px-6 rounded-md bg-main text-white hover:bg-transparent hover:border hover:border-blue-600 hover:text-blue-600`}>
                             حفظ
                            </button>
                          </div>
                          <div className="return_btn">
                            <NavLink to="/permissions" className="bg-gray-300 text-gray-700 py-2 px-6 rounded-md">عوده</NavLink>
                          </div>
                        
                        </div>
                </form>
            </div>
            
          </div>

        
    </section>
  )
}

export default EditPermissions
