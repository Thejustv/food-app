import { useEffect, useState } from "react";
import { RES_MENU_API } from "../constants";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
const ResMenu=()=>{

    const {id}=useParams();
    const [MenuList,setMenuList]=useState([]);

    
    const fc=MenuList[0]?.card?.card.info;
    const sc=MenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    const backupsc=MenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const title=MenuList[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.title;
    
    useEffect(()=>{
        const fetchMenu=async()=>{
            const menu=await fetch(`${RES_MENU_API}${id}`);
            const data=await menu.json();
            const menudata=data.data?.cards;
            setMenuList(menudata);
        }
        fetchMenu();
    },[id]);
    return(
        <div className="grid grid-cols-9 mt-4 mb-4">
        <div className="col-start-3 col-span-6">
            <div className="ml-2">
            <h1 className="font-bold mt-2 mb-2">{fc?.name}</h1>
            <p>{fc?.cuisines.join(',')}</p>
            <p>{fc?.locality +','+ fc?.sla.lastMileTravelString}</p>
            <img alt="logo" className="inline-block mt-4 mb-4"src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/"+fc?.feeDetails.icon}/>
            <p className="inline-block ml-2">{fc?.feeDetails.message}</p>
            </div>
            <hr></hr>
            <div>
                <h1 className="font-bold m-2 text-lg">{ sc!= null && title+" ("+sc.length+")"}</h1>
            {
            sc!= null? sc.map((item)=>{
            return <MenuCard key={item.card.info.id} item={item.card.info}/>
         }):backupsc!= null?backupsc.map((item)=>{
            return <MenuCard key={item.card.info.id} item={item.card.info}/>
         }):<div>Error</div>}
         </div>
        </div>
        </div>
    );
}

export default ResMenu;