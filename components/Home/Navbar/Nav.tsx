"use client"
import { NavLinks } from '@/constant/constant'
import  Link  from 'next/link'
import React, { useEffect, useState } from 'react'
import { Menu, Search, ShoppingCart } from 'lucide-react'


type Props = {
    openNav: () => void;
}

const Navbar = ({openNav}: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if(window.scrollY >= 90) setNavBg(true);
            if(window.scrollY < 90) setNavBg(false);
        };

        window.addEventListener("scroll", handler);
        return () => window.removeEventListener("scroll", handler);
    })

    const bg_style = navBg ? "bg-gray-900 shadow-md" : ""

  return <div className={`flex item-center justify-between ${bg_style} h-[12vh] fixed z-[100] w-full mx-auto transition-all duration-200`}>
            <h1 className='text-3xl text-white mt-4 font-bold ml-8 md:ml-16'>Gen AI</h1>
            <div className='md:flex items-center space-x-10 hidden'>
                {NavLinks.map((link) => {
                    return <Link key={link.id} href={link.url} className='relative text-white text-base w-fit block after:block arter:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center '>
                        <p > {link.label} </p>
                    </Link>
                })}
            </div>
            
            <div className=" flex items-center space-x-5 md:space-x-8 text-white mr-8 md:mr-16 ">
                <ShoppingCart className=" cursor-pointer w-6 h-6" />
                <Search className=" cursor-pointer w-6 h-6" />
                <Menu onClick={openNav} className=" cursor-pointer w-6 h-6 md:hidden" />


            </div>
        </div>
}

export default Navbar