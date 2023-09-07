import { AiOutlineClose } from 'react-icons/ai'
import { NavLink, Outlet } from 'react-router-dom'
import FormNav from './FormNav'
// import BasicForm from './BasicForm'
// import ContactForm from './ContactForm'

const ProfileForm = ({handleClose}) => {

  return (
    <div className=' fixed inset-0 z-50 '>
    <div className="fixed inset-0 bg-black opacity-80 flex flex-col items-center ">
    <div className="relative bg-white rounded-lg shadow-lg p-8 mt-20 w-[544px] h-[376px]">
    {/* Form Content */}
    <FormNav handleClose={handleClose}/>
    <Outlet/>
  </div>
    </div>

    </div>
  )
}

export default ProfileForm