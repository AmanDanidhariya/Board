import {FaLinkedin, FaDiscord, FaGithub, FaSquareTwitter} from "react-icons/fa6"
import { Link } from 'react-router-dom'

const Platforms = () => {
  return (
    <div className='flex ml-[25%] w-[300px] justify-between text-3xl text-white'>
        <Link to="https://github.com/"><FaGithub/></Link>
        <Link to="https://twitter.com/"><FaSquareTwitter/></Link>
        <Link to="https://www.linkedin.com/"><FaLinkedin/></Link>
        <Link to="https://discord.com/"><FaDiscord/></Link>
    </div>
  )
}

export default Platforms