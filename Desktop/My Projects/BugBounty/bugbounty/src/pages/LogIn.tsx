
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className="h-full w-[90%] md:w-[80%] m-auto flex flex-col text-white text-center">
        <div className="bg-[#242222] m-2 px-2 py-6 rounded-md shadow-lg">
          <header className='font-bold pb-4'>Login</header>
          <div className='relative shadow-md py-4 w-[85%] md:w-[45%] bg-[#3f3d3d] m-auto rounded-md'>
            <div className='text-gray-500 text-sm'><Link to='/signup' className='text-[#f97a3f]'>Sign Up </Link>if you have not created your Account</div>
            <button className='shadow-md p-2 px-4 mt-8 rounded-md bg-green-600 opacity-70 hover:opacity-100 duration-500 hover:shadow-none'>Log In</button>
          </div>
        </div>
    </div>
  )
}

export default LogIn