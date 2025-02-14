

import { redirect} from "react-router-dom"


 const Checkuserautherzationview = (store  , key ) => () => {
  const user = store.getState().userState.userinfo;
  const iteams = JSON.parse(localStorage.getItem("user")) 
  if(!iteams) {
    return redirect('/auth/signin')
  }
  const permissions = user.role?.permissions || [];
 
const included = permissions?.some((per) => per === key)
    if( !(user.type === "admin" || included)) {
       
      return  redirect("/")
    }


    return null
}
 export default Checkuserautherzationview