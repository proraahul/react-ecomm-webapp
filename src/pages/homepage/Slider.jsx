import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/slider-1.png';
import Slider2 from '../../assets/images/slider-2.png';
import './slider.css'
import NewsLetter from "../../components/newsletter";

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
    <section className="py-6 container-fluid z-0">
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

        <NewsLetter />

        </div>
    </section>
  )
}

export default HomeSlider