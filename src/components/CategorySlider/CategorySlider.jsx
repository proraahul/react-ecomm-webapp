import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import './categorySlider.css';

const CategorySlider = ({ data }) => {
    const [allData, setAllData] = useState(data);
    const [totalLength, setTotalLength] = useState([]);

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
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        fade: false,
        arrows: true,
        autoplay: 2000,
        centerMode: true,
    };

    var catLength = 0;
    var lengthArr = [];
    useEffect(() => {
        allData?.length !== 0 &&
            allData.map((item) => {
                item?.items?.length !== 0 &&
                    item?.items?.map((_item) => {
                        catLength += _item.products.length
                    })
                lengthArr.push(catLength)
                // console.log(catLength);
                catLength = 0;
            });

        const list = lengthArr?.filter((item, index) => lengthArr.indexOf(item) === index);
        setTotalLength(list);

        // console.log(lengthArr)
    }, []);


    return (
        <div className="cart-slider__section">
            <div className="container-fluid">
                <h2 className="heading">Featured Categories</h2>
                <Slider {...settings} className='cat-slider__main'>

                    {
                        allData !== undefined &&
                        allData.map((curItem, index) => {
                            return (
                                <div
                                    className="item h-auto cursor-pointer py-3 px-0 ml-2"
                                    key={index}
                                >
                                    <Link to={`/cat/${curItem.cat_name}`} className='hover:no-underline hover:text-inherit'>
                                    <div className="info text-center p-2" style={{backgroundColor: itemBg[index]}}>
                                        <img src={curItem.image} alt="" className="p-3"/>
                                        <h5 className="font-medium capitalize">{curItem.cat_name}</h5>
                                        <p className="text-sm opacity-80 mb-0 p-2 px-auto">
                                            {totalLength[index]} Items
                                        </p>
                                    </div>
                                    </Link>
                                </div>
                            )
                        })
                    }



                    {
                        // itemBg.length > 0 && itemBg.map((item, index) => {
                        //         return(
                        //             <div 
                        //             className="item h-auto cursor-pointer py-3 px-0 ml-2" 
                        //             key={index}
                        //             >
                        //             <div className="info text-center p-4" style={{background: item}} >
                        //                 <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/cat-13.png" alt="" />
                        //                 <h5 className="font-medium">Burger</h5>
                        //                 <p className="text-sm opacity-80 mb-0">26 items</p>
                        //             </div>
                        //         </div>
                        //         )
                        // })


                    }

                </Slider>
            </div>

        </div>
    )
}

export default CategorySlider