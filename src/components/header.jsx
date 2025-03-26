import { useState, useEffect } from "react";

import menu from '../svg/header/menu.svg'

function Header(){

    const [isScrolled, setIsScrolled] =  useState(false)

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
        <header className={`w-full fixed left-0 right-0 top-0 h-[90px] ${isScrolled ? "bg-black" : "bg-transparent"}  z-40 flex items-center justify-between xl:px-[72px] md:px-[40px] px-[30px]`}>
            <h1 className="xl:text-[40px] md:text=[32px] text-[24px] font-extrabold font-karan tracking-wide  text-[#E9C664]">
                The Cut Lab
            </h1>
            <nav className="hidden sm:block">
                <ul className="flex justify-between xl:w-[350px] md:w-[280px] sm:w-[250px] ">
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter xl:text-[18px] lg:text-[16px] text-[14px] font-normal"><a href="">Services</a></li>
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter xl:text-[18px] lg:text-[16px]  text-[14px] font-normal"><a href="">About Us</a></li>
                    
                    <li className="text-[#FFFFFF] hover:opacity-65 font-inter xl:text-[18px] lg:text-[16px]  text-[14px] font-normal"><a href="">Contact Us</a></li>
                </ul>
            </nav>
            <button className="xl:w-[191px] md:w-[170px] w-[150px] hidden sm:block sm:bg-[red] md:bg-[blue] lg:bg-[orange] xl:bg-[green]  cursor-pointer h-[40px] xl:h-[50px] bg-[black] hover:text-[black] hover:bg-slate-700 text-[#FFFFFF] font-inter font-black text-[12px] xl:text-[14px] border-2 border-[#E9C664] rounded-[5px]">
                Book Appointment
            </button>
            <div className="relative sm:hidden group  duration-150  bg-[red] sm:bg-[blue]">
                 <img src={menu} alt="hamburger menu icon" className="h-[34px]  " />
                 <div className="absolute w-[150px]  h-[150px] bg-black -left-[100px] hidden group-hover:flex flex-col items-center  justify-evenly rounded-[6px]">
                    <a href=""className="text-[#FFFFFF] hover:opacity-60 font-inter text-[14px] font-normal">Services</a>
                    <a href=""className="text-[#FFFFFF] hover:opacity-60 font-inter text-[14px] font-normal">About Us</a>
                    <a href=""className="text-[#FFFFFF] hover:opacity-60 font-inter text-[14px] font-normal">Contact Us</a>

                 </div>

            </div>
           

        </header>
        </>
    )

}
export default Header