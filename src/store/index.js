import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";


const store = configureStore({
    reducer:{
        userState:userSlice,
   
      

    }
})
export default store