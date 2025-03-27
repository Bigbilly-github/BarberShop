
'
import image1 from '../img/testimonials/profileimg.jpeg'
import image2 from '../img/testimonials/img2.jpeg'
import image3 from '../img/testimonials/img3.jpeg'

function Testimonial() {

    const testimonies = [
        {
            profileimage:image1,
            testimony:" The best haircut I've ever had! The team at The Cut Lab is exceptional.",
            name:"MIKE DEAN",
            location:"MIAMI",
        },
        {
            profileimage:image2,
            testimony:" A truly luxurious experience. I felt pampered and left looking sharp.",
            name:"MICAH RICHARDS",
            location:"FLORIDA",
        },
        {
            profileimage:image3,
            testimony:"The attention to detail and professionalism were top-notch. I left feeling confident and refreshed. Highly recommend!",
            name:"JOHN DUMELO",
            location:"BOSTON",
        }
    ]
    return(
        <>
        <section>
            <div className="w-full lg:h-[700px] h-[1306px] bg-[#FFFFFF] flex justify-center items-center">
                <div className="lg:w-[1296px] w-[500px] lg:h-[400px] h-[1166px] flex flex-col items-center  ">
                   
                        <p className="w-[295px] text-center h-[15px] mb-0 font-inter text-[16px] sm:text-[20px] text-[#E9C664]">
                         WHAT PEOPLE SAY ABOUT US
                        </p>
                        <h1 className="w-[478px] h-[35px] text-center mt-[20px] font-fatface text-[30px] sm:text-[50px] tracking-[5%]">
                            CLIENT REVIEWS
                        </h1>

                        <div className="w-[1296px] lg:w-[1100px] lg:h-[261px] h-[1000px]  mt-[90px] flex flex-col items-center gap-[80px] lg:flex-row lg:justify-between xl:gap-[183px]">
                           { testimonies.map((testimony,index)=>  <div key={index} className='w-[310px] h-[261px]  flex flex-col items-center justify-between'>
                                <img src={testimony.profileimage} alt="" className="rounded-[50%] h-[98px] w-[98px] " />
                                <p className='font-inter text-[16px] text-center'>
                                    {testimony.testimony}
                                </p>
                                <p className='font-inter text-[18px] text-[#E9C664]'>
                                     {testimony.name}, {testimony.location}
                                </p>
                            </div>
)}

                           

                        </div>
                    

                </div>

            </div>
        </section>
        
        </>
    )
}
export default Testimonial