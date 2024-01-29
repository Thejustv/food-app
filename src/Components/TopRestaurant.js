import React,{ useEffect, useState } from "react";
import { RES_API } from "../constants";
import ResCard from "./ResCard";
import { Link } from "react-router-dom";

function TopRestaurant(){

const [resId, setResId] = useState([]);
const fetchRes = async () => {
    const of = await fetch(RES_API);
    const data = await of.json();
    const fetchedResId = data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setResId(fetchedResId);
};
    
    useEffect(() => {
        fetchRes();
    }, []);


    return(
    <>
        {resId && 
            resId.map(item=>{
                return <React.Fragment key={item.info.id}><Link to={`/menu/${item.info.id}`}><ResCard key={item?.info?.id} data={item?.info}/></Link></React.Fragment>
            })}
    </>
    )
}

export default TopRestaurant;