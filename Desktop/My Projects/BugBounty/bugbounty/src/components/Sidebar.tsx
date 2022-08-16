import { Link } from 'react-router-dom';
import {AiFillLock} from 'react-icons/ai';

const Sidebar = () => {
  return (
    <div>
      <div className='flex flex-col gap-2 p-2 text-white'>
        <Link to='/about' className='cursor-pointer p-1 rounded-md pl-2 duration-400 hover:bg-[#00000071]'>About</Link>
        <Link to='/login' className='cursor-pointer p-1 rounded-md pl-2 duration-400 hover:bg-[#00000071]'>Log In</Link>
        <Link to='/signup' className='cursor-pointer p-1 rounded-md pl-2 duration-400 hover:bg-[#00000071]'>Sign Up</Link>
        <div className='flex flex-row items-center'>
          <Link to='/profile' className='cursor-pointer p-1 rounded-md pl-2 duration-400 hover:bg-[#00000071] flex-1'>Profile</Link>
          <AiFillLock/>
        </div>
        <div className='flex flex-row items-center'>
          <Link to='/bounties' className='cursor-pointer p-1 rounded-md pl-2 duration-400 hover:bg-[#00000071] flex-1'>Open Bounties</Link>
          <AiFillLock/>
        </div>
        <div className='flex flex-row items-center'>
          <Link to='/closedbounties' className='cursor-pointer p-1 rounded-md pl-2 duration-400 hover:bg-[#00000071] flex-1'>Closed Bounties</Link>
          <AiFillLock/>
        </div>
      </div>
    </div>
  )
}

export default Sidebar