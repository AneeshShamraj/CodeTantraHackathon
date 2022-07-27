import React from 'react'
import { useParams } from 'react-router-dom'

const EventDetails = () => {
    const { id } = useParams(); 

  return (
    <div>
      <h1>event - { id }</h1>
    </div>
  )
}

export default EventDetails
