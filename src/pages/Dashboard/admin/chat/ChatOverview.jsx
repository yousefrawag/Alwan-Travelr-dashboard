import React from 'react'
import ChatCard from '../../../../components/common/Chat/ChatCard'
import ChatBox from '../../../../components/common/Chat/ChatBox'
const ChatOverview = () => {
  return (
    <div className='flex flex-col justify-between gap-3 xl:flex-row lg:flex-row w-full h-full  '>
       <ChatBox />
          <ChatCard />
      
    
       
    </div>
  )
}

export default ChatOverview