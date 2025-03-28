import ContactHero from "../components/contacthero"
import Discount from "../components/discount"
import Footer from "../components/footer"
import Header from "../components/header"
import Sponsors from "../components/sponsors"



function ContactUs (){

    return(
        <>
        <Header/>
        <main>
            <ContactHero/>
            <Discount/>
            <Sponsors/>

        </main>
        
        <Footer/>

        </>
    )

}
export default ContactUs