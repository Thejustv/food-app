import React from "react";
import logos from '../Images/logo.png';
import { FiSearch } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";
import { LuHelpCircle } from "react-icons/lu";
import { IoCartOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const Header=()=>{
    return (
        <div className="flex justify-between items-center shadow-md h-20">
         <Link to={"/"} ><img className="w-20 h-20 ml-10 hover:cursor-pointer hover:scale-95 ease-in-out duration-75" src={logos} alt="logo"/></Link>
            <div className="p-2">
                <ul className="flex text-lg hover:cursor-pointer m-4 gap-16">
                <li><FiSearch className="inline-block mr-2"/>Search</li>
               <Link to={"/help"}> <li><LuHelpCircle className="inline-block mr-2"/>Help</li></Link>
                <li><VscAccount className="inline-block  mr-2"/>Sign in</li>
                <li className="mr-6"><IoCartOutline className="inline-block mr-2"/>Cart</li>
                </ul>
            </div>
        </div>
    )

}

export default Header;