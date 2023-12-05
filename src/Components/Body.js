import BestOffers from "./BestOffers";
import CardLayout from "./CardLayout";

function Body(){
    const data="Best Offers for you"
    return (<>       
        <CardLayout data={data}>
        <BestOffers/>
        </CardLayout>
        </>
    )
}
export default Body;