import { useEffect, useState } from "react";
import { RES_API } from "../constants";
import OfferCard from "./Offercard"; 

const Offers = () => {
  const [imageId, setImageId] = useState("");

  const fetchRes = async () => {
    const of = await fetch(RES_API);
    const data = await of.json();
    const fetchedImageId = data.data.cards[0].card.card.imageGridCards.info;
    setImageId(fetchedImageId);
  };

  useEffect(() => {
    fetchRes();
  }, []);

  return (
    <>
    <h1 className="font-bold text-lg m-2 p-2">Best offers for you</h1>
    <div className="flex">
    {imageId.map(item=>{
      return <OfferCard img_id={item.imageId}/>
    })}
    </div>
    </>
  );
};

export default Offers;
