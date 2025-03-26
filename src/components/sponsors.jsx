
import image1 from '../img/sponsors/sponsor1.png'
import image2 from '../img/sponsors/sponsor2.png'
import image3 from '../img/sponsors/sponsor3.png'
import image4 from '../img/sponsors/sponsor4.png'

function Sponsors (){
    return(
        <>
        <section>
            <div className="w-full h-[568px] bg-[#212121] flex justify-center">
                <div className="flex justify-between w-[1296px] items-center ">
                        <div className="w-[457px] h-[124px] ">
                            <h1 className="text-[#FFFFFF]  w-[457px] h-[32px] font-fatface text-[45px] tracking-[5%] ">
                                BRANDS WE CARRY
                            </h1>
                            <p className="text-[#FFFFFF] w-[349px] h-[57px] mt-[35px] font-inter text-[18px] ">
                            Vestibulum commodo sapien non elit porttitor, vitae volutpat nibh mollis. Nulla porta risus id neque. 
                            </p>

                        </div>
                        <div className="w-[5px] h-[448px] bg-[#E9C664] rounded-b-[10px] rounded-t-[10px]">

                        </div>

                        <div className="w-[510px] h-[246px]  grid grid-cols-3 gap-[20px]">
                            <img src={image1} alt="" className='w-[150px] h-[108px] rounded-[10px]'/>
                            <img src={image2} alt="" className='w-[150px] h-[108px] rounded-[10px]'/>
                            <img src={image3} alt="" className='w-[150px] h-[108px] rounded-[10px]'/>
                            <img src={image4} alt="" className='w-[150px] h-[108px] rounded-[10px]'/>
                            <img src={image1} alt="" className='w-[150px] h-[108px] rounded-[10px]'/>
                            <img src={image4} alt="" className='w-[150px] h-[108px] rounded-[10px]'/>

                        </div>

                </div>
                
                <div>

                </div>

            </div>
        </section>
        </>
    )
}
export default Sponsors