import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import {useRef} from "react";

const CardLayout=({data,children})=>
{
const containerRef=useRef(null);

const scroll = (direction) => {
    const container = containerRef.current;
    if (direction === "left") {
      container.scrollLeft -= 500; 
    } else if (direction === "right") {
      container.scrollLeft += 500; 
    }
  };
 
    return (
        <div className="grid grid-cols-8 h-auto mt-4 mb-4">
            <div className="col-start-2 col-span-6">   
                <div className="flex justify-between m-2 p-2">
                    <h1 className="font-bold text-2xl">{data}</h1>
                    <div>
                    <button onClick={()=>scroll("left")} className="mr-3"><FaArrowLeft/></button>
                    <button onClick={()=>scroll("right")}><FaArrowRight/></button>
                    </div>
                </div>
                <div ref={containerRef} className="flex overflow-hidden gap-3 m-2 scroll-smooth">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default CardLayout;