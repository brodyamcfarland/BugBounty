import { useState } from 'react'

const OpenBounties = () => {

    const [value, setValue] = useState<string>('');

    const handleChange = (e: any) => {
        setValue(e.target.value);
    }

    const mockData = [
        { id: 1, subject: "Solidity - ReEntrancy Guard Issue", bounty: 0.15, open: true },
        { id: 2, subject: "React/Ethers.js - Error when calling function", bounty: 0.50, open: true },
        { id: 3, subject: "Solidity - Trouble with Upgradable Contracts", bounty: 1.00, open: true },
    ];

  return (
    <div className='flex flex-col text-white text-center'>
        <div className='flex flex-row justify-center items-center pr-3 bg-[#3c3939] py-1 pb-2 shadow-md'>
            <header className='flex-1 ml-24 font-bold'>Open Bounties</header>
            <select value={value} onChange={handleChange} className='gap-5 h-5 rounded-md text-black text-sm'>
                <option value='mostviewed'>Most Viewed</option>
                <option value='mostrecent'>Most Recent</option>
                <option value='highestbounty'>Highest Bounty</option>
                <option value='lowestbounty'>Lowest Bounty</option>
            </select>
        </div>
        <div className='w-[95%] m-auto mt-4 rounded-md bg-[#0000002b] min-h-[20rem]'>
            {mockData.map((bounty) => (
                <div className='w-[90%] flex flex-row gap-3 bg-black rounded-md m-1 p-2 items-center'>
                    <span>#{bounty.id}</span>
                    <span>{bounty.subject}</span>
                    <span>{bounty.bounty}</span>
                    <button className='border rounded-md p-1'>View</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default OpenBounties