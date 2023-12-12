const MenuCard=({item})=>{

    const name=item.name;
    const desc=item.description;
    const price=item.price;
    return (
        <div className="overflow-auto shadow-lg">
            <img alt="reslogo" className="float-right mt-4  mb-2 mr-2 rounded-lg cursor-pointer" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+item.imageId}/>
            <h1 className="font-bold mt-4 ml-2">{name}</h1>
            <p className="ml-2">₹{price/100}</p>
            <p className="mt-4 mb-6 ml-2 text-gray-400">{desc}</p>
        </div>
    );
}

export default MenuCard;