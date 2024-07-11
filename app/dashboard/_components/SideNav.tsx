"use client"
import { FileClock, Home, Settings, Wallet } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideNav = () => {

    const MenuList = [
        {
            name : "Home",
            icon : Home,
            path : "/dashboard"

        },
        {
            name : "History",
            icon : FileClock,
            path : "/dashboard/history"

        },
        {
            name : "Billing",
            icon : Wallet,
            path : "/dashboard/billing"

        },
        {
            name : "Setting",
            icon : Settings,
            path : "/dashboard/setting"

        },
    ]

    const path = usePathname()
  return (
    <div className='h-screen shadow-sm p-5 border'>
        <div className='flex justify-center'>

        <Image src={"/logo.svg"} width={120} height={100} alt='logo'/>
        </div>
        <hr className='h-2 my-6'/>
        <div className='mt-3'>
           {MenuList.map((menu , index) => (
            <div key={index} className={`flex gap-2 mb-2 p-3 rounded-lg hover:bg-primary hover:text-white cursor-pointer ${path == menu.path && 'bg-primary text-white'}`}>
                <menu.icon className='h-6 w-6'/>
                <h2 className='text-lg'>{menu.name}</h2>
            </div>
           ))} 
        </div>
    </div>
  )
}

export default SideNav