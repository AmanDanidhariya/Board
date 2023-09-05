
import { BiBell } from 'react-icons/bi'
import Avatar from './Avatar'


const BoardNav = () => {
  return (
    <div>
        {/* dashboard top section start */}
        <div className="flex leading-8">
          <div className="text-3xl font-bold font-Montserrat">Dashboard</div>
          <div className="flex ml-[36rem]">
            <div className="">
              <input
                type="text"
                placeholder="Search..."
                className="w-full  pl-12 pr-4 text-gray-500  rounded outline-none bg-white focus:bg-white"
              />
            </div>
            <div className="mx-2 cursor-pointer">
              <BiBell size={30} />
            </div>

            <div className="mx-1">
              <Avatar />
            </div>
          </div>
        </div>
        {/* dashboard top section end */}
      </div>
  )
}

export default BoardNav