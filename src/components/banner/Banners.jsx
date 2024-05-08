import Banner1 from '../../assets/images/banner1.jpg'
import Banner2 from '../../assets/images/banner2.jpg'
import Banner3 from '../../assets/images/banner3.jpg'

const Banners = () => {
  return (
        <div className="banner-section py-6">
                <div className="container-fluid">
                   <div className="grid grid-cols-12 gap-x-3 banner">
                    <div className="box overflow-hidden rounded-xl col-span-4 ">
                    <img src={Banner1} alt="" className='w-full transition-banner rounded-xl'/>
                    </div>
                    <div className="box overflow-hidden rounded-xl col-span-4 ">
                    <img src={Banner2} alt="" className='w-full transition-banner rounded-xl'/>
                    </div>
                    <div className="box overflow-hidden rounded-xl col-span-4 ">
                    <img src={Banner3} alt="" className='w-full transition-banner rounded-xl'/>
                    </div>
                   </div>
                </div>
        </div>
  )
}

export default Banners