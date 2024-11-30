import React from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const Back = () => {
  return (
    <div className='absolute left-10 top-10 p-2 rounded-full bg-blue-500'>
      <Link to={'/'}><IoMdArrowRoundBack className='size-6 hover:size-7 transition-all duration-300'/></Link>
    </div>
  )
}

export default Back
