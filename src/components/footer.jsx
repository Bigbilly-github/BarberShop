
import locationicon from '../svg/footer/icon location.svg'
import clockicon from '../svg/footer/icon clock.svg'
import envelopeicon from '../svg/footer/icon envelope.svg'
import phoneicon from '../svg/footer/icon phone.svg'

function Footer (){

    const scrollToTop = () => {
        window.scrollTo({
          top: 0, 
          behavior: "smooth",
        });
      };

    return(
        <>
        <section>
            <div className="w-full h-[515px] bg-[#FFFFFF] flex  flex-col items-center pt-[60px]  ">
                <div className="w-[1296px]  h-[224px]  flex flex-col items-center ">
                    <h1 className="w-[328px] text-center h-[35px] mb-0  text-black font-fatface xl:text-[50px] lg:text-[40px]  sm:text-[30px] text-[20px] tracking-[5%] ">
                    CONTACT US
                    </h1>
                    <p className="xl:w-[771px] text-center w-[300px] h-[31px] mt-[20px] lg:mt-[35px] xl:mt-[45px] font-inter text-[16px]">
                    Duis pretium gravida enim, vel maximus ligula fermentum a. Sed rhoncus eget ex id egestas. Nam nec 
                    nisl placerat, tempus erat a, condimentum metusurabitur nulla nisi.
                    </p>

                </div>
                <div className="w-[1296px] h-[183px] flex justify-center items-center xl:gap-[75px] lg:gap-[10px] md:gap-[20px] gap-[30px] border-b border-[#E9C664] ">
                    <div className='w-[248px] h-[153px] hidden  lg:flex flex-col items-center pt-[10px]  '>
                        <img src={locationicon} alt="location icon" />
                        <p className='font-fatface text-[20px] tracking-[5%] mt-[10px] mb-0 text-black'>
                            ADDRESS
                        </p>
                        <p className='w-[238px] h-[33px] text-center  mt-[10px] font-inter text-[17px] text-black'>
                            304 North Cardinal St. 
                            Dorchester Center, MA 02124
                        </p>

                    </div>

                    <div className='w-[248px] h-[153px]   flex flex-col items-center pt-[10px]  '>
                        <img src={envelopeicon} alt="location icon" />
                        <p className='font-fatface text-[20px] tracking-[5%] mt-[15px] mb-0 text-black'>
                            EMAIL
                        </p>
                        <p className='w-[238px] h-[23px] text-center  mt-[10px] font-inter text-[17px] text-black'>
                        info@thecutlab.com
                        </p>

                    </div>


                    <div className='w-[248px] h-[153px]   flex flex-col items-center pt-[10px]  '>
                        <img src={phoneicon} alt="location icon" />
                        <p className='font-fatface text-[20px] tracking-[5%] mt-[10px] mb-0 text-black'>
                         PHONE
                        </p>
                        <p className='w-[238px] h-[15px] text-center  mt-[10px] font-inter text-[17px] text-black'>
                        (+63) 555 1212
                        </p>
                        <p className='w-[238px] h-[15px] text-center  mt-[10px] font-inter text-[17px] text-black'>
                        (+63) 555 1212
                        </p>

                    </div>


                    <div className='w-[248px] h-[153px] hidden   md:flex flex-col items-center pt-[10px]  '>
                        <img src={clockicon} alt="location icon" />
                        <p className='font-fatface text-[20px] tracking-[5%] mt-[10px] mb-0 text-black'>
                                 WORKING HOURS
                        </p>
                        <p className='w-[238px] h-[33px] text-center  mt-[10px] font-inter text-[17px] text-black'>
                        Mon - Fri: 10am - 6pm <br/>
                        Sat - Sun: 10am - 6pm
                        </p>

                    </div>

                </div>
                <div className='mt-[20px] h-[60px] font-inter text-[17px]'>
                    <p>
                        &copy;The Cut Lab {new Date().getFullYear()}
                       <span className='ml-[14px] text-[#E9C664] font-inter underline'><a onClick={scrollToTop} className='cursor-pointer'>back to top</a></span> 
                    </p>
                </div>

            </div>
        </section>
        </>
    )

}
export default Footer