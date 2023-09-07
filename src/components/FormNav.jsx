import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const FormNav = ({handleClose}) => {
  return (
    <>
        <nav>
    <div className='flex justify-between leading-6'>
    <p className='text-xl font-semibold'>Add New Profile</p>
    <p><AiOutlineClose size={24} onClick={handleClose} className='cursor-pointer'/></p>
    </div>
        <ul className='flex mt-6 font-bold justify-around'>
            <li>
                <NavLink to="basicForm" className="border-b-2 border-blue-500">Basic</NavLink>
            </li>
            <li>
                <NavLink to="contactForm" className="border-b-2 border-blue-500">Contact</NavLink>
            </li>
        </ul>
    </nav>  
    </>
  )
}

export default FormNav