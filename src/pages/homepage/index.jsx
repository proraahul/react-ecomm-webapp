import { Link } from "react-router-dom"
import Banners from "../../components/banner/Banners"
import CategorySlider from "../../components/CategorySlider/CategorySlider"
import Product from "../../components/product"
import HomeSlider from "./Slider"

const HomePage = () => {
  return (
    <div className="">
      <HomeSlider />
      <CategorySlider />
      <Banners />

      <section className="mb-96 py-6">
        <div className="container-fluid ">
          <div className="flex items-center">
            <h2 className="heading my-0">Popular products</h2>
            <ul className="ml-auto flex gap-x-5 filterTab font-medium">
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
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
            <div>
              <Product />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default HomePage