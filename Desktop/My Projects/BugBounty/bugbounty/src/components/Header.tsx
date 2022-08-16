import {BiSearchAlt2} from 'react-icons/bi'
import {AiOutlineMenu} from 'react-icons/ai'
import { useState } from 'react';
import Sidebar from './Sidebar';

const Header = () => {

  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  return (
    <>
      <div className='sticky h-10 bg-[#da835d] shadow-md'>
        <div className='flex flex-row items-center justify-center gap-6 py-1'>
          <button onClick={() => setOpenSidebar(!openSidebar)} className='hover:rotate-90 duration-500 rounded-full hover:bg-[#00000039] p-1'>
            <AiOutlineMenu fill='white'/>
          </button>
          <div className='text-white'>
            BugBounty
          </div>
          <div className='flex flex-row items-center border-[2px] rounded-md bg-[#d5a18b] hover:bg-[#6d5247] duration-500'>
            <div className='m-1'>
              <BiSearchAlt2/>
            </div>
            <input className='border-l pl-1' placeholder="Search..."/>
          </div>
          <button className='opacity-70 hover:opacity-100 duration-300 rounded-md text-sm text-white p-1 px-2 bg-[#d5a18b] shadow-lg hover:shadow-none'>Log In</button>
          <button className='opacity-70 hover:opacity-100 duration-300 rounded-md text-sm text-white p-1 px-2 bg-[#d5a18b] shadow-lg hover:shadow-none'>Sign Up</button>
        </div>
      </div>
      {openSidebar && (
        <div className='absolute top-10 left-[12%] w-[15rem] h-[20rem] shadow-lg bg-[#ffc1a04e]'>
          <Sidebar/>
        </div>
      )}
    </>
  )
}

export default Header