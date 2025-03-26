


function Hero (){
    return(
        <>
        <section  className="bg-[url('./src/svg/hero/bg.svg')]  animate-fadeIn  animate-pulse transform -translate-y-0 bg-cover  pt-[170px] bg-center pl-[72px] w-full h-[90vh]  ">
            <div className=" w-[542px] h-[442px]">
                <h1 className="w-[494px] h-[50px] font-karan font-extrabold tracking-widest mb-0 text-[48px] text-[#E9C664]">
                THE BARBERSHOP
                </h1>
                <h3 className="font-karan w-[491px] h-[49px] text-[28px] text-[#977656] mt-[24px]">
                EXPERT HAIRCUTS AND GROOMING SERVICES
                </h3>
                <p className="w-[542px] h-[160px] opacity-[64%] font-inter text-[16px] text-[#F2DAC2]">
                At The Finest Barbershop, we offer a wide range of professional hair cutting and grooming services for men. Our experienced barbers use the latest techniques and tools to give you the perfect look. Whether you're in need of a classic haircut, straight razor shave, or beard trim, we've got you covered.
                </p>

                <button className="w-[191px] cursor-pointer  h-[50px] bg-[black] hover:text-[black] hover:bg-slate-700 text-[#FFFFFF] font-inter font-black text-[14px] border-2 border-[#E9C664] rounded-[5px]">
                    Book Appointment
                </button>
            </div>
        </section>
        </>
    )
}
export default Hero