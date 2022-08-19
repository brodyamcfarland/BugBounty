import React from 'react'

const Profile = () => {
  return (
    <div className="h-full w-[90%] md:w-[80%] m-auto flex flex-col text-white text-center">
        <div className="bg-[#242222] m-2 px-2 py-6 rounded-md shadow-lg">
          <header className='font-bold pb-4'>Profile</header>
          <div className='relative shadow-md py-4 w-[85%] md:w-[45%] bg-[#3f3d3d] m-auto rounded-md'>
            <div className='flex flex-col gap-2 mt-8 bg-[#242222] mx-3 rounded-md p-2 text-left'>
              <div className='flex flex-row'>
                <span className='flex-1'>Token Validated</span>
                <span className='mr-[6rem] text-green-600'>Yes</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1'>Username</span>
                <span className='mr-[6rem] text-green-600'>Off2Beans</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1'>Bio</span>
                <span className='mr-[6rem] text-green-600'>Blockchain Dev</span>
              </div>
              <div className='flex flex-row'>
                <span className='flex-1'>Reputation Points</span>
                <span className='mr-[6rem] text-green-600'>0</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Profile