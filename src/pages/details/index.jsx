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
import Product from "../../components/product";

const DetailPage = () => {
    const zoomSliderRef = useRef();
    const zoomSliderBigRef = useRef();
    const [zoomImg, setZoomImg] = useState('https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg');
    const [bigSizeImg, setBigSizeImg] = useState([1500, 1500]);
    const [smallSizeImg, setSmallSizeImg] = useState([150, 150]);
    const [isActiveSize, setIsActiveSize] = useState(0);
    const [cartInputValue, setCartInputValue] = useState(1);
    const [activeTab, setActiveTab] = useState(2);

    var settings2 = {
        dots: false,
        infinite: false,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: false,
        arrows: false,
    };


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
    };

    var settings3 = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: 3000,
        centerMode: true,
      };
    

    const goto = (index) => {
        zoomSliderRef.current.slickGoTo(index);
        zoomSliderBigRef.current.slickGoTo(index);
    }

    const isActive = (index) => setIsActiveSize(index);

    const Decrement = () => {
        if (cartInputValue !== 1) { setCartInputValue(cartInputValue - 1) }
    }

    return (
        <div className="details-page">
            <div className="breadcrump-wrapper">
                <ul className="breadcrump flex gap-x-3 w-full h-auto py-3 px-4 mb-4 mt-0">
                    <li className="inline"><Link className="text-sm">Home</Link></li>
                    <li className="inline"><Link className="text-sm">Vegetables & Tubers</Link></li>
                    <li className="text-sm">Seeds Of Change Organic</li>
                </ul>

                <div className="container-fluid details-container mx-auto">
                            {/* product zoom code start here */}
                            <div className="grid grid-cols-12">
                                <div className="col-span-4">
                                    <div className="h-auto w-full border overflow-hidden rounded-lg">
                                        <Slider {...settings2} className='details-big__slider w-full' ref={zoomSliderBigRef}>
                                            <div className="item">
                                                <InnerImageZoom
                                                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${bigSizeImg})`}
                                                    zoomType='hover' />
                                            </div>
                                            <div className="item">
                                                <InnerImageZoom
                                                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${bigSizeImg})`}
                                                    zoomType='hover' />
                                            </div>
                                            <div className="item">
                                                <InnerImageZoom
                                                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${bigSizeImg})`}
                                                    zoomType='hover' />
                                            </div>
                                            <div className="item">
                                                <InnerImageZoom
                                                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${bigSizeImg})`}
                                                    zoomType='hover' />
                                            </div>
                                            <div className="item">
                                                <InnerImageZoom
                                                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${bigSizeImg})`}
                                                    zoomType='hover' />
                                            </div>
                                            <div className="item">
                                                <InnerImageZoom
                                                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${bigSizeImg})`}
                                                    zoomType='hover' />
                                            </div>
                                            <div className="item">
                                                <InnerImageZoom
                                                    src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${bigSizeImg})`}
                                                    zoomType='hover' />
                                            </div>
                                        </Slider>
                                    </div>
                                    <Slider {...settings} className='details-page__slider w-full' ref={zoomSliderRef}>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-0-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto(0)} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-1-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto(1)} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-2-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto(2)} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-product-images-o490000363-p490000363-3-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto(3)} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-4-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto(4)} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-5-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto(5)} />
                                        </div>
                                        <div className="item">
                                            <img src={`https://www.jiomart.com/images/product/original/490000363/maggi-2-minute-masala-noodles-70-g-legal-images-o490000363-p490000363-6-202305292130.jpg?im=Resize=(${smallSizeImg})`} alt="" onClick={() => goto(6)} />
                                        </div>
                                    </Slider>
                                </div>
                                {/* product zoom code end here */}

                                {/* product info code start here */}
                                <div className="col-span-8 ml-7 product-info">
                                    <h1 className="text-5xl font-medium opacity-80 mb-3">Seeds of Change <br /> Organic Quinoa, Brown</h1>
                                    <div className="flex items-center">
                                        <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                        <span className="text-sm opacity-60">(32 reviews)</span>
                                    </div>
                                    <div className="flex items-center my-5">
                                        <span className='text-custom-green font-medium text-5xl mr-3'>$38</span> <span className='text-xl opacity-50 text-black line-through relative ml-2 font-medium mt-2'>$52</span>
                                        <span className="text-[#FDC040] absolute left-[530px] text-sm top-[450px]">26% Off</span>
                                    </div>
                                    <p className="text-[#7E7E7E] pr-10 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit impedit fugiat voluptate expedita, officiis autem cum dolore eum repellendus ad non, nesciunt, cumque rerum ullam!
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
                                            <input type="number" className="border-custom-green outline-none w-10 text-center" value={cartInputValue} onChange={(e) => setCartInputValue(e.target.value)} />
                                            <span className="absolute -top-1 right-0 cursor-pointer opacity-60" onClick={() => setCartInputValue(cartInputValue + 1)}><KeyboardArrowUpOutlinedIcon /></span>
                                            <span className="absolute -bottom-1 right-0 cursor-pointer opacity-60" onClick={Decrement}><KeyboardArrowDownOutlinedIcon /></span>
                                        </div>

                                        <button className="py-2 px-6 bg-custom-green text-white  rounded-md hover:bg-yellow-hover btn">
                                            <ShoppingCartOutlinedIcon className="mr-1" />
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



                            {/* details page tabs */}
                            <div className="details-page__tabs mt-5 mr-10 p-5 border mx-auto rounded-lg">
                                <div className="custom-tabs">
                                    <ul className="flex items-center gap-x-14">
                                        <li className={`${activeTab == 0 && 'text-custom-green'}`}>
                                            <button className="py-2 px-6 border rounded-3xl" onClick={() => setActiveTab(0)}>Description
                                            </button>
                                        </li>
                                        <li className={`${activeTab == 1 && 'text-custom-green'}`}>
                                            <button className="py-2 px-6 border rounded-3xl" onClick={() => setActiveTab(1)}>Additional info
                                            </button>
                                        </li>
                                        {/* <li><button>Vendor</button></li> */}
                                        <li className={`${activeTab == 2 && 'text-custom-green'}`}>
                                            <button className="py-2 px-6 border rounded-3xl" onClick={() => setActiveTab(2)}>Reviews (3)</button>
                                        </li>
                                    </ul>
                                    <br />

                                    {
                                        activeTab === 0 &&
                                        <div className="tab-content">
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam veniam quas omnis quasi esse quaerat harum. Exercitationem debitis numquam, expedita et, ab explicabo beatae quia architecto ullam pariatur alias? Obcaecati, maxime expedita suscipit nemo officia nisi ipsa aut ea!</p>

                                            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque ex? Est eaque dolor quas incidunt, aspernatur in voluptatibus tenetur? Repellendus, incidunt! Omnis non suscipit fugiat earum mollitia odit a vitae voluptas fuga provident incidunt ea ipsam, rem minima dolorum, dolor deleniti quas ipsa. Quae.</p>


                                            <h2 className="text-xl font-medium my-2 mt-7">Packaging & Delivery</h2>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis aperiam veniam quas omnis quasi esse quaerat harum. Exercitationem debitis numquam, expedita et, ab explicabo beatae quia architecto ullam pariatur alias? Obcaecati, maxime expedita suscipit nemo officia nisi ipsa aut ea!</p>

                                            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, atque ex? Est eaque dolor quas incidunt, aspernatur in voluptatibus tenetur? Repellendus, incidunt! Omnis non suscipit fugiat earum mollitia odit a vitae voluptas fuga provident incidunt ea ipsam, rem minima dolorum, dolor deleniti quas ipsa. Quae.</p>

                                            <h2 className="text-xl font-medium my-3 mt-7">Suggested Use</h2>
                                            <p>Refrigration not neccesary</p>
                                            <p className="mt-2">Stir before serving</p>

                                            <h2 className="text-xl font-medium my-3 mt-7">Other Ingredients</h2>
                                            <p>Lorem ipsum dolor sit amet.</p>
                                            <p className="my-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam, repudiandae.</p>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit neque laboriosam quod consequatur! Dignissimos, porro?</p>

                                            <h2 className="text-xl font-medium my-3 mt-7">Warnings</h2>

                                        </div>
                                    }

                                    {
                                        activeTab === 1 &&
                                        <div className="tab-content">
                                            <div className="table">
                                                <table>
                                                    <tbody>
                                                        <tr>
                                                            <th>Stand Up</th>
                                                            <td>
                                                                <p>35″L x 24″W x 37-45″H(front to back wheel)</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Folded (w/o wheels)</th>
                                                            <td>
                                                                <p>32.5″L x 18.5″W x 16.5″H</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Folded (w/ wheels)</th>
                                                            <td>
                                                                <p>32.5″L x 24″W x 18.5″H</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Door Pass Through</th>
                                                            <td>
                                                                <p>24</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Frame</th>
                                                            <td>
                                                                <p>Aluminum</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Weight (w/o wheels)</th>
                                                            <td>
                                                                <p>20 LBS</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Weight Capacity</th>
                                                            <td>
                                                                <p>60 LBS</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Width</th>
                                                            <td>
                                                                <p>24″</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Handle height (ground to handle)</th>
                                                            <td>
                                                                <p>37-45″</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Wheels</th>
                                                            <td>
                                                                <p>12″ air / wide track slick tread</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Seat back height</th>
                                                            <td>
                                                                <p>21.5″</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Head room (inside canopy)</th>
                                                            <td>
                                                                <p>25″</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Color</th>
                                                            <td>
                                                                <p>Black, Blue, Red, White</p>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <th>Size</th>
                                                            <td>
                                                                <p>M, S</p>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    }

                                    {
                                        activeTab === 2 &&
                                        <div className="tab-content">
                                            <div className="grid grid-cols-12 gap-x-5">


                                                <div className="col-span-8">
                                                    <h2>Customer questions & answers</h2>
                                                    <div className="review-card border p-4 mt-5 rounded-lg flex items-center justify-center overflow-hidden gap-x-3 mb-6">
                                                        <div className="review-user-profile">
                                                            <div className="image">
                                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" alt="" className="w-60 object-cover" />
                                                            </div>
                                                            <span className="text-custom-green mt-1 font-medium text-lg block text-center">Sienna</span>
                                                        </div>
                                                        <div className="review-info">
                                                            <div className="rating-date flex justify-between items-center">
                                                                <span className="opacity-60 text-xs">December 4, 2022 at 3:12 pm</span>
                                                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                                            </div>
                                                            <p className="text-gray-600 w-full pr-0 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure nemo, voluptate repellat ipsa in. Id commodi accusantium totam impedit dolores aspernatur vero, hic magni?</p>
                                                        </div>
                                                    </div>
                                                    <div className="review-card border p-4 mt-5 rounded-lg flex items-center justify-center overflow-hidden gap-x-3 mb-6">
                                                        <div className="review-user-profile">
                                                            <div className="image">
                                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" alt="" className="w-60 object-cover" />
                                                            </div>
                                                            <span className="text-custom-green mt-1 font-medium text-lg block text-center">Sienna</span>
                                                        </div>
                                                        <div className="review-info">
                                                            <div className="rating-date flex justify-between items-center">
                                                                <span className="opacity-60 text-xs">December 4, 2022 at 3:12 pm</span>
                                                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                                            </div>
                                                            <p className="text-gray-600 w-full pr-0 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure nemo, voluptate repellat ipsa in. Id commodi accusantium totam impedit dolores aspernatur vero, hic magni?</p>
                                                        </div>
                                                    </div>
                                                    <div className="review-card border p-4 mt-5 rounded-lg flex items-center justify-center overflow-hidden gap-x-3 mb-6">
                                                        <div className="review-user-profile">
                                                            <div className="image">
                                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" alt="" className="w-60 object-cover" />
                                                            </div>
                                                            <span className="text-custom-green mt-1 font-medium text-lg block text-center">Sienna</span>
                                                        </div>
                                                        <div className="review-info">
                                                            <div className="rating-date flex justify-between items-center">
                                                                <span className="opacity-60 text-xs">December 4, 2022 at 3:12 pm</span>
                                                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                                            </div>
                                                            <p className="text-gray-600 w-full pr-0 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure nemo, voluptate repellat ipsa in. Id commodi accusantium totam impedit dolores aspernatur vero, hic magni?</p>
                                                        </div>
                                                    </div>
                                                    <div className="review-card border p-4 mt-5 rounded-lg flex items-center justify-center overflow-hidden gap-x-3 mb-6">
                                                        <div className="review-user-profile">
                                                            <div className="image">
                                                                <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" alt="" className="w-60 object-cover" />
                                                            </div>
                                                            <span className="text-custom-green mt-1 font-medium text-lg block text-center">Sienna</span>
                                                        </div>
                                                        <div className="review-info">
                                                            <div className="rating-date flex justify-between items-center">
                                                                <span className="opacity-60 text-xs">December 4, 2022 at 3:12 pm</span>
                                                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                                                            </div>
                                                            <p className="text-gray-600 w-full pr-0 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae iure nemo, voluptate repellat ipsa in. Id commodi accusantium totam impedit dolores aspernatur vero, hic magni?</p>
                                                        </div>
                                                    </div>

                                                    <br />

                                                    {/* Review Form */}
                                                    <form action="#">
                                                        <h4>Add a review</h4>
                                                        <div className="form-group mt-4">
                                                            <textarea name="" id="" cols="69" rows="5" className="outline-none border p-2 w-full" placeholder="Write Comment">
                                                            </textarea>
                                                        </div>

                                                        <div className="grid grid-cols-12 gap-x-5 my-5">
                                                            <div className="col-span-6">
                                                                <input type="text" placeholder="Name" className="outline-none border p-2 w-full" />
                                                            </div>
                                                            <div className="col-span-6">
                                                                <input type="Email" placeholder="Email" className="outline-none border p-2 w-full" />
                                                            </div>
                                                        </div>

                                                        <input type="text" placeholder="Website" className="outline-none border p-2 w-full mt-2" />

                                                        <button type="submit" className="bg-custom-green text-white py-2 px-6 rounded-md mt-5 btn hover:bg-yellow-hover">Submit Review</button>

                                                    </form>

                                                </div>

                                                <div className="col-span-4">
                                                    <h4>Customer reviews</h4>
                                                    <div className="flex items-center mt-2">
                                                        <Rating name="half-rating-read" defaultValue={4.8} precision={0.5} readOnly />
                                                        <strong>4.8 out of 5</strong>
                                                    </div>
                                                    <br />

                                                    <div className="flex items-center mb-2">
                                                        <span className="mr-3">5 star</span>
                                                        <div class="progress" style={{ width: "75%", height: '15px' }}>
                                                            <div class="progress-bar bg-success text-xs" style={{ width: "75%", height: '15px' }}>70%</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center mb-2">
                                                        <span className="mr-3">4 star</span>
                                                        <div class="progress" style={{ width: "75%", height: '15px' }}>
                                                            <div class="progress-bar bg-success text-xs" style={{ width: "50%", height: '15px' }}>50%</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center mb-2">
                                                        <span className="mr-3">3 star</span>
                                                        <div class="progress" style={{ width: "75%", height: '15px' }}>
                                                            <div class="progress-bar bg-success text-xs" style={{ width: "55%", height: '15px' }}>55%</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center mb-2">
                                                        <span className="mr-3">2 star</span>
                                                        <div class="progress" style={{ width: "75%", height: '15px' }}>
                                                            <div class="progress-bar bg-success text-xs" style={{ width: "35%", height: '15px' }}>35%</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center mb-2">
                                                        <span className="mr-3">1 star</span>
                                                        <div class="progress" style={{ width: "75%", height: '15px' }}>
                                                            <div class="progress-bar bg-success text-xs" style={{ width: "25%", height: '15px' }}>25%</div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>


                            {/* Related Product Project */}
                            <div className="relatedProjects mt-20 pb-10">
                                <h2 className="heading">Related Products</h2>
                                <Slider {...settings3}>
                                    <div className="item"><Product tag='hot' /></div>
                                    <div className="item"><Product tag='sale' /></div>
                                    <div className="item"><Product tag='new' /></div>
                                    <div className="item"><Product tag='best' /></div>
                                    <div className="item"><Product tag='hot' /></div>
                                    <div className="item"><Product tag='sale' /></div>
                                    <div className="item"><Product tag='new' /></div>
                                    <div className="item"><Product tag='best' /></div>
                                </Slider>
                            </div>

                </div>


            </div>
        </div>
    )
}

export default DetailPage