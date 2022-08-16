const Sidebar = () => {
  return (
    <div>
      <div className='flex flex-col gap-2 p-2'>
        <ul className='p-1 rounded-md pl-2 duration-400 hover:bg-[#f59d5033]'>Log In</ul>
        <ul className='p-1 rounded-md pl-2 duration-400 hover:bg-[#f59d5033]'>Sign Up</ul>
        <ul className='p-1 rounded-md pl-2 duration-400 hover:bg-[#f59d5033]'>About</ul>
        <ul className='p-1 rounded-md pl-2 duration-400 hover:bg-[#f59d5033]'>Open Bounties</ul>
        <ul className='p-1 rounded-md pl-2 duration-400 hover:bg-[#f59d5033]'>Closed Bounties</ul>
      </div>
    </div>
  )
}

export default Sidebar