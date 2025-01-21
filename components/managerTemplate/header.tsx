"use client"

import { ReactNode, useState } from "react"
import Image from "next/image"
import MenuItem from "./MenuItem"
import Logo from '../../public/LOGO 3.png'
import Profile from '../../public/Ona.jpg'
import { title } from "process"

type MenuType = {
    id: string,
    icon: ReactNode
    path: string,
    label: string
   }
   type ManagerProp = {
    children: ReactNode,
    id: string,
    title: string,
    menuList: MenuType[]
   }

   const header = ({ children, id, title, menuList }: ManagerProp) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };
    return (
    <div className="w-full min-h-dvh bg-slate-50">

        
    {/* header section */}

 <header className="flex justify-between items-center p-6 bg-green-700 shadow-md w-full h-16 rounded-t-lg">

  {/* Logo Section */}
  <div className="flex items-center gap-4">
    <Image src={Logo} alt="Logo" width={100} height={60} />
    
  </div>
  
  {/* Navigation Menu */}
  <nav className="hidden md:flex gap-6">
    <a href="/manager/AboutUs" className="text-white hover:underline">About Us</a>
    <a href="/manager/rules" className="text-white hover:underline">Rules</a>
    <a href="/manager/katalog" className="text-white hover:underline">Katalog</a>
    <a href="/manager/GRWM" className="text-white hover:underline">GRWM</a>
  </nav>
  

  {/* Profile and Search Section */}
  <div className="flex items-center gap-4">
    <div className="relative">
      <input
        type="text"
        placeholder="Search"
        className="bg-white rounded-full px-4 py-2 text-sm"
      />
    </div>
    <Image src={Profile} alt="Profile" width={40} height={40} className="rounded-full border" />
  </div>
</header>

  {/* end header section */}
 
  {/* content section */}
 <div className="p-4">
 {children}
 </div>
 {/* end content section */}
   
    </div>
    );

   };

  export default header