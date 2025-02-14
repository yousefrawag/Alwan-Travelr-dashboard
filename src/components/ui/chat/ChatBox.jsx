import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip } from "react-icons/fa"; // Import icons
import Image from "../../../images/user/user-01.png";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import Loader from "../../common/Loader";
import useQueryadditeam from "../../../services/Queryadditeam"
import Messsages from "./Messsages";
const ChatBox = ({CurrentMissionTitle , chatid}) => {
    const {addIteam , isLoading} = useQueryadditeam("messages" , "messages")
    const [message, setMessage] = useState("");
    const user = useSelector((state) => state.userState.userinfo )
  const handeMessage = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
  
    const data = Object.fromEntries(formData);
        // docs.forEach((item) => {
        //   formData.append("files" , item)
        // })
       data.content = message
       data.senderID = user?._id
       data.chatID = chatid
    if(!message){
      toast.error("يجب إضافه محتوى الرسالة")
        return ;
    }


    try {
    
        
        addIteam(data , {
            onSuccess:() =>{
             
                e.target.reset()
                setMessage("")
                toast.success("تم  الإرسال بنجاح")
              
            },  
             onError: (error) => {
              if (error.response && error.response.data && error.response.data.mesg) {
                toast.error(error.response.data.mesg);
              } else {
                toast.error("An error occurred. Please try again.");
              }
            }
        })
    } catch (error) {
        console.log(error);
        toast.error(error.response?.data?.mesg)
    }
  }  
if(isLoading) {
    return <Loader />
}
    return (
        <div className="w-full bg-white dark:bg-gray-900 rounded-lg shadow-md">
            {/* Header */}
            <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <span className="text-xl font-semibold text-gray-900 dark:text-white">{CurrentMissionTitle }</span>
            </div>

            {/* Messages Container */}
          
            <Messsages chatID={chatid} />
            {/* Message Input */}
            <form onSubmit={handeMessage} className="p-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-2">
                    {/* <button type="button" className="text-gray-600 dark:text-gray-300 hover:text-blue-500">
                        <FaPaperclip size={20} />
                    </button> */}

                    {/* Input Field */}
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full p-3 rounded-full border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
                        placeholder="اكتب رسالتك هنا..."
                    />

                    {/* Send Button */}
                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition duration-300"
                    >
                        <FaPaperPlane size={20} />
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ChatBox;
