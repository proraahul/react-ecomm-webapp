import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/slider-1.png';
import Slider2 from '../../assets/images/slider-2.png';
import './slider.css'

const HomeSlider = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
      };

  return (
    <section className="py-6 container-fluid z-10">
        <div className="relative">
        <Slider {...settings} className='rounded-3xl overflow-hidden'>
            <div className="relative">
                <img src={Slider1} alt="slider img" className='rounded-3xl w-full'/>
                <div className="absolute top-[15%] left-[7%] z-50">
                    <h2 className="text-6xl font-medium text-faded-black mb-5">
                        Don't miss amazing <br /> 
                         grocery deals
                    </h2>
                    <p className="text-xl text-light-black font-medium">Sign up for daily newsletter</p>
                </div>
            </div>
            <div className="relative">
                <img src={Slider2} alt="slider img" className='rounded-3xl w-full'/>
                <div className="absolute top-[15%] left-[7%] z-50">
                    <h2 className="text-6xl font-medium text-faded-black mb-5">
                        Fresh Vegetables <br /> 
                         Big discount
                    </h2>
                    <p className="text-xl text-light-black font-medium">Sign up for daily newsletter</p>
                </div>
            </div>
        
        </Slider>

        <div className="w-110 h-12 absolute bottom-28 left-[7%] bg-white rounded-3xl flex items-center ">
        <i className="fa fa-paper-plane-o ml-5 opacity-50" aria-hidden="true"></i>
            <input type="text" placeholder="Your email address" className="w-full h-full rounded-3xl  border-none outline-none pl-6 pr-6 text-sm"/>
            <button className="bg-custom-green text-white py-3 px-5 rounded-3xl font-medium">Subscribe</button>
        </div>

        </div>
    </section>
  )
}

export default HomeSlider