import { useState } from "react"



function ContactHero (){

    const [appointment, setAppointment] = useState(
        {name:"",
        email:"",
        subject:"",
        message:""

        });
    
    function ChangeName (e){
        const name = e.target.value;
        if (name.trim() !== ""){
            setAppointment(a => ({...a, name:name}))


        }
       
    }

    function ChangeEmail (e){
        const email = e.target.value;
        if (email.trim() !== ""){
            setAppointment(a => ({...a, email:email}))


        }
       
    }

    function ChangeSubject (e){
        const subject = e.target.value;
        if (subject.trim() !== ""){
            setAppointment(a => ({...a, subject:subject}))


        }
       
    }

    function ChangeMessage (e){
        const message = e.target.value;
        if (message.trim() !== ""){
            setAppointment(a => ({...a, message:message}))


        }
       
    }

    function OnSubmission (){
        const name = appointment.name;
        alert(`Congrats ${name}, your appointment has been booked. See you soon.`);
        setAppointment(a => ({...a, name:"", email:"", subject:"", message:"" }))
    }

    console.log(appointment);
    

  

    return(
        <>
        <section className="w-full xl:h-[1000px] sm:h-[800px] h-[700px] pt-[150px] flex flex-col items-center ">
            <div className="w-[459px] h-[49px] xl:mb-[150px] lg:mb-[100px] mb-[40px]">
                <p className="font-fatface xl:text-[70px] lg:text-[50px] md:text-[40px] text-[30px] text-center text-[#FFFFFF] ">
                    CONTACT US
                </p>

            </div>
            <div className="bg-[black] w-full h-[703px] flex items-center xl:justify-items-start  justify-center gap-[100px]">
                <div className="w-[636px] h-[523px] xl:flex flex-col hidden  items-center">
                    <h1 className="font-fatface mb-0 w-[410px] h-[81px] text-[60px] text-[#FFFFFF] tracking-[5%] ">
                    Come Visit Us
                    </h1>
                    <h3 className="w-[69px] mb-0 h-[32px] text-center mt-[22px] text-[#FFFFFF] font-fatface text-[24px] ">
                        Office
                    </h3>
                    <p className="font-inter text-center mb-[10px]  mt-[18px] text-[20px] text-[#FFFFFF] w-[329px] h-[48px]">
                        304 North Cardinal St. Dorchester 
                        Center, MA 02124
                    </p>
                    <h3 className="w-[69px] mb-0 h-[32px] text-center mt-[22px] text-[#FFFFFF] font-fatface text-[24px] ">
                       Contact
                    </h3>
                    <p className="font-inter  text-center mt-[18px] mb-[10px] text-[20px] text-[#FFFFFF] w-[329px] h-[48px]">
                    info@company.com
                    contact@company.com
                    </p>

                    <h3 className="w-[184px] mb-0 h-[32px] text-center mt-[22px] text-[#FFFFFF] font-fatface text-[24px] ">
                         Working Hours
                    </h3>
                    <p className="font-inter  text-center mt-[18px] mb-[10px] text-[20px] text-[#FFFFFF] w-[329px] h-[48px]">
                        Monday-Saturday 9am - 6pm
                        Sunday 10am - 17pm
                    </p>


                </div>
                <div className="xl:w-[636px] sm:w-[600px] w-[450px] h-[523px] flex flex-col items-center justify-center bg-[#212121] rounded-[10px]">
                    <form  className="flex flex-col gap-[28px] items-center">
                        <div className="flex gap-[20px] ">
                                <div className="flex flex-col gap-[8px]">
                                    <label htmlFor="name" className="text-[#FFFFFF] font-inter text-[16px] ">Your Name</label>
                                    <input type="text" id="name" value={appointment.name} onChange={ChangeName} name="name" placeholder="Enter your name"  className="bg-slate-200 sm:w-[215px] xl:w-[266px] w-[170px]  py-[7px] pl-[8px] rounded-[3px] "  required/>

                                </div>
                                <div className="flex flex-col gap-[8px]">
                                    <label htmlFor="email" className="text-[#FFFFFF] font-inter text-[16px]">Your Email</label>
                                    <input type="text" id="email" name="email"  value={appointment.email} onChange={ChangeEmail} placeholder="Enter your email"   className="bg-slate-200 sm:w-[215px] xl:w-[266px] w-[170px]  py-[7px] pl-[8px]  rounded-[3px] " required />

                                 </div>

                        </div>
                        <div className="flex flex-col gap-[8px]">
                                    <label htmlFor="subject" className="text-[#FFFFFF]  font-inter text-[16px]">Subject</label>
                                    <input type="text" id="subject" name="subject" value={appointment.subject} onChange={ChangeSubject} placeholder="Enter subject here"   className="bg-slate-200 xl:w-[556px] sm:w-[450px] w-[360px]  rounded-[3px] pl-[8px]  py-[7px] "  required/>

                        </div>
                        <div className="flex flex-col gap-[8px]">
                                    <label htmlFor="message" className="text-[#FFFFFF]  font-inter text-[16px]">Your Message</label>
                                    <textarea type="text" id="message" name="message"  value={appointment.message} onChange={ChangeMessage}  placeholder="Type here ..."  className="bg-slate-200 sm:w-[450px] xl:w-[556px] rounded-[3px] h-[134px] w-[360px]  py-[7px] pl-[8px] "  required/>

                        </div>
                        <button type="btn"  onClick={OnSubmission} className="xl:w-[556px] active:bg-[black] active:text-black   sm:w-[450px] w-[360px] h-[51px] bg-[#E9C664]  hover:text-[#E9C664] hover:bg-black font-inter font-semibold rounded-[6px]">BOOK APPOINTMENT</button>

                   

                    </form>
                   
                   

                </div>

            </div>

        </section>
        </>
    )

}
export default ContactHero