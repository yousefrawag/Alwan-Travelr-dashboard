import React from 'react'
import { Link } from 'react-router-dom'
const CardEstbilsh = ({icon , to , title , total}) => {
  return (
       <Link 
        to={to}
             className="w-full rounded-md border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark flex justify-start flex-col border-main focus:outline-none focus:bg-[#804DB8]/20 dark:focus:bg-[#804DB8]/20 dark:border-main"
         >
                {
                    icon
                }
                <div className='flex items-center justify-center flex-col gap-2'>
                <span className="text-2xl text-main2 font-medium dark:text-white">{total}</span>
                <span className="text-md text-main2 font-medium dark:text-white">{title}</span>
                </div>
              
        </Link>
  )
}

export default CardEstbilsh