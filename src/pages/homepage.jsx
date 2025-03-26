import Details from "../components/details"
import Discount from "../components/discount"
import Header from "../components/header"
import Hero from "../components/hero"
import Services from "../components/services"
import Testimonial from "../components/testimonial"




function Homepage (){
    return(
        <>
        <Header/>
        <main>
            <Hero/>
            <Services/>
            <Details/>
             <Discount/>
             <Testimonial/>
        </main>
        </>
    )
}
export default Homepage