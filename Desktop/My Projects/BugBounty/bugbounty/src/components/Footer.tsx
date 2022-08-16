import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className="absolute bottom-0 h-10 w-full bg-[#242222] shadow-md">
      <div className="flex flex-row items-center text-white text-sm mt-2 mx-4">
        <div className="flex-1 opacity-80">BugBounty &copy;</div>
        <a href='https://github.com/brodyamcfarland/BugBounty' target="_blank" rel='noopener noreferrer'><BsGithub size={23} className='opacity-50 hover:opacity-100 duration-500'/></a>
      </div>
    </div>
  )
}

export default Footer