import React from "react";
import logos from '../Images/logo.jpg';
const Header=()=>{
    return (
        <div className="flex justify-between items-center mr-4 ml-4">
            <div className="flex items-center "><img className="w-10 h-10"src={logos} alt="logo"/><span className="ml-3">Food App</span></div>
            <div className=""><input className="border-black rounded-md  m-2 p-1" type="text" placeholder="select location"/></div>
            <div className="p-2">
                <ul className="flex text-xl">
                <li className="m-4">Search</li>
                <li className="m-4">Help</li>
                <li className="m-4"> Sign in</li>
                <li className="m-4">Cart</li>
                </ul>
            </div>
        </div>
    )

}

export default Header;