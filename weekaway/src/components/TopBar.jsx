// import React from 'react'
import {AiFillPhone,AiOutlineClockCircle} from 'react-icons/ai'
import {BsChatSquareDots} from 'react-icons/bs'
const TopBar = () => {
  return (
    // container mx-auto  => just remember wanna
    <div className='flex justify-between items-center px-4 py-2 shadow'>
      <div className='flex '>
        <BsChatSquareDots size={30} className='mr-2 text-[var(--primary-dark)]'/>
        <h1 className='text-xl font-bold text-gray-700'>WEEKAWAY</h1>
      </div>
      <div className='flex  items-center '>
        <div className=' hidden md:flex items-center px-6'>
          <AiOutlineClockCircle size={20} className='text-[var(--primary-dark)]' />
          <p className='ml-2 text-gray-700 text-sm'>9AM - 5AM</p>
        </div>
        <div className='hidden md:flex items-center px-6'>
          <AiFillPhone size={20} className='text-[var(--primary-dark)]' />
          <p className='ml-2 text-gray-700 text-sm'>20-12-755-7421</p>
        </div>
        <button className=' ml-7 '>Get a Free Quote</button>
      </div>
    </div>
  )
}

export default TopBar