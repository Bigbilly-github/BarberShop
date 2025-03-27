


function Hero (){
    return(
        <>
        <section  className=" bg-[url('/bg.svg')]  animate-fadeIn bg-no-repeat  bg-center  bg-cover pt-[200px] md:pt-[220px] sm:pt-[230px]  xl:pl-[72px] md:pl-[40px] pl-[20px] w-full h-[90vh]  ">
            <div className=" w-[542px] h-[442px]">
                <h1 className="w-[494px] lg:h-[40px] md:h-[40px] h-[25px] font-karan font-extrabold tracking-widest mb-0 sm:text-[40px] text-[34px] md:text-[48px] text-[#E9C664]">
                THE CUT LAB
                </h1>
                <h3 className="font-karan xl:w-[491px] w-[300px] md:h-[45px] sm:h-[49px] h-[45px] text-[19px] sm:text-[28px]  text-[#977656] mt-[24px]">
                EXPERT HAIRCUTS AND GROOMING SERVICES
                </h3>
                <p className="xl:w-[342px]  sm:w-[300px] w-[180px] xl:h-[150px] sm:h-[100px] h-[140px] opacity-[64%] font-inter text-[16px] text-[#fbeadb]">
                <span className="hidden xl:block"> At The Cut Lab, we offer a wide range of professional hair cutting and grooming services for men. Our experienced barbers use the latest techniques and tools to give you the perfect look. </span><span className="block xl:hidden">Whether you're in need of a classic haircut, straight razor shave, or beard trim, we've got you covered.</span>
                </p>

                <button className="sm:w-[191px]  w-[150px] cursor-pointer  h-[50px] bg-[black] hover:text-[black] hover:bg-slate-700 text-[#FFFFFF] font-inter font-black text-[14px] border-2 border-[#E9C664] rounded-[5px]">
                    Book Appointment
                </button>
            </div>
        </section>
        </>
    )
}
export default Hero