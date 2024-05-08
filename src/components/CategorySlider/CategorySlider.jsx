import { useState } from "react";
import Slider from "react-slick";
import './categorySlider.css';

const CategorySlider = () => {

    const [itemBg, setItemBg] = useState([
        '#fffceb',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec',
        '#feefea',
        '#fff3eb',
        '#fff3ff',
        '#f2fce4',
        '#feefea',
        '#fffceb',
        '#feefea',
        '#ecffec'
    ]);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };


    return (
        <div className="cartslidersection">
            <div className="container-fluid">
                <h2 className="heading">Featured Categories</h2>
                <Slider {...settings} className='cat-slider__main'>

                {
                    itemBg.length > 0 && itemBg.map((item, index) => {
                            return(
                                <div 
                                className="item h-auto cursor-pointer py-3 px-0 ml-2" 
                                key={index}
                                >
                                <div className="info text-center p-4" style={{background: item}} >
                                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                                    <h5 className="font-medium">Burger</h5>
                                    <p className="text-sm opacity-80 mb-0">26 items</p>
                                </div>
                            </div>
                            )
                    })
                }

                </Slider>
            </div>

        </div>
    )
}

export default CategorySlider