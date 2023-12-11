import { useEffect, useState } from "react";
import { RES_MENU_API } from "../constants";
const ResMenu=()=>{

    const [MenuList,setMenuList]=useState([]);

    const fetchMenu=async()=>{
        const menu=await fetch(RES_MENU_API);
        const data=await menu.json();
        const menudata=data.data?.cards;
        setMenuList(menudata);
    }
    const fc=MenuList[0]?.card?.card.info;
    const sc=MenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log(sc)
    useEffect(()=>{
        fetchMenu();
    },[]);
    return(
        <div className="grid grid-cols-8 mt-4 mb-4">
        <div className="col-start-3 col-span-5">
            <div>
            <h1 className="font-bold">{fc?.name}</h1>
            <p>{fc?.cuisines.join(',')}</p>
            <p>{fc?.locality +','+ fc?.sla.lastMileTravelString}</p>
            <img className="inline-block"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/"+fc?.feeDetails.icon}/>
            <p className="inline-block">{fc?.feeDetails.message}</p></div>
            <hr></hr>
            <div> {sc[0]?.card.info.name}</div>
        </div>
        </div>
    );
}

export default ResMenu;