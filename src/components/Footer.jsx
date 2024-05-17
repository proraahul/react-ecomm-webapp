import { Link } from 'react-router-dom';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import Icon1 from '../assets/icons/icon-1.svg';
import Icon2 from '../assets/icons/icon-2.svg';
import Icon3 from '../assets/icons/icon-3.svg';
import Icon4 from '../assets/icons/icon-4.svg';
import Icon5 from '../assets/icons/icon-5.svg';
import Logo from '../assets/icons/logo.svg';
import AppStore from '../assets/images/app-store.jpg';
import GooglePlay from '../assets/images/google-play.jpg';
import PaymentMethod from '../assets/images/payment-method.png';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="footer-wrapper w-full mt-11">
      {/* Top Footer 5 Boxes */}
      <div className="footer-boxes container-fluid">
        <div className="flex gap-x-3 footer-boxes">
          <div className='bg-[#F4F6FA] flex items-center py-3 px-6 rounded-2xl footer-box'>
            <div className="flex items-center w-full ">
              <span><img src={Icon1} alt="" className="w-14 relative" /></span>
              <div className="info pl-4">
                <h4 className="text-base font-medium">Best prices & offers</h4>
                <p className='text-sm mt-1 mb-0 opacity-80'>Orders $50 or more</p>
              </div>
            </div>
          </div>
          <div className='bg-[#F4F6FA] flex items-center py-3 px-6 rounded-2xl footer-box'>
            <div className="flex items-center w-full">
              <span><img src={Icon2} alt="" className="w-14 relative" /></span>
              <div className="info pl-4">
                <h4 className="text-base font-medium">Free delivery</h4>
                <p className='text-sm mt-1 mb-0 opacity-80'>24/7 amazing services</p>
              </div>
            </div>
          </div>
          <div className='bg-[#F4F6FA] flex items-center py-3 px-6 rounded-2xl footer-box'>
            <div className="flex items-center w-full">
              <span><img src={Icon3} alt="" className="w-14 relative" /></span>
              <div className="info pl-4">
                <h4 className="text-base font-medium">Great daily deals</h4>
                <p className='text-sm mt-1 mb-0 opacity-80'>When you sign up</p>
              </div>
            </div>
          </div>
          <div className='bg-[#F4F6FA] flex items-center py-3 px-6 rounded-2xl footer-box'>
            <div className="flex items-center w-full">
              <span><img src={Icon4} alt="" className="w-14 relative" /></span>
              <div className="info pl-4">
                <h4 className="text-base font-medium">Wide assortment</h4>
                <p className='text-sm mt-1 mb-0 opacity-80'>Mega Discounts</p>
              </div>
            </div>
          </div>
          <div className='bg-[#F4F6FA] flex items-center py-3 px-6 rounded-2xl footer-box'>
            <div className="flex items-center w-full">
              <span><img src={Icon5} alt="" className="w-14 relative" /></span>
              <div className="info pl-4">
                <h4 className="text-base font-medium">Easy returns</h4>
                <p className='text-sm mt-1 mb-0 opacity-80'>Within 30 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}

      <footer>
        <div className="container-fluid">
          <div className="grid grid-cols-12 gap-x-4 mt-10">
            <div className="col-span-3 footer-part1 text-xs">
              <Link to={'/'} className='text-xl'><img src={Logo} alt="nest mart and grocery logo" className='mb-6' /></Link>

              <p className='mb-3'>Awesome grocery store website template</p>
              <address className='not-italic mb-3'><LocationOnOutlinedIcon className="text-custom-green mr-1"/><strong>Address:</strong> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</address>
              <p className='mb-2'><HeadphonesIcon className="text-custom-green mr-1"/><strong>Call Us:</strong>(+91) - 540-025-124553</p>
              <p className='mb-2'><EmailOutlinedIcon className="text-custom-green mr-1"/><strong>Email:</strong>sale@Nest.com</p>
              <p><WatchLaterOutlinedIcon className="text-custom-green mr-1"/><strong>Hours:</strong>10:00 - 18:00, Mon - Sat</p>
            </div>

            <div className="col-span-7 footer-part2">
              <div className='grid grid-cols-12 gap-x-'>
                  <div className="col-span-3">
                    <h3 className='font-medium text-xl mb-8'>Company</h3>
                    <ul className='opacity-80 text-xs'>
                      <li className='mb-3'><Link to={'/'}>About Us</Link></li>
                      <li className='mb-3'><Link to={'/'}>Delivery Information</Link></li>
                      <li className='mb-3'><Link to={'/'}>Privacy Policy</Link></li>
                      <li className='mb-3'><Link to={'/'}>Terms &amp; Conditions</Link></li>
                      <li className='mb-3'><Link to={'/'}>Contact Us</Link></li>
                      <li className='mb-3'><Link to={'/'}>Support Center</Link></li>
                      <li className='mb-3'><Link to={'/'}>Careers</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-3">
                  <h3 className='font-medium text-xl mb-8'>Account</h3>
                    <ul className='opacity-80 text-xs'>
                      <li className='mb-3'><Link to={'/'}>Sign In</Link></li>
                      <li className='mb-3'><Link to={'/'}>View Cart</Link></li>
                      <li className='mb-3'><Link to={'/'}>My Wishlist</Link></li>
                      <li className='mb-3'><Link to={'/'}>Track My Order</Link></li>
                      <li className='mb-3'><Link to={'/'}>Help Ticket</Link></li>
                      <li className='mb-3'><Link to={'/'}>Shipping Details</Link></li>
                      <li className='mb-3'><Link to={'/'}>Compare products</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-3">
                  <h3 className='font-medium text-xl mb-8'>Corporate</h3>
                    <ul className='opacity-80 text-xs'>
                      <li className='mb-3'><Link to={'/'}>Become a Vendor</Link></li>
                      <li className='mb-3'><Link to={'/'}>Affiliate Program</Link></li>
                      <li className='mb-3'><Link to={'/'}>Farm Business</Link></li>
                      <li className='mb-3'><Link to={'/'}>Farm Careers</Link></li>
                      <li className='mb-3'><Link to={'/'}>Our Suppliers</Link></li>
                      <li className='mb-3'><Link to={'/'}>Accessibility</Link></li>
                      <li className='mb-3'><Link to={'/'}>Permotions</Link></li>
                    </ul>
                  </div>
                  <div className="col-span-3">
                  <h3 className='font-medium text-xl mb-8'>Popular</h3>
                    <ul className='opacity-80 text-xs'>
                      <li className='mb-3'><Link to={'/'}>Milk & Flavoured Milk</Link></li>
                      <li className='mb-3'><Link to={'/'}>Butter and Margarine</Link></li>
                      <li className='mb-3'><Link to={'/'}>Eggs Substitutes</Link></li>
                      <li className='mb-3'><Link to={'/'}>Marmalades</Link></li>
                      <li className='mb-3'><Link to={'/'}>Sour Cream and Dips</Link></li>
                      <li className='mb-3'><Link to={'/'}>Tea & Kombucha</Link></li>
                      <li className='mb-3'><Link to={'/'}>Chess</Link></li>
                    </ul>
                  </div>
              </div>
            </div>

            <div className="col-span-2 footer-part3">
            <h3 className='font-medium text-xl mb-7'>Install App</h3>
            <p className='text-sm'>From App Store or Google Play</p>

            <div className="flex items-center gap-x-2 mt-4">
              <Link to={'/'}><img src={AppStore} alt="app store" className='w-32'/></Link>
              <Link to={'/'}><img src={GooglePlay} alt="google play" className='w-32'/></Link>
            </div>
            <br />
            <p className='text-sm mb-2'>Secured Payment Gatways</p>
            <img src={PaymentMethod} alt="" />
            </div>
          </div>

          <hr className='mt-10'/>


            <div className="grid grid-cols-12 py-4 bottom-footer"> 
              <div className='col-span-3 bottom-footer__part1'>
                <p>2024, <span>Nest</span>-HTML Ecommerce Template All rights reserved</p>
              </div>
              <div className='col-span-6 bottom-footer__part2'>
                <div className="m-auto flex items-center justify-center">
                <div className="flex items-center justify-center mx-5">
                  <span><WifiCalling3OutlinedIcon className='text-custom-green opacity-80'/></span>
                  <div className="ml-3">
                    <h3 className='text-2xl font-medium text-custom-green'>1800 - 6666</h3>
                    <p className='text-xs opacity-80'>24/7 Support Center</p>
                  </div>
                </div>
                <div className="flex items-center justify-center mx-5">
                  <span><WifiCalling3OutlinedIcon className='text-custom-green opacity-80'/></span>
                  <div className="ml-3">
                    <h3 className='text-2xl font-medium text-custom-green'>1800 - 8888</h3>
                    <p className='text-xs opacity-80'>24/7 Support Center</p>
                  </div>
                </div>
                </div>

              </div>
              <div className='col-span-3 bottom-footer__part3'>
                <div className="flex items-center">
                  <h5 className='mb-0'>Follow Us</h5>
                  <ul className='mb-0 ml-4 flex gap-x-2'>
                    <li><Link to={''} className='flex justify-center items-center w-9 h-9 bg-custom-green rounded-full'>
                      <FacebookOutlinedIcon className='text-white'/>
                      </Link></li>
                    <li><Link to={''} className='flex justify-center items-center w-9 h-9 bg-custom-green rounded-full'>
                      <XIcon className='text-white'/>
                      </Link></li>
                    <li><Link to={''} className='flex justify-center items-center w-9 h-9 bg-custom-green rounded-full'>
                      <InstagramIcon className='text-white'/>
                      </Link></li>
                    <li><Link to={''} className='flex justify-center items-center w-9 h-9 bg-custom-green rounded-full'>
                      <YouTubeIcon className='text-white'/>
                      </Link></li>
                    {/* <li><Link to={''} className='flex justify-center items-center w-10 h-10 bg-custom-green rounded-full'></Link></li> */}
                  </ul>
                </div>
                <p className='text-xs opacity-80 mt-1'>Up to 15% discount on your first subscribe</p>
              </div>
            </div>

        </div>
      </footer>


    </div>
  )
}

export default Footer