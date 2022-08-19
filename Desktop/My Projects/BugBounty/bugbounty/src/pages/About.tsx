import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="h-full w-[90%] md:w-[80%] m-auto flex flex-col text-white text-center">
        <div className="bg-[#242222] m-2 px-2 py-6 rounded-md shadow-lg">
            <div className="font-bold border-b border-gray-500 pb-2">About BugBounty &copy;</div>
            <div className="py-3 px-8 text-sm text-left border-b border-gray-500">BugBounty was created to incentivize developers to help other developers fix issues in their code. Once an account is created, users can post their bugs and set a bounty to get them resolved, or start collecting bounties by solving issues. A MetaMask connection will be required in order to post and collect bounties. Bounty Functionality is powered by smart contracts.</div>
            <div className="font-bold border-b border-gray-500 py-2">Prerequisites</div>
            <div className="flex flex-col gap-4 py-3 px-8 text-sm text-left border-b border-gray-500">
                <p><span className="bg-orange-600 shadow-md rounded-full py-[3px] px-[9px] mr-4">1</span>Meta Mask Browser Extension and Wallet</p>
                <p><span className="bg-orange-600 shadow-md rounded-full py-[3px] px-[9px] mr-4">2</span>Create an Account or <Link to='/login' className='text-[#f97a3f]' >Sign Up</Link></p>
                <p><span className="bg-orange-600 shadow-md rounded-full py-[3px] px-[9px] mr-4">3</span>Ether to cover bounty cost and gas fees.<br/><span className='text-gray-500 ml-10'>(~0.01 Ether)</span></p>
            </div>
            <div className="font-bold border-b border-gray-500 py-2">Smart Contract</div>
            <div className="py-3 px-8 text-sm text-left border-b border-gray-500">
                <div className='bg-[#343131] rounded-md border w-[20rem] h-10 m-auto'>
                    <div className='text-center mt-2'>
                        View the Smart Contract Code <a href='/' target='_blank' className='text-[#f97a3f] underline'>Here</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About