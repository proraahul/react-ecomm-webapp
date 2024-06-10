import { Link } from "react-router-dom";
import Banners from "../../components/banner/Banners";
import DailyBestSellsBanner from '../../assets/images/banner4.jpg';
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import Product from "../../components/product";
import HomeSlider from "./Slider";
import Slider from "react-slick";
import TopProducts from '../homepage/topProducts';
import { useEffect, useState } from "react";

const HomePage = ({ data }) => {
  const [productData, setProductData] = useState(data);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [activeTab, setActiveTab] = useState();
  const [activeTabData, setActiveTabData] = useState([]);
  const [bestSells, setBestSells] = useState([]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    fade: false,
    arrows: true,
    autoplay: 3000,
    centerMode: true,
  };



  useEffect(() => {
    const catArr = [];
    productData?.length !== 0 && productData?.map((item, index) => {
      item?.items?.map((_item, _index) => {
        catArr.push(_item.cat_name)
      })
    })
    const list = catArr.filter((item, index) => catArr.indexOf(item) === index);
    setCategoryFilter(list);
    setActiveTab(list[0]);
  }, []);

  useEffect(() => {
    var arr = []
    setActiveTabData(arr)
    productData?.length !== 0 && productData?.map((item, index) => {
      item?.items?.map((_item, _index) => {
        if (_item.cat_name === activeTab) {
          setActiveTabData(_item.products)
        }
      })
    })
  }, [activeTab, activeTabData])





  const bestSellsArr = [];

  useEffect(() => {

    productData.length !== 0 &&
      productData.map((item) => {
        if (item.cat_name === 'Electronics') {
          // console.log(item);
          item.items.length !== 0 &&
            item.items.map((_item) => {
              // console.log(_item);
              _item.products.length !== 0 &&
                _item.products.map((product, index) => {
                  // console.log(product);
                  bestSellsArr.push(product)
                })
            })
        }
      });

    setBestSells(bestSellsArr);
    // console.log(bestSells);

  }, []);



  return (
    <>
      <HomeSlider />
      <CategorySlider data={productData} />
      <Banners />

      <section className="py-6 home-products__wrapper">
        <div className="container-fluid ">
          <div className="grid grid-cols-12">
            <h2 className="heading my-0 col-span-4">Popular products</h2>
            <ul className="flex gap-x-2 filterTab text-[10px] font-medium col-span-8">
              {
                categoryFilter.length !== 0 && categoryFilter.map((item, index) => {
                  return (
                    <li className="hover:text-custom-green" key={index}>
                      <Link onClick={() => {
                        setActiveTab(item);
                        setActiveTabIndex(index);
                      }}
                        className={`capitalize hover:no-underline ${activeTabIndex === index && 'text-custom-green'}`}>
                        {item}
                      </Link>
                    </li>
                  )
                })
              }
            </ul>
          </div>

          <div className="grid grid-cols-5 gap-4 py-8 product_row">
            {
              activeTabData.length !== 0 && activeTabData.map((item, index) => {
                return (
                  <div className="item" key={index}>
                    <Product tag={item.type} item={item}/>
                  </div>
                )
              })

            }
          </div>
        </div>
      </section>


      <section className="py-6 pt-0 home-products__row">
        <div className="container-fluid ">
          <div className="flex items-center">
            <h2 className="heading my-0">Daily Best Sells</h2>
          </div>

          <div className="mt-6 grid grid-cols-12">

            <div className="col-span-3">
              <img src={DailyBestSellsBanner} alt="bring nature into your home image" className="rounded-3xl w-full" />
            </div>

            <div className="col-span-9 product-slider">
              <Slider {...settings}>

                {
                  bestSells.length !== 0 &&
                  bestSells.map((curItem, index) => {
                    return (
                      <div className="item" key={index}>
                        <Product tag={curItem.type} item={curItem} />
                      </div>
                    )
                  })
                }
              </Slider>


            </div>
          </div>


        </div>
      </section>


      <section className="top-products__section mb-10 px-9">
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-x-5">
            <div className="col-span-3 flex-col">
              <TopProducts title='Top Selling' />
            </div>
            <div className="col-span-3 flex-col">
              <TopProducts title='Trending Products' />
            </div>
            <div className="col-span-3 flex-col">
              <TopProducts title='Recently added' />
            </div>
            <div className="col-span-3 flex-col">
              <TopProducts title='Top Rated' />
            </div>
          </div>
        </div>
      </section>


    </>
  )
}

export default HomePage