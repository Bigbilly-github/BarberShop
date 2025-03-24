

import image1 from '../svg/service-section/icon scissors.svg'
import image2 from '../svg/service-section/icon beard.svg'
import image3 from '../svg/service-section/icon razor.svg'
import image4 from '../svg/service-section/icon_ustache.svg'


function Services (){

     const serviceDetails = [{
        image:image1,
        maintext: "HAIRCUT & BEARD TRIM",
        subtext:"Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem."

     },{
        image:image3,
        maintext: "SHAVES & HAIRCUT",
        subtext:"Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem."
     },
     {
        image:image2,
        maintext: "FACIAL & SHAVE",
        subtext:"Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem."
     },
     {
        image:image4,
        maintext: "THE BIG DAY",
        subtext:"Duis porta, ligula rhoncuseuism od pretium, nisi tellus eleifend odio, luctus viverra sem."
     }

    ]
    return(
        <>
        <section className="bg-[url('/src/svg/service-section/img.svg')] mt-[120px] bg-cover pl-[72px]  bg-center w-full h-[1374px]">
         <div>
            <p className="text-center font-inter text-[19px] text-[#E9C664] mb-0">
                OUR TREATMENT
            </p>
           <p className="font-fatface text-[50px] tracking-[5%] mt-[15px] text-[#FFFFFF] text-center">
            SERVICES
           </p>
         </div>
         <div className="grid grid-cols-2 gap-[50px] w-[730px] mt-[157px]">
            {serviceDetails.map((service,index)=>  <div key={index} className="flex items-center  justify-center flex-col  gap-[25px] rounded-[6px] border border-[#E9C664] w-[337px] h-[337px]">
                <img src={service.image} alt="image of a scissors" />
                <h1 className='font-fatface text-[20px] tracking-[5%] mb-0 text-[#FFFFFF]'>
                    {service.maintext}
                </h1>
                <p className='font-inter text-[16px] text-[#FFFFFF] w-[242px]'>
                {service.subtext}
                </p>

            </div>
        )}
        <button className='w-[186px] cursor-pointer h-[50px] hover:opacity-60 border border-[#E9C664] text-[#E9C664] font-inter font-semibold text-[20px] mx-[80%]'>
            EXPLORE NOW
        </button>

           


         </div>
        </section>
        </>
    )
}
export default Services