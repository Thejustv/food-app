import { IMG_API } from "../constants";
const OfferCard=(props)=>{
    return (
    <div className="w-80 h-48 rounded-xl m-2 p-2">
      <img alt="offers logo" src={IMG_API+props.img_id}/>
    </div>
 );
}

export default OfferCard;