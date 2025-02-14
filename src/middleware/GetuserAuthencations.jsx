import { useSelector } from "react-redux";
const useGetUserAuthentications  = ( role ) => {
    const user = useSelector((state) => state.userState.userinfo) || {};
    const permissions = user.role?.permissions || [];

 
  
    const CanView = permissions?.some((per) => per === `canView${role}`)
    const CanAdd = permissions?.some((per) => per === `canAdd${role}`)
    const CanEdit = permissions?.some((per) => per === `canEdit${role}`)
    const CanDelte = permissions?.some((per) => per === `canDelete${role}`)
    const isAdmin = user?.type === "admin"
return {CanAdd , CanDelte , CanEdit , CanView , isAdmin }
};
export default useGetUserAuthentications 