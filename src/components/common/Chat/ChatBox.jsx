import React from 'react'
import image from "../../../images/user/user-01.png"
import SendMessage from './SendMessage'
const ChatBox = () => {
  return (
    <div className='flex-grow w-full min-h-[600px] bg-white rounded-[10px] dark:bg-boxdark  overflow-hidden '>
       {/* HEADER */}
        <div className='shadow-lg p-5 dark:bg-white rounded-[10px]'>
        <div className='flex gap-3 items-center mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 '> yousef rawag</span>
         </div>
         <span> مدير منشأه مستشفى القاهره</span>
        </div>
{/* HEADER */}
        <div className='w-full h-[500px]  overflow-y-scroll p-4 '>
                    <div className='shadow-md p-4 border-b-1 mb-3 dark:border-strokedark dark:bg-boxdark '>
                        <div className='flex gap-3 mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 dark:text-white'>منذ ساعة</span>
                        </div>
                        <p className='w-full text-main dark:text-white'>
                            لدينا عطل فنى نرجو المراجعة
                        </p>
                    </div>
                    <div className='shadow-md p-4 border-b-1 mb-3 dark:border-strokedark dark:bg-boxdark '>
                        <div className='flex gap-3 mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 dark:text-white'>منذ ساعة</span>
                        </div>
                        <p className='w-full text-main dark:text-white'>
                            لدينا عطل فنى نرجو المراجعة
                        </p>
                    </div>
                    <div className='shadow-md p-4 border-b-1 mb-3 dark:border-strokedark dark:bg-boxdark '>
                        <div className='flex gap-3 mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 dark:text-white'>منذ ساعة</span>
                        </div>
                        <p className='w-full text-main dark:text-white'>
                            لدينا عطل فنى نرجو المراجعة
                        </p>
                    </div>
                    <div className='shadow-md p-4 border-b-1 mb-3 dark:border-strokedark dark:bg-boxdark '>
                        <div className='flex gap-3 mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 dark:text-white'>منذ ساعة</span>
                        </div>
                        <p className='w-full text-main dark:text-white'>
                            لدينا عطل فنى نرجو المراجعة
                        </p>
                    </div>
                    <div className='shadow-md p-4 border-b-1 mb-3 dark:border-strokedark dark:bg-boxdark '>
                        <div className='flex gap-3 mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 dark:text-white'>منذ ساعة</span>
                        </div>
                        <p className='w-full text-main dark:text-white'>
                            لدينا عطل فنى نرجو المراجعة
                        </p>
                    </div>
                    <div className='shadow-md p-4 border-b-1 mb-3 dark:border-strokedark dark:bg-boxdark '>
                        <div className='flex gap-3 mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 dark:text-white'>منذ ساعة</span>
                        </div>
                        <p className='w-full text-main dark:text-white'>
                            لدينا عطل فنى نرجو المراجعة
                        </p>
                    </div>
                    <div className='shadow-md p-4 border-b-1 mb-3 dark:border-strokedark dark:bg-boxdark '>
                        <div className='flex gap-3 mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 dark:text-white'>منذ ساعة</span>
                        </div>
                        <p className='w-full text-main dark:text-white'>
                            لدينا عطل فنى نرجو المراجعة
                        </p>
                    </div>
                    <div className='shadow-md p-4 border-b-1 mb-3 dark:border-strokedark dark:bg-boxdark '>
                        <div className='flex gap-3 mb-2 w-full'>
                        <img src={image} alt="user" className='w-[50x] h-[50px] rounded-full' />
                        <span className='text-main2 dark:text-white'>منذ ساعة</span>
                        </div>
                        <p className='w-full text-main dark:text-white'>
                            لدينا عطل فنى نرجو المراجعة
                        </p>
                    </div>
        </div>
        <SendMessage />
    </div>
  )
}

export default ChatBox