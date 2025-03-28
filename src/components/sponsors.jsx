
import image1 from '../img/sponsors/sponsor1.png'
import image2 from '../img/sponsors/sponsor2.png'
import image3 from '../img/sponsors/sponsor3.png'
import image4 from '../img/sponsors/sponsor4.png'

function Sponsors (){
    return(
        <>
        <section>
            <div className="w-full h-[568px] bg-[#212121] flex justify-center ">
                <div className="flex xl:justify-between w-[1296px] items-center justify-center ">
                        <div className="w-[457px] h-[124px] hidden xl:block ">
                            <h1 className="text-[#FFFFFF]  w-[457px] h-[32px] font-fatface text-[45px] tracking-[5%] ">
                                BRANDS WE CARRY
                            </h1>
                            <p className="text-[#FFFFFF] w-[349px] h-[57px] mt-[35px] font-inter text-[18px] ">
                            We’re proud to partner with top brands that help us deliver the best grooming experience. Our sponsors support us in keeping you looking sharp! 💈✨
                            </p>

                        </div>
                        <div className="w-[5px] h-[448px] bg-[#E9C664] hidden xl:block rounded-b-[10px] rounded-t-[10px]">

                        </div>

                        <div className="lg:w-[810px]  xl:w-[510px] sm:w-[500px] md:w-[700px] w-[350px] h-[246px]  grid grid-cols-3  xl:gap-[20px] lg:gap-[30px] sm:gap-[20px] gap-[15px]">
                            <img src={image1} alt="" className='xl:w-[150px]  xl:h-[108px] lg:w-[200px] lg:h-[150px] sm:w-[150px] w-[100px]  h-[100px] rounded-[10px]'/>
                            <img src={image2} alt="" className='xl:w-[150px]  xl:h-[108px] lg:w-[200px] lg:h-[150px] sm:w-[150px]  w-[100px]    h-[108px] rounded-[10px]'/>
                            <img src={image3} alt="" className='xl:w-[150px]  xl:h-[108px] lg:w-[200px] lg:h-[150px] sm:w-[150px] w-[100px]   h-[108px] rounded-[10px]'/>
                            <img src={image4} alt="" className='xl:w-[150px]  xl:h-[108px] lg:w-[200px] lg:h-[150px] sm:w-[150px] w-[100px]   h-[108px] rounded-[10px]'/>
                            <img src={image1} alt="" className='xl:w-[150px]   xl:h-[108px] lg:w-[200px] lg:h-[150px] sm:w-[150px] w-[100px]   h-[108px] rounded-[10px]'/>
                            <img src={image4} alt="" className='xl:w-[150px]  xl:h-[108px] lg:w-[200px] lg:h-[150px] sm:w-[150px] w-[100px]   h-[108px] rounded-[10px]'/>

                        </div>

                </div>
                
                <div>

                </div>

            </div>
        </section>
        </>
    )
}
export default Sponsors