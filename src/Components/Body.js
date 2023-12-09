import BestOffers from "./BestOffers";
import CardLayout from "./CardLayout";
import ResList from "./ResList";
import TopRestaurant from "./TopRestaurant";
import Footer from "./Footer"

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
        <hr className="mt-5"></hr>
        <ResList/>
        <Footer/>
        </>
    )
}
export default Body;