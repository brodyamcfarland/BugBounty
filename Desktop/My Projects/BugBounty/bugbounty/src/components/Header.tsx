import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
import Sidebar from './Sidebar';
import { Link } from 'react-router-dom';

const Header = () => {

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <>
      <div className='sticky h-10 bg-[#242222] shadow-md'>
        <div className='flex flex-row items-center justify-center gap-6 md:gap-10 lg:gap-16 py-1.5'>
          <button onClick={() => setOpenSidebar(!openSidebar)} className='hover:rotate-90 duration-500 rounded-full hover:bg-[#00000039] p-1'>
            <AiOutlineMenu fill='white'/>
          </button>
          <div className='text-white'>
            BugBounty
          </div>
          <div className='flex flex-row items-center rounded-md bg-[#505050] hover:bg-[#b8b7b6] duration-500'>
            <button className='m-1'>
              <BiSearchAlt2 fill='white'/>
            </button>
            <input className='border-l pl-1 rounded-tr-md rounded-br-md' placeholder="Search..."/>
          </div>
          <Link to='/login' className='opacity-50 hover:opacity-100 duration-300 rounded-md text-sm text-white p-1 px-2 bg-[#5c5b5a] shadow-lg hover:shadow-none'>Log In</Link>
          <Link to='/signup' className='opacity-50 hover:opacity-100 duration-300 rounded-md text-sm text-white p-1 px-2 bg-orange-600 shadow-lg hover:shadow-none'>Sign Up</Link>
        </div>
      </div>
      {openSidebar && (
        <div onClick={() => setOpenSidebar(false)} className='absolute h-full w-full z-[51]'>
          <div className='z-50 rounded-md absolute top-10 left-[12%] w-[15rem] h-[20rem] shadow-lg bg-[#ff832a33] backdrop-blur-md'>
            <Sidebar/>
          </div>
        </div>
      )}
    </>
  )
}

export default Header