import Details from "../components/details"
import Header from "../components/header"
import Hero from "../components/hero"
import Services from "../components/services"



function Homepage (){
    return(
        <>
        <Header/>
        <main>
            <Hero/>
            <Services/>
            <Details/>
        </main>
        </>
    )
}
export default Homepage