


function Header(){

    return(
        <>
        <header className="w-full fixed left-0 right-0 top-0 h-[90px] bg-transparent flex items-center justify-between px-[72px] ">
            <h1 className="text-[40px] font-extrabold font-karan tracking-wide  text-[#E9C664]">
                The Cut Lab
            </h1>
            <nav>
                <ul className="flex justify-between w-[350px] ">
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter text-[18px] font-normal"><a href="">Services</a></li>
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter text-[18px] font-normal"><a href="">About Us</a></li>
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter text-[18px] font-normal"><a href="">Blog</a></li>
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter text-[18px] font-normal"><a href="">Contact Us</a></li>
                </ul>
            </nav>
            <button className="w-[191px]  cursor-pointer h-[50px] bg-[black] hover:text-[black] hover:bg-slate-700 text-[#FFFFFF] font-inter font-black text-[14px] border-2 border-[#E9C664] rounded-[5px]">
                Book Appointment
            </button>

        </header>
        </>
    )

}
export default Header