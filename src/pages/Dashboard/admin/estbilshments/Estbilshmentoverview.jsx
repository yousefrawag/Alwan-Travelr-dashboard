import React from 'react'
import { Overview , EstbilshAbout } from '../../../../components/ui'
import Breadcrumb from '../../../../components/common/Breadcrumbs/Breadcrumb'
import { Link, useParams } from 'react-router-dom'
import useQuerygetSpacficIteam from '../../../../services/QuerygetSpacficIteam'
const Estbilshmentoverview = () => {
    const {id} = useParams()
    const { isError , isLoading , data:CurrenEstbilshment} = useQuerygetSpacficIteam("estbilshment" , "estbilshment" , id)
if(isLoading){
    return <span>loadding...</span>
}
    return (
    <div className='w-full h-full'>
        <div className='flex justify-between w-full mb-10'>
              <Breadcrumb pageName="بيانات منشأه مستشفى القاهره" />
                <Link to="/Est-ablishments" className="w-[150px] block text-white bg-main hover:bg-main2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-blue-800" type="button">
                عوده                    
                </Link>
            </div>
        <Overview CurrenEstbilshment={CurrenEstbilshment} />
        <EstbilshAbout OverviewData={CurrenEstbilshment} />
    </div>
  )
}

export default Estbilshmentoverview