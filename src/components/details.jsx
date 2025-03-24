
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
            <section className="w-[1440px] h-[326px]  flex justify-center items-center bg-[#212121]">
                <div className='flex gap-[180px]'>
                    {details.map ((detail,index)=> <div key={index} className='w-[180px] h-[206px] flex flex-col items-center'>
                        <img src={detail.image} alt={`image of a ${detail.alttext}`}  className="h-[60px]"/>
                        <p className='font-fatface text-[70px] text-[#E9C664]'>
                           {detail.detailnumber}
                        </p>
                        <p className="font-fatface text-[22px] text-[#FFFFFF]">
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