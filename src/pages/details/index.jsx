import { Link } from "react-router-dom";
import InnerImageZoom from 'react-inner-image-zoom';
import Rating from '@mui/material/Rating';
import Sidebar from "../../components/sidebar";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef, useState } from "react";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const DetailPage = () => {
    const zoomSliderRef = useRef();
    const [zoomImg, setZoomImg] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg');
    const [bigSizeImg, setBigSizeImg] = useState([1500, 1500]);
    const [smallSizeImg, setSmallSizeImg] = useState([150, 150]);
    const [isActiveSize, setIsActiveSize] = useState(0);
    const [cartInputValue, setCartInputValue] = useState(1);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    const goto = (url) => setZoomImg(url);

    const isActive = (index) => setIsActiveSize(index);

    const Decrement = () => {
        if(cartInputValue !== 1){setCartInputValue(cartInputValue-1)}
    }

    return (
        <div className="details-page">
            <div className="breadcrump-wrapper">
                <ul className="breadcrump flex gap-x-3 w-full h-auto py-3 px-4 mb-4 mt-0">
                    <li className="inline"><Link className="text-sm">Home</Link></li>
                    <li className="inline"><Link className="text-sm">Vegetables & Tubers</Link></li>
                    <li className="text-sm">Seeds Of Change Organic</li>
                </ul>
                <div className="container-fluid details-container">
                    <div className="grid grid-cols-12">
                        <div className="col-span-9">
                            {/* product zoom code start here */}
                            <div className="grid grid-cols-12">
                                <div className="col-span-4">
                                    <div className="h-auto w-full border overflow-hidden rounded-lg">
                                        <InnerImageZoom
                                            src={`${zoomImg}?im=Resize=(${bigSizeImg})`}
                                            zoomType='hover' /> {/* zoomScale={2} */}
                                    </div>
                                    <Slider {...settings} className='details-page__slider w-full' ref={zoomSliderRef}>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg')} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg')} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg')} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg')} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg')} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg')} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg')} />
                                        </div>
                                    </Slider>
                                </div>
                                {/* product zoom code end here */}

                                {/* product info code start here */}
                                <div className="col-span-8 ml-5 product-info">
                                    <h1 className="text-4xl font-medium opacity-80 mb-3">Seeds of Change <br /> Organic Quinoa, Brown</h1>
                                    <div className="flex items-center">
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                        <span className="text-sm opacity-60">(32 reviews)</span>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <span className='text-custom-green font-medium text-4xl mr-3'>$38</span> <span className='text-xl opacity-50 text-black line-through relative ml-2 font-medium mt-2'>$52</span>
                                        <span className="text-[#FDC040] absolute left-[500px] text-xs top-[435px]">26% Off</span>
                                    </div>
                                    <p className="text-[#7E7E7E] pr-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit impedit fugiat voluptate expedita, officiis autem cum dolore eum repellendus ad non, nesciunt, cumque rerum ullam!
                                    </p>

                                    {/* size and weight */}
                                    <div className="w-full h-auto flex items-center gap-x-2 opacity-80 my-5 product-size">
                                        <span>Size / Weight:</span>
                                        <ul className="flex mb-0 gap-x-1">
                                            <li>
                                                <a href="#" className={`hover:bg-custom-green hover:text-white py-1 px-3 rounded-lg border ${isActiveSize === 0 ? 'active' : ''}`} onClick={() => isActive(0)}>50g</a>
                                            </li>
                                            <li >
                                                <a href="#" className={`hover:bg-custom-green hover:text-white py-1 px-3 rounded-lg border ${isActiveSize === 1 ? 'active' : ''}`} onClick={() => isActive(1)}>60g</a>
                                            </li>
                                            <li>
                                                <a href="#" className={`hover:bg-custom-green hover:text-white py-1 px-3 rounded-lg border ${isActiveSize === 2 ? 'active' : ''}`} onClick={() => isActive(2)}>80g</a>
                                            </li>
                                            <li>
                                                <a href="#" className={`hover:bg-custom-green hover:text-white py-1 px-3 rounded-lg border ${isActiveSize === 3 ? 'active' : ''}`} onClick={() => isActive(3)}>100g</a>
                                            </li>
                                            <li>
                                                <a href="#" className={`hover:bg-custom-green hover:text-white py-1 px-3 rounded-lg border ${isActiveSize === 4 ? 'active' : ''}`} onClick={() => isActive(4)}>150g</a>
                                            </li>
                                        </ul>
                                    </div>

                                    {/* product counter */}
                                    <div className="add-to-cart py-4 flex items-center gap-x-2 w-full h-auto">
                                        <div className="counter-sec relative w-20 h-10 p-2 border text-center">
                                            <input type="number" className="border-custom-green outline-none w-10 text-center" value={cartInputValue} onChange={(e) => setCartInputValue(e.target.value)}/>
                                            <span className="absolute -top-1 right-0 cursor-pointer opacity-60" onClick={() => setCartInputValue(cartInputValue+1)}><KeyboardArrowUpOutlinedIcon /></span>
                                            <span className="absolute -bottom-1 right-0 cursor-pointer opacity-60" onClick={Decrement}><KeyboardArrowDownOutlinedIcon /></span>
                                        </div>

                                        <button className="py-2 px-6 bg-custom-green text-white  rounded-md hover:bg-yellow-hover btn">
                                            <ShoppingCartOutlinedIcon className="mr-1"/>
                                            Add to Cart</button>
                                            
                                        <div className="border p-2 hover:bg-custom-green hover:text-white rounded btn opacity-50 hover:opacity-100 move">
                                            <FavoriteBorderOutlinedIcon />
                                        </div>
                                        <div className="border p-2 rounded hover:bg-custom-green hover:text-white btn opacity-50 hover:opacity-100 move">
                                            <CompareArrowsOutlinedIcon />
                                        </div>
                                    </div>

                                </div>
                                {/* product info code end here */}
                            </div>
                        </div>
                        <div className="col-span-3 mb-5">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailPage