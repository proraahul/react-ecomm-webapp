import { Link } from 'react-router-dom';
import BlackDownArrow from '../assets/icons/arrow-down-black.svg';
import BlackUpArrow from '../assets/icons/arrow-up-black.svg';
import KeyboardDownArrow from '../assets/icons/keyboard-down-arrow.svg'
import gridView from '../assets/icons/grid-view.svg';
import HeadPhones from '../assets/icons/headphones.svg'
import BannerMenu from '../assets/images/banner-menu.png'

const Nav = () => {


  return (
    <div className="w-full h-auto border-t border-b border-[rgba(0,0,0,0.1)] flex items-center z-50">
      <div className="container-fluid grid grid-cols-12 items-center relative">

          <div className="col-span-3">
            <div className="px-3 bg-custom-green rounded-sm text-white inline-flex items-center">
              <img src={gridView} alt="grid view icon" />
              <button className="bg-custom-green p-3 text-base">Browse All Categories
              </button>
              <img src={KeyboardDownArrow} alt="key down icon" />
              {/* <img src={KeyboardUpArrow} alt="key down icon" /> */}
            </div>
          </div>

          <div className="col-span-7 static">
            <nav>
              <ul className='flex justify-start gap-x-3 text-black opacity-80 text-lg static'>
                {/* <li>
                  <button className='py-4 px-2 hover:text-custom-green'> <Link> Deals </Link> </button>
                </li> */}
                <li>
                  <button className='py-4 px-2 hover:text-custom-green'> <Link> Home </Link> </button>
                </li>
                <li>
                  <button className='py-4 px-2 hover:text-custom-green'> <Link> About </Link> </button>
                </li>
                <li>
                  <button className='py-4 px-2 hover:text-custom-green'> <Link> Shop </Link> </button>
                </li>
                <li>
                  <button className='py-4 px-2 hover:text-custom-green'> <Link> Vendors </Link> </button>
                </li>
                <li className='static list-item'>
                  <button className='py-4 px-2 hover:text-custom-green flex'><Link>Mega menu</Link><img src={BlackDownArrow} /></button>

                  {/* show when Hover on Mega menu */}
{/* */}
                  <div className='p-2 w-full absolute top-[160%] left-0 h-auto bg-white text-base text-black font-medium dropdown-menu backdrop-blur-3xl box-shadow'>

                   <div className='grid grid-cols-12 p-6'>
                   <div className='col-span-3'>
                          <div className="flex justify-center flex-col">
                          <h4 className='text-custom-green text-xl'>Fruit & Vegetables</h4>
                          <ul className='text-black opacity-80 mt-3'>
                            <li className='block mb-2'>
                              <Link>Meat & Poultry</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Fresh vegetables</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Herbs & Seasonings</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Cuts & Sprouts</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Exotic Fruits & Vaggies</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Packaged Produce</Link>
                            </li>
                          </ul>
                          </div>
                    </div>
                    <div className='col-span-3'>
                   <div className="flex justify-center">
                   <h4 className='text-custom-green text-xl'>Breakfast & Dairy</h4>
                   <ul className='text-black opacity-80 mt-10 -ml-44'>
                            <li className='block mb-2'>
                              <Link>Milk & Flavoured Milk</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Butter and Margorine</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Eggs Substitues</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Marmalades</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Sour cream</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Chees</Link>
                            </li>
                          </ul>
                   </div>
                    </div>
                    <div className='col-span-3'>
                    <div className="flex justify-center">
                    <h4 className='text-custom-green text-xl'>Meat & Seafood</h4>
                    <ul className='text-black opacity-80 mt-10 -ml-40'>
                            <li className='block mb-2'>
                              <Link>Breakfast Sausage</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Dinner Sausage</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Chiken</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Sliced Deli Meat</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Wild Caught Fillets</Link>
                            </li>
                            <li className='block mb-2'>
                              <Link>Crab and Shellfish</Link>
                            </li>
                          </ul>
                    </div>
                    </div>
                    <div className='col-span-3'>
                         <div className="flex justify-center">
                          <img src={BannerMenu} alt="" />
                         </div>
                    </div>
                   </div>

                  </div>
                </li>
                <li>
                  <button className='py-4 px-2 hover:text-custom-green'><Link>Blogs</Link></button>
                </li>
                <li className='relative list-item'
                >
                  <button
                    className='py-4 px-2 hover:text-custom-green flex'
                  >
                    Pages
                    <img src={BlackDownArrow} />
                  </button>

                  {/* pages dropdown on hover*/}

                  <ul className='p-2 w-60 absolute top-[160%] h-auto bg-white text-base text-black font-medium dropdown-menu backdrop-blur-3xl box-shadow'>

                    <Link to={'/about'} className='py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'>About Us</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'>Contact</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'>My Account</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>Login</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'>Register</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>Forget Password</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>Reset Password</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>Purchase Guide</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>Privacy Policy</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>Terms of service</Link>
                    <Link className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>404 page</Link>
                  </ul>


                </li>
                <li>
                  <button className='py-4 px-2 hover:text-custom-green'> <Link>Contact</Link> </button>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-span-2">
            <div>
              <div className="flex justify-end pl-14">
                <img src={HeadPhones} alt="" className='w-10 opacity-80' />
                <div className='ml-3 w-full'>
                  <h3 className='text-custom-green mb-0 font-medium text-xl'>1900 - 888</h3>
                  <p className='mb-0 text-xs text-gray-400'>24/7 Support Center</p>
                </div>

              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Nav