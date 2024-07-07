import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between items-center'>
      <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
        <Search/>
        <input type='text' placeholder='Search...' className='outline-none'/>
      </div>
      <div>
        <h2 className='bg-primary text-sm text-white '>
          🔥Become pro just in $15/month
        </h2>
      </div>
    </div>
  )
}

export default Header