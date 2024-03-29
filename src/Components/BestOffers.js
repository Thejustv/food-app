import { useEffect, useState } from "react";
import { RES_API } from "../constants";
import { IMG_API } from "../constants";
import { useDispatch } from "react-redux";
import { addData } from "../apiData";

const BestOffers=()=>{

    const [imageId, setImageId] = useState([]);
    const dispatch=useDispatch();
  
   // const data=useSelector((store)=>store.resapi.data);
    
  
    useEffect(() => {
      const fetchRes = async () => {
        const of = await fetch(RES_API);
        const data = await of.json();
        const fetchedImageId = data?.data?.cards[0]?.card?.card?.imageGridCards?.info;
        setImageId(fetchedImageId);
        dispatch(addData(fetchedImageId));
      };
      fetchRes();
    }, [dispatch]);

    return (
        <>
            {imageId.map((item, index)=>{
                return <img alt="best offers" className="w-[425px] h-[252px] cursor-pointer" key={item.id} src={`${IMG_API}${item.imageId}`}/>
            })}
        </>
    )
}

export default BestOffers;