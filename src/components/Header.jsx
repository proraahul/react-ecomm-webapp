import axios from 'axios';
import { useEffect, useState } from 'react';
import Logo from '../assets/icons/logo.svg';
import SearchIcon from '../assets/icons/search-icon.svg';
import UserIcon from '../assets/icons/icon-user.svg';
import HeartWishlistIcon from '../assets/icons/icon-heart.svg';
import DropDown from './DropDown';
import UserAccountIcon from '../assets/icons/user-account.svg';
import SignOut from '../assets/icons/sign-out.svg';
import SettingIcon from '../assets/icons/setting.svg';
import VoucherIcon from '../assets/icons/voucher-icon.svg';
import TrackingIcon from '../assets/icons/tracking-icon.svg';
import { useRef } from 'react';
import Nav from './Nav';
import { MIDDLE_HEADER_DATA } from '../constants/header';
import { Link } from 'react-router-dom';


const Header = (props) => {
    const [isOpenAccount, setIsOpenAccount] = useState(false);
    const dropdownRef = useRef();
    const headerRef = useRef();
    const [categories, setCategories] = useState([
        'Milks and Dairies',
        'Wines and Drinks',
        'Clothing and Beauty',
        'Pets food and toy',
        'Fast Food',
        'Baking materials',
        'Vegetables',
        'Fresh fruits',
        'Bread and Juice',
        'Milks and Dairies',
        'Wines and Drinks',
        'Clothing and Beauty',
        'Fresh seafood'
    ]);


    useEffect(() => {
        // Function to handle clicks outside of dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenAccount(false);
            }
        };

        // Add event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const countryList = [];

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    }, []);

    const getCountry = async (url) => {
        try {
            await axios.get(url)
                .then((res) => {
                    // console.log(res.data.data);
                    res.data.data.map((item, index) => {
                        // console.log(item.country)
                        countryList.push(item.country)
                    })

                })
        } catch (error) {
            console.log(error);
        }
    }

    // For position fixed header
    useEffect(() => {
        window.addEventListener('scroll', () => {
            let position = window.pageYOffset;

            if (position > 100) {
                headerRef.current.classList.add('fixed')
            } else {
                headerRef.current.classList.remove('fixed')
            }
        })
    }, []);


    return (
        <>
            <div className="bg-white header-wrapper min-w-screen" ref={headerRef}>
                <header className="w-full h-auto m-auto px-3 bg-white container-fluid">
                    <div className='py-9'>
                        <div className='grid grid-cols-12 items-center gap-x-2'>

                            <div className='col-span-2'>
                                <Link to={'/'}>
                                    <img src={Logo} alt="nest mart and grocery logo" />
                                </Link>
                            </div>

                            {/* header search start here */}
                            <div className='col-span-5'>
                                <div className='w-full h-auto border border-[#bce3c9] px-5 py-3 text-base grid grid-cols-12'>


                                    <div className="col-span-4">
                                    <DropDown data={categories} placeholder={'All Categories'} />
                                    </div>


                                    <div className="col-span-8 border-l-2 pl-5 flex cursor-pointer">
                                        <input type="text" placeholder='Search for items...' className='w-full outline-none border-none h-full' />
                                        <img src={SearchIcon} alt="search icon image" className='opacity-70' />
                                    </div>
                                </div>
                            </div>
                            {/* header search end here */}

                            <div className='col-span-5'>
                                <div className='items-center grid grid-cols-12'>

                                    <div className="col-span-3">
                                    <DropDown data={countryList} placeholder={'Your Location'} />
                                    </div>


                                    <ul className='flex col-span-8 gap-x-8 ml-10'>

                                        {
                                            MIDDLE_HEADER_DATA.map((item, index) => {
                                                return (
                                                    <li className='relative' key={index}>
                                                        <span className='cursor-pointer flex items-center'>
                                                            <img src={item.imgSrc} alt={item.spanTag} className='px-1' />
                                                            <span className='bg-custom-green rounded-full w-5 h-5 flex justify-center items-center text-white font-normal absolute -top-2 left-3'>3</span>
                                                            {item.spanTag}
                                                        </span>
                                                    </li>
                                                )
                                            })
                                        }

                                        <li className='relative mr-5'
                                            onClick={() => setIsOpenAccount(!isOpenAccount)}>
                                            <span className='text-base cursor-pointer flex items-center relative'>
                                                <img src={UserIcon} alt="user icon" />
                                                Account
                                            </span>

                                            {/* dropdown show on hover account  */}
                                            {
                                                isOpenAccount && (
                                                    <ul className='p-2 w-52 absolute top-[140%] -right-3 h-auto bg-white backdrop-blur-3xl box-shadow text-base text-black z-50' ref={dropdownRef}>
                                                        <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'>
                                                            <img src={UserAccountIcon} className='opacity-70 mr-2' alt="user account icon" />
                                                            <button className="w-full text-left justify-start">My Account</button>
                                                        </li>
                                                        <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'>
                                                            <img src={TrackingIcon} className='opacity-70 mr-2' alt="order tracking icon" />
                                                            <button className="w-full text-left justify-start">Order Tracking</button>
                                                        </li>
                                                        <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'>
                                                            <img src={VoucherIcon} className='opacity-70 mr-2' alt="voucher icon" />
                                                            <button className="w-full text-left justify-start">My Voucher</button>
                                                        </li>
                                                        <li className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>
                                                            <img src={HeartWishlistIcon} className='opacity-70 mr-2' alt="heart icon" /> <button className="w-full text-left justify-start">My Wishlist</button>
                                                        </li>
                                                        <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'>
                                                            <img src={SettingIcon} className='opacity-70 mr-2' alt="setting icon" />
                                                            <button className="w-full text-left justify-start">Setting</button>
                                                        </li>
                                                        <li className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]'>
                                                            <img src={SignOut} className='opacity-70 mr-2' alt="sign out icon" />
                                                            <button className="w-full text-left justify-start ">Sign out</button>
                                                        </li>
                                                    </ul>)
                                            }

                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>
                    </div>
                </header>
                <Nav data={props.data} />
            </div>

            <div className="mt-52"></div>

        </>
    )
}

export default Header