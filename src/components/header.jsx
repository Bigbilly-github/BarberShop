import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import menu from '../svg/header/menu.svg'

function Header(){
    const [istrue, setIstrue] = useState(false)

    const [isScrolled, setIsScrolled] =  useState(false)


    function ChangeIsTrue () {
        setIstrue(!istrue);
    }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return(
        <>
        <header className={`w-full fixed left-0 right-0 top-0 h-[90px] ${isScrolled ? "bg-black" : "bg-transparent"}  z-40 flex items-center justify-between xl:px-[72px] md:px-[40px] px-[20px]`}>
            <h1  className="xl:text-[40px] md:text=[32px] text-[24px] font-extrabold font-karan tracking-wide  text-[#E9C664]">
               <Link to="/">The Cut Lab</Link> 
            </h1>

            
            
            <nav className="hidden sm:block">
                <ul className="flex justify-between xl:[400px] lg:w-[350px] md:w-[280px] sm:w-[280px] ">
                <li className="text-[#FFFFFF] hover:opacity-65 font-inter xl:text-[18px] lg:text-[16px] text-[14px] font-normal"><Link to="/">Home</Link></li>
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter xl:text-[18px] lg:text-[16px] text-[14px] font-normal"><Link to="/services">Services</Link></li>
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter xl:text-[18px] lg:text-[16px]  text-[14px] font-normal"><Link to="/aboutus">About Us</Link></li>
                    
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter xl:text-[18px] lg:text-[16px]  text-[14px] font-normal"><Link to="/contactus">Contact Us</Link></li>
                </ul>
            </nav>
            <button className="xl:w-[191px] md:w-[170px] w-[150px] hidden sm:block  active:bg-[black] active:text-black  cursor-pointer h-[40px] xl:h-[50px] bg-[black] hover:text-[black] hover:bg-slate-300 text-[#FFFFFF] font-inter font-black text-[12px] xl:text-[14px] border-2 border-[#E9C664] rounded-[5px]">
               <Link to="/contactus">Book Appointment</Link> 
            </button>
            <div onClick={ChangeIsTrue} className="relative sm:hidden   sm:bg-[blue]">
                 <img src={menu} alt="hamburger menu icon" className="h-[34px]  " />
                 <div className={`absolute w-[150px]  h-[150px] bg-black -left-[100px] ${istrue ? null : "hidden"} flex flex-col items-center  justify-evenly rounded-[6px]`}>
                    <Link to="/"className="text-[#FFFFFF] hover:opacity-60 font-inter text-[14px] font-normal">Home</Link>
                    <Link to="/services"className="text-[#FFFFFF] hover:opacity-60 font-inter text-[14px] font-normal">Services</Link>
                    <Link to="/aboutus"className="text-[#FFFFFF] hover:opacity-60 font-inter text-[14px] font-normal">About Us</Link>
                    <Link to="/contactus"className="text-[#FFFFFF] hover:opacity-60 font-inter text-[14px] font-normal">Contact Us</Link>

                 </div>

            </div>
           

        </header>
        </>
    )

}
export default Header