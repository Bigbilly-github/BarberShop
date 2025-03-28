
import Discount from "../components/discount"
import Footer from "../components/footer"
import Header from "../components/header"
import Pricing from "../components/pricing"
import ServiceHero from "../components/serviceshero"
import Testimonial from "../components/testimonial"



function Services (){

    return (
        <>
         <Header/>
        <main>
            <ServiceHero/>
            <Pricing/>
            <Discount/>
            <Testimonial/>

        </main>
       
        <Footer/>
        </>
       
        
            
    
    )

}
export default Services