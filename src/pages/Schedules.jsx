import React from 'react'
import Navbar from '../components/Navbar'

const Schedules = () => {
  return (
    <div className='p-8 flex'>
     <div className="w-[280px] navbar_background h-[131vh] rounded-2xl"> 
        <Navbar />
      </div>
    <div className='text-4xl font-bold mt-[15%]'>Schedules</div>
    </div>
  )
}

export default Schedules