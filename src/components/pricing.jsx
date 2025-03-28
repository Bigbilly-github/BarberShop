


function Pricing (){

    const pricingDetails = [
        {
            priceitem:"Haircut",
            price:"$20",
            pricetext:"Our skilled barbers use precision techniques to deliver a sharp, clean look that enhances your appearance."
        },
        {
            priceitem:"Trimming",
            price:"$15",
            pricetext:"Maintain a well-groomed look with our expert trimming service. Whether it's shaping your beard, mustache, or hairline, we ensure a  neat finish."


        },
        {
            priceitem:"Shavings",
            price:"$13",
            pricetext:"Experience a smooth and refreshing shave with our professional razor techniques. We provide a close shave with skin-friendly products to leave your skin feeling fresh."
        },
        {
            priceitem:"Facial",
            price:"$20",
            pricetext:"Rejuvenate your skin with our premium facial treatments. Designed to cleanse, hydrate, and refresh your face, our facials leave you looking and feeling your best."
        }
    ]

    return(
        <>
        <section className="w-full lg:h-[350px] h-[700px] bg-[#212121] mt-[50px] flex justify-center items-center ">
            <div className="lg:w-[1296px]  lg:h-[208px] h-[500px] bg-[#212121] grid lg:grid-cols-2 grid-cols-1 gap-[50px]   lg:gap-[40px] lg:px-[10%]    "> 
               { pricingDetails.map ((details, index)=> <div  key={index} className="flex flex-col gap-[15px]">
                    <div className="flex justify-between items-center h-[30px] w-[410px]">
                        <p className="sm:w-[94px]  w-[100px] text-[#FFFFFF] font-fatface text-[20px]  sm:text-[24px]">
                        {details.priceitem}
                        </p>
                        <div className="sm:w-[219px] w-[220px] h-[2px] bg-[#E9C664] rounded-b-[10px] rounded-t-[10px]">

                        </div>
                        <p className="font-fatface text-[20px]  sm:text-[24px] text-[#FFFFFF] tracking-[5%] w-[46px] ">
                           {details.price}
                        </p>
                    </div>
                    <p className="font-inter sm:text-[14px] text-[13px] w-[419px] h-[27px] text-[#FFFFFF]">
                    {details.pricetext}
                    </p>
                </div>
)}

             
            </div>

        </section>
        </>
    )

}
export default Pricing