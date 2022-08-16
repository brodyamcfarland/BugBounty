import React, { useState } from 'react';

const SignUp = () => {

  const [signupUsername, setSignupUsername] = useState<string>('');
  const [signupBio, setSignupBio] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(signupUsername);
    console.log(signupBio);
  }

  return (
    <div className="h-full w-[90%] m-auto flex flex-col text-white text-center">
        <div className="bg-[#242222] m-2 px-2 py-6 rounded-md shadow-lg">
          <header className='font-bold pb-4'>Sign Up</header>
          <header className='font-bold pb-4 text-[#e4a136]'>Create Your Login Token</header>
          <div className='relative shadow-md py-4 w-[85%] md:w-[45%] bg-[#3f3d3d] m-auto rounded-md'>
            <div className='flex flex-col text-left p-3 gap-3'>
                <p><span className="bg-orange-600 rounded-full py-[3px] px-[9px] mr-4 shadow-md">1</span>Connect to MetaMask</p>
                <button className='shadow-md p-2 mt-2 mx-auto px-4 rounded-md bg-green-600 opacity-70 hover:opacity-100 duration-500 hover:shadow-none'>Connect</button>
                <p><span className="bg-orange-600 shadow-md rounded-full py-[3px] px-[9px] mr-4">2</span>Fill out Account Info</p>
                <form onSubmit={handleSubmit} className='flex flex-col'>
                  <span>Enter Username <span className='text-[10px] text-gray-400'>(Max Length: 20 Characters)</span></span>
                  <input onChange={(e) => setSignupUsername(e.target.value)} maxLength={20} className='bg-[#111111] rounded-md pl-2 text-sm p-1' placeholder='...'/>
                  <span>Enter Bio <span className='text-[10px] text-gray-400'>(Max Length: 20 Characters)</span></span>
                  <input onChange={(e) => setSignupBio(e.target.value)} maxLength={20} className='bg-[#111111] rounded-md pl-2 text-sm p-1' placeholder='Short Title ex. Blockchain Dev'/>
                  <p className='mt-5'><span className="bg-orange-600 shadow-md rounded-full py-[3px] px-[9px] mr-4">3</span>Click Submit and wait for transaction to confirm.<br/><span className='text-gray-500 ml-10'>( Gas Cost ~0.01 Ether )</span></p>
                  <button type='submit' className='shadow-md p-2 mt-2 mx-auto px-4 rounded-md bg-orange-600 opacity-70 hover:opacity-100 duration-500 hover:shadow-none'>Submit</button>
                </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SignUp