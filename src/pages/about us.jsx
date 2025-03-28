import AboutUsHero from "../components/aboutushero"
import Details from "../components/details"
import Discount from "../components/discount"
import Footer from "../components/footer"
import Header from "../components/header"
import Sponsors from "../components/sponsors"



function AboutUs () {


    return(
        <>
        <Header/>
        <main>
            <AboutUsHero/>
            <Details/>
            <Discount/>
            <Sponsors/>
        </main>
        <Footer/>
        </>
    )

}
export default AboutUs