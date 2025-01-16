import { NavLinks } from '@/constant/constant'
import React from 'react'
import Link from 'next/link'
import { XIcon } from 'lucide-react'

type Props = {
    showNav: boolean;
    closeNav: () => void;
}


const MobileNav = ({closeNav, showNav}: Props) => {

    const navOpen = showNav? "translate-y-0" : "translate-y-[-200%]";

  return (
    <div>
        <div className= {`text-white ${navOpen} fixed justify-center flex flex-col h-screen transform translate-all duration-1000 w-full bg-gray-900 space-y-6 z-[1050] top-0 `}>
            {NavLinks.map((link) => {
                    return <Link key={link.id} href={link.url} className='relative text-white text-base w-fit block after:block arter:content-[""] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center '>
                            <p className=" text-white w-fit text-xl ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]" >
                                {link.label} 
                            </p>
                        </Link>
                })}
            <XIcon onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 '/>
        </div>
    </div>)
}

export default MobileNav