
import image1 from '../svg/service-section/icon scissors.svg'
import image2 from '../svg/service-section/icon beard.svg'
import image3 from '../svg/service-section/icon razor.svg'
import image4 from '../svg/service-section/icon_ustache.svg'



function ServiceHero () {

    const serviceDetails = [{
        image:image1,
        maintext: "HAIRCUT & BEARD TRIM",
        subtext:"Our barbers are skilled in delivering precision haircuts that suit your personality"

     },{
        image:image3,
        maintext: "SHAVES & HAIRCUT",
        subtext:"Whether it's a trim, shaping, or a full shave, we ensure your beard looks immaculate."
     },
     {
        image:image2,
        maintext: "FACIAL & SHAVE",
        subtext:"​Experience the luxury of a traditional hot towel shave for that clean, refreshing feel."
     },
     {
        image:image4,
        maintext: "THE BIG DAY",
        subtext:"​Rejuvenate your skin with our specialized facial treatments, leaving you with a healthy glow, ready for tha big day of yours."
     }

    ]

    return(
        <>
        <section className="w-full  h-[1750px] md:h-[1074px] pt-[150px] flex flex-col items-center ">
            <div className="w-[459px] h-[49px] ">
                <p className="font-fatface xl:text-[70px] lg:text-[50px] md:text-[40px] text-[30px] text-center text-[#FFFFFF] ">
                    SERVICES
                </p>

            </div>
            <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-[50px] lg:w-[900px] w-[730px] flex flex-col items-center gap-[50px]   mt-[57px] md:mt-[107px]">
            {serviceDetails.map((service,index)=>  <div key={index} className="flex items-center  justify-center flex-col  gap-[25px] rounded-[6px] border border-[#E9C664] sm:w-[400px] md:w-[337px] lg:w-[400px]  w-[337px] h-[337px]">
                <img src={service.image} alt="image of a scissors"  />
                <h1 className='font-fatface  text-[20px] tracking-[5%] mb-0 text-[#FFFFFF]'>
                    {service.maintext}
                </h1>
                <p className='font-inter text-[16px] text-[#FFFFFF] w-[242px]'>
                {service.subtext}
                </p>

            </div>
        )}
       

           


         </div>

        </section>
        </>
    )

}
export default ServiceHero