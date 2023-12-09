import { RES_IMG_API } from "../constants";
import { FaStar } from "react-icons/fa";

const ResCard=(data)=>
{
const image_id=data?.data?.cloudinaryImageId;
const resname=data?.data?.name;
const resstar=data?.data?.avgRating;
const resminute=data?.data?.sla.deliveryTime;
const resmenu=data?.data?.cuisines.join(',');
const resloc=data?.data?.locality;

    return (
        <div>
        <div className="w-72 rounded-lg cursor-pointer">
           <img className="rounded-xl object-cover h-48 w-full" src={`${RES_IMG_API}${image_id}`} alt="res-logo"/>
           <div className="m-2"> 
            <h2 className="font-bold font-sans text-lg">{resname}</h2>
            <p className="font-bold font-sans"><FaStar className="inline-block"/> {resstar} - {resminute} mins</p>
            <p className="truncate mt-1">{resmenu}</p>
            <p>{resloc}</p>
            </div>
        </div>
        </div>
    )
}

export default ResCard;