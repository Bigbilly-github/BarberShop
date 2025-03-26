
import image from '../svg/testimonials/img.svg'

function Testimonial() {

    const testimonies = [
        {
            profileimage:image,
            testimony:" Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque. ",
            name:"GLEN SPARKLE",
            location:"MIAMI",
        },
        {
            profileimage:image,
            testimony:" Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque. ",
            name:"MICAH RICHARDS",
            location:"FLORIDA",
        },
        {
            profileimage:image,
            testimony:" Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque. ",
            name:"ALAN SHEARER",
            location:"BOSTON",
        }
    ]
    return(
        <>
        <section>
            <div className="w-full h-[606px] bg-[#FFFFFF] flex justify-center items-center">
                <div className="w-[1296px] h-[446px] flex flex-col items-center ">
                   
                        <p className="w-[295px] text-center h-[15px] mb-0 font-inter text-[20px] text-[#E9C664]">
                         WHAT PEOPLE SAY ABOUT US
                        </p>
                        <h1 className="w-[478px] h-[35px]  mt-[20px] font-fatface text-[50px] tracking-[5%]">
                            CLIENTS REVIEWS
                        </h1>

                        <div className="w-[1296px] h-[261px]  mt-[90px] flex gap-[183px]">
                           { testimonies.map((testimony,index)=>  <div key={index} className='w-[310px] h-[261px]  flex flex-col items-center justify-between'>
                                <img src={testimony.profileimage} alt="" className="rounded-[50%] " />
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