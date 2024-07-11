import { Search } from 'lucide-react'
import React from 'react'

const SearchSection = ({onSearchInput} : any) => {
  return (
    <div className='px-10 py-6 bg bg-gradient-to-br from-purple-300 via-purple-500 to-purple-700 flex justify-center items-center flex-col'>
        <h2 className='text-3xl font-bold text-white'>Browse all templates</h2>
        <p>What would you like to create today?</p>
        <div className='w-full flex justify-center'>
            <div className='flex gap-2 items-center p-2 border rounded-md bg-white w-[50%] my-5'>
                <Search className='text-primary '/>
                <input type='text' onChange={(event)=> onSearchInput(event.target.value)} placeholder='Search' className='bg-transparent w-full outline-none text-black'/>
            </div>
        </div>
    </div>
  )
} 

export default SearchSection