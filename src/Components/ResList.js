import { useEffect, useState } from "react";
import ResCard from "./ResCard"
import { RES_API } from "../constants";
const ResList=()=>{

    const [resId, setResId] = useState([]);
    const fetchRes = async () => {
        const of = await fetch(RES_API);
        const data = await of.json();
        const fetchedResId = data.data.cards[5].card.card.gridElements.infoWithStyle.restaurants;
        setResId(fetchedResId);
    };
        
        useEffect(() => {
            fetchRes();
        }, []);
    return (
        <div className="grid grid-cols-8 mt-4 mb-4">
        <div className="col-start-2 col-span-6">
        <h1 className="font-bold text-2xl m-2">Restaurants with online food delivery</h1>
        <div className="flex flex-wrap gap-10 m-2 p-2">
            { resId.map(item=>{
                return <ResCard key={item.info.id} data={item.info}/>
            })}
        </div>
        </div>
        </div>
    )
}

export default ResList;