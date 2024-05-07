import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider1 from '../../assets/images/slider-1.png'
import Slider2 from '../../assets/images/slider-2.png'

const HomeSlider = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: true,
      };

  return (
    <section className="homeSlider py-6">
        <div className="container-fluide">
        <Slider {...settings} className='rounded-3xl overflow-hidden relative'>
            <div>
                <img src={Slider1} alt="slider img" className='rounded-3xl'/>
            </div>
            <div>
                <img src={Slider2} alt="slider img" className='rounded-3xl'/>
            </div>
        </Slider>
        </div>
    </section>
  )
}

export default HomeSlider