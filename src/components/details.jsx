
import image1 from '../svg/details/icon razor.svg'
import image2 from '../svg/details/icon scissors.svg'
import image3 from '../svg/details/icon barbershop.svg'

function Details (){

    const details = [
        {
            image:image1,
            detailnumber: "2500",
            detailtext:"SHAVES",
            alttext:"razor"

        },
        {
            image:image2,
            detailnumber: "4500",
            detailtext:"HAIRCUTS",
            alttext:"scissors"

        },
        {
            image:image3,
            detailnumber: "23",
            detailtext:"OPEN SHOPS",
            alttext:"barbershop"

        }
    ]
    return(
        <>
            <section className="w-full xl:h-[326px] h-[326px] flex justify-center items-center bg-[#212121]">
                <div className='flex xl:gap-[180px] md:gap-[100px] gap-[40px] '>
                    {details.map ((detail,index)=> <div key={index} className='xl:w-[180px] md:w-[180px] w-[120px]  h-[206px] gap-[10px] flex flex-col items-center'>
                        <img src={detail.image} alt={`image of a ${detail.alttext}`}  className="h-[60px]"/>
                        <p className='font-fatface  xl:text-[70px] md:text-[50px] lg:text-[60px] text-[20px] text-[#E9C664]'>
                           {detail.detailnumber}
                        </p>
                        <p className="font-fatface xl:text-[22px] md:text-[22px]  text-[18px] text-[#FFFFFF]">
                            {detail.detailtext}
                        </p>
                    </div>
                )}

                </div>

            </section>
        </>
    )
}
export default Details