import { useEffect, useState } from "react";
import { RES_API } from "../constants";
import ResCard from "./ResCard";

function TopRestaurant(){

const [resId, setResId] = useState([]);
const fetchRes = async () => {
    const of = await fetch(RES_API);
    const data = await of.json();
    const fetchedResId = data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants;
    setResId(fetchedResId);
};
    
    useEffect(() => {
        fetchRes();
    }, []);


    return(
            resId.map(item=>{
                return <ResCard key={item.info.id} data={item.info}/>
            })
    )
}

export default TopRestaurant;