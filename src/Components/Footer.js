import logos from "../Images/logo.png"
const Footer=()=>{
    return(
        <div className="h-[80vh]">
            <div className="h-1/4 bg-slate-100 flex justify-around items-center p-2">
                <h1 className="font-bold text-3xl text-gray-700">For better experience,download the app now</h1>
                <div className="flex gap-5">
                    <img className="h-16 w-52 object-cover" alt="playstore-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"/>
                    <img className="h-16 w-52 object-cover" alt="appstore-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"/>
                </div>
            </div>
            <div className="h-3/4 bg-black text-white flex gap-8 justify-center">
               <div className="m-16"> 
                    <img alt="logo" className="h-16 w-16 mb-3" src={logos}/>
                    <div className="text-gray-400">
                    <h2>© 2023 Bundl</h2>
                    <h2>Technologies Pvt. Ltd</h2>
                    </div>
                </div>
               <div className="m-16">
                    <h1 className="font-bold mb-3 text-lg">Company</h1>
                    <div className="text-gray-400 cursor-pointer">
                    <h2>About</h2>
                    <h2>Carrers</h2>
                    <h2>Team</h2>
                    </div>
               </div>
               <div className="m-16">
                    <h1 className="font-bold mb-3 text-lg">Contact Us</h1>
                    <div className="text-gray-400 cursor-pointer">
                    <h2>Help & Support</h2>
                    <h2>Parten with Us</h2>
                    </div>
                    <h1  className="font-bold mb-3 text-lg mt-7">Legal</h1>
                    <div className="text-gray-400 cursor-pointer">
                    <h2>Terms & Conditions</h2>
                    <h2>Privacy Policy</h2>
                    </div>
               </div>
               <div className="m-16">
                    <h1 className="font-bold mb-3 text-lg">We deliver to:</h1>
                    <div className="text-gray-400 cursor-pointer">
                    <h2>Bangalore</h2>
                    <h2>Delhi</h2>
                    <h2>Mumbai</h2>
                    <h2>Pune</h2>
                    </div>
               </div>
            </div>
        </div>
    )
}

export default Footer;