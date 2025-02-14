import React from 'react'
import Updateprojectui from '../../../components/ui/updateproject/Updateprojectui'
import { useParams } from 'react-router-dom'
const Updateproject = () => {
    const {id} = useParams()
  return (
    <div> <Updateprojectui id={id} /></div>
  )
}

export default Updateproject