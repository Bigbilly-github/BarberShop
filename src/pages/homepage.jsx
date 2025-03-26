import Details from "../components/details"
import Discount from "../components/discount"
import Footer from "../components/footer"
import Header from "../components/header"
import Hero from "../components/hero"
import Services from "../components/services"
import Sponsors from "../components/sponsors"
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
             <Sponsors/>
             <Footer/>
        </main>
        </>
    )
}
export default Homepage