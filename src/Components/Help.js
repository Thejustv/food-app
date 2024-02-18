const Help=()=>{
    return (
        <div className="grid grid-cols-8   mb-4 bg-blue-500 h-full">
            <div className="col-start-2 col-span-6">
                <div className=" text-lg text-white m-2 p-2">
                    <h1 className="text-4xl">Help & Support</h1>
                     <p>Let's take a step ahead and help you better.</p>
                 </div>
                 <div className="bg-white m-2 p-2 rounded-md ">
                    <h1 className="text-black font-bold text-2xl m-5">FAQs</h1>
                    <div>
                        <h3 className="m-2 text-lg ml-5 hover:text-orange-500 cursor-pointer">What is Swiggy Customer Care Number?</h3>
                        <p className="m-2 text-gray-500 ml-5">We value our customer’s time and hence moved away from a single customer care number to a comprehensive chat-based support system for quick and easy resolution. You no longer have to go through the maze of an IVRS call support. Just search for your issue in the help section on this page and initiate a chat with us. A customer care executive will be assigned to you shortly. You can also email us your issue on <b>support@swiggy.in</b> <br/><br/>Note: We value your privacy and your information is safe with us. Please do not reveal any personal information, bank account number, OTP etc. to another person. A Swiggy representative will never ask you for these details. Please do not reveal these details to fraudsters and imposters claiming to be calling on our behalf. Be vigilant and do not entertain phishing calls or emails.</p>
                    </div>
                    <div>
                        <h3 className="m-2 text-lg ml-5 hover:text-orange-500 cursor-pointer" >I want to explore career opportunities with Swiggy</h3>
                        <p className="m-2 text-gray-500 ml-5"> <a href="https://careers.swiggy.com/" className="text-orange-500">Join our Team </a></p>
                    </div>
                    <div className="mb-3">
                        <h3 className="m-2 text-lg ml-5 hover:text-orange-500 cursor-pointer">Can I edit my order?</h3>
                        <p className="m-2 text-gray-500 ml-5"> Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents</p>
                    </div>
                 </div>
             </div>
        </div>

    )
}

export default Help;