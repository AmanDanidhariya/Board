import React from 'react'
import Navbar from '../components/Navbar'

const Transactions = () => {
  return (
    <div className='p-8 flex'>
     <div className="w-[280px] navbar_background h-[131vh] rounded-2xl"> 
        <Navbar />
      </div>
    <div className='text-4xl text-center font-bold mt-[15%]'>Transactions</div>
    
    </div>
  )
}

export default Transactions