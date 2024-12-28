/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const getLocalStorageDatat = () => {
   const data  = JSON.parse(localStorage.getItem("user") ) 
   return data || {}
}
const initialState = {
    userinfo:getLocalStorageDatat()
}
const user = createSlice({
    name:"userSlice",
    initialState,
    reducers:{
        login:(state , action) => {
           
           state.userinfo = { ...action.payload}
           localStorage.setItem("user" ,JSON.stringify(state.userinfo) )
        },
        logout:(state , action) => {
            state.userinfo = {}
            localStorage.removeItem("user")
            localStorage.removeItem("token")
            localStorage.clear()
        }
    }
})
export const {login , logout} = user.actions
export default user.reducer