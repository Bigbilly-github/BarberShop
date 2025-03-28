
import { Link } from "react-router-dom";

import image1 from '../img/about-us/barber1.jpg'
import image2 from '../img/about-us/barber2.jpeg'
import image3 from '../img/about-us/barber4.jpeg'
import image4 from '../img/about-us/barber5.jpeg'

function AboutUsHero (){


    const BarberDetails = [{
        image:image1,
        name: "JAMES TRAFFORD",
      

     },{
        image:image3,
         name: "JOHN DANIEL"
     },
     {
        image:image2,
        name: "PETER SAMUEL",
     },
     {
        image:image4,
        name: "ALIU SAHUR",
     }

    ]

    return(
        <>
        <section className="w-full xl:h-[1400px] h-[2150px] md:h-[1374px] pt-[150px] flex flex-col items-center ">
            <div className="w-[459px] h-[49px] ">
                <p className="font-fatface xl:text-[70px] lg:text-[50px] md:text-[40px] text-[30px] text-center text-[#FFFFFF] ">
                    ABOUT US
                </p>

            </div>

            <section className=" bg-[#FFFFFF] mt-[120px] bg-cover pt-[50px] flex flex-col items-center  bg-center w-full sm:h-[2000px] h-[1900px] md:h-[1274px]">
                    <div>
                        <p className="text-center font-inter text-[16px] text-[#E9C664] mb-0">
                          MEET THE FAMILY
                        </p>
                    <p className="font-fatface md:text-[50px]  sm:text-[40px] text-[35px] tracking-[5%] mt-[15px] text-black text-center">
                       OUR BARBERS
                    </p>
                    </div>
                    <div className="md:grid md:grid-cols-2 grid-cols-1 md:gap-[50px] lg:w-[900px] w-[730px] flex flex-col items-center gap-[50px]   mt-[77px] md:mt-[57px]">
                        {BarberDetails.map((barber,index)=>  <div key={index} className="flex items-center  justify-center flex-col  gap-[25px] rounded-[6px] border border-[#535149] sm:w-[400px] md:w-[337px] lg:w-[400px]  w-[337px] h-[337px]">
                            <img src={barber.image} alt="image of a scissors"  className="w-[250px] h-[250px] rounded-[10px]" />
                           
                            <p className='font-inter text-center text-[16px] text-[#a27907] w-[242px]'>
                            {barber.name}
                            </p>

                        </div>
                    )}
                

                    


                    </div>
                    
        </section>

           
        </section>
        </>
    )

}
export default AboutUsHero