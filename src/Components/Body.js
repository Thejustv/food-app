import BestOffers from "./BestOffers";
import CardLayout from "./CardLayout";
import TopRestaurant from "./TopRestaurant";

function Body(){
    const data="Best offers for you";
    const data2="Top Restaurant chains near you";
    return (<>       
        <CardLayout data={data}>
        <BestOffers/>
        </CardLayout>
        <hr className="mt-5"></hr>
        <CardLayout data={data2}>
        <TopRestaurant/>
        </CardLayout>
        <div className="h-20">

        </div>
        </>
    )
}
export default Body;