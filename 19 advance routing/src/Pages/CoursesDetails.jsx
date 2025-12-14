import React from 'react'
import { useParams } from 'react-router-dom'

const CoursesDetails = () => {

    const param= useParams()
    console.log(param.id);
    



  return (
    <div>
        <h1>{param.id}Courses Details Page</h1>
    </div>
  )
}

export default CoursesDetails