import { useState } from 'react'
import { FaEthereum } from 'react-icons/fa'

const OpenBounties = () => {

    const [value, setValue] = useState<string>('');

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    const mockData = [
        { id: 1, subject: "Solidity - ReEntrancy Guard Issue", bounty: 0.15, open: true, postdate: "8/14/2022" },
        { id: 2, subject: "React/Ethers.js - Error when calling function", bounty: 0.50, open: true, postdate: "8/10/2022"},
        { id: 3, subject: "Solidity - Trouble with Upgradable Contracts", bounty: 1.00, open: true, postdate: "Today"},
    ];

  return (
    <div className='flex flex-col text-white text-center'>
        <div className='flex flex-row justify-center items-center pr-3 bg-[#3c3939] py-1 pb-2 shadow-md'>
            <header className='flex-1 ml-[10rem] font-bold text-green-600'>Open Bounties</header>
            <select value={value} onChange={handleChange} className='gap-5 h-5 rounded-md text-black text-sm'>
                <option value='mostviewed'>Most Viewed</option>
                <option value='mostrecent'>Most Recent</option>
                <option value='highestbounty'>Highest Bounty</option>
                <option value='lowestbounty'>Lowest Bounty</option>
            </select>
        </div>
        <div className='w-[95%] m-auto mt-4 text-sm rounded-md bg-[#0000002b] min-h-[20rem]'>
            <div className='flex flex-row justify-between mx-9 pt-2 text-orange-100'>
                <div>Post Date</div>
                <div className='flex-1'>Title</div>
                <div className='pr-14'>Bounty</div>
            </div>
            {mockData.map((bounty) => (
                <div className='w-[95%] flex flex-row gap-1 bg-[#242222] rounded-md m-2 mx-auto p-2 items-center opacity-80 hover:opacity-100 duration-200'>
                    <span className='text-gray-400'>{bounty.postdate}</span>
                    <span className='flex-1'>{bounty.subject}</span>
                    <span className='text-gray-400'>{bounty.bounty}</span>
                    <FaEthereum size={22}/>
                    <button className='rounded-md p-1 px-2 bg-orange-600 opacity-50 hover:opacity-100 duration-500'>View</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OpenBounties