import { Link } from "react-router-dom";
import Banners from "../../components/banner/Banners";
import DailyBestSellsBanner from '../../assets/images/banner4.jpg';
import CategorySlider from "../../components/CategorySlider/CategorySlider";
import Product from "../../components/product";
import HomeSlider from "./Slider";
import Slider from "react-slick";
import TopProducts from '../homepage/topProducts';

const HomePage = () => {

  var settings = {
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

  return (
    <>
      <HomeSlider />
      <CategorySlider />
      <Banners />

      <section className="py-6">
        <div className="container-fluid ">
          <div className="flex items-center">
            <h2 className="heading my-0">Popular products</h2>
            <ul className="ml-auto flex gap-x-5 filterTab font-medium mb-0">
              <li>
                <Link>All</Link>
              </li>
              <li>
                <Link>Milks & Dairies</Link>
              </li>
              <li>
                <Link>Coffes & Teas</Link>
              </li>
              <li>
                <Link>Pet Foods</Link>
              </li>
              <li>
                <Link>Meats</Link>
              </li>
              <li>
                <Link>Vegetables</Link>
              </li>
              <li>
                <Link>Fruits</Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-5 gap-4 py-8">
            <div>
              <Product tag='hot' />
            </div>
            <div>
              <Product tag='sale' />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product tag='best' />
            </div>
            <div>
              <Product tag='new' />
            </div>
            <div>
              <Product tag='hot' />
            </div>
            <div>
              <Product tag='sale' />
            </div>
            <div>
              <Product tag='new' />
            </div>
            <div>
              <Product tag='best' />
            </div>
            <div>
              <Product tag='new' />
            </div>
          </div>
        </div>
      </section>


      <section className="py-6 pt-0 home-products__row">
        <div className="container-fluid ">
          <div className="flex items-center">
            <h2 className="heading my-0">Daily Best Sells</h2>
            <ul className="ml-auto flex gap-x-5 filterTab font-medium mb-0">
              <li>
                <Link>Featured</Link>
              </li>
              <li>
                <Link>Popular</Link>
              </li>
              <li>
                <Link>New added</Link>
              </li>

            </ul>
          </div>

          <div className="mt-6 grid grid-cols-12">

            <div className="col-span-3">
              <img src={DailyBestSellsBanner} alt="bring nature into your home image" className="rounded-3xl"/>
            </div>

            <div className="col-span-9 product-slider">
              <Slider {...settings}>

              <Product tag='hot' />
              <Product tag='sale' />
              <Product tag='new' />
              <Product tag='best' />

              </Slider>
            </div>
          </div>


        </div>
      </section>


      <section className="top-products__section mb-10 px-9">
            <div className="container-fluid">
              <div className="grid grid-cols-12 gap-x-5">
                <div className="col-span-3 flex-col">
                    <TopProducts title='Top Selling'/>
                </div>
                <div className="col-span-3 flex-col">
                <TopProducts title='Trending Products'/>
                  </div>
                  <div className="col-span-3 flex-col">
                  <TopProducts title='Recently added'/>
                  </div>
                  <div className="col-span-3 flex-col">
                  <TopProducts title='Top Rated'/>
                  </div> 
              </div>
            </div>
      </section>


    </>
  )
}

export default HomePage