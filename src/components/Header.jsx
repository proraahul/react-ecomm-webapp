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
import Nav from './nav/Nav';
import { MIDDLE_HEADER_DATA } from '../constants/header';


const Header = () => {
    const [isOpenAccount, setIsOpenAccount] = useState(false);
    const dropdownRef = useRef();
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
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)) {
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


    return (
        <>
            <header className="w-full h-auto m-auto px-6">
            <div className='py-9'>
                <div className='grid sm:grid-cols-12 items-center sm:gap-x-5'>

                    <div className='sm:col-span-2'>
                        <img src={Logo} alt="nest mart and grocery logo" />
                    </div>

                    {/* header search start here */}
                    <div className='sm:col-span-5'>
                        <div className='w-full h-14 grid grid-cols-12 items-center border border-[#bce3c9] px-5 py-3 text-base'>
                            <DropDown data={categories} placeholder={'All Categories'} />
                            <div className="col-span-8 border-l-2 pl-5 flex cursor-pointer">
                                <input type="text" placeholder='Search for items...' className='w-full outline-none border-none' />
                                <img src={SearchIcon} alt="search icon image" className='opacity-70' />
                            </div>
                        </div>
                    </div>
                    {/* header search end here */}

                    <div className='sm:col-span-5 flex items-center'>
                        <div className='ml-auto flex items-center'>
                            <div >
                                <DropDown data={countryList} placeholder={'Your Location'} />
                            </div>

                            <ul className='pl-14 flex gap-3'>

                                {
                                    MIDDLE_HEADER_DATA.map((item, index) => {
                                        return (
                                            <li className='relative' key={index}>
                                                <span className='text-base cursor-pointer flex items-center'>
                                                    <img src={item.imgSrc} alt={item.spanTag} className='mr-2' />
                                                    <span className='bg-custom-green rounded-full w-5 h-5 flex justify-center items-center text-white font-normal absolute -top-2 left-3'>3</span>
                                                    {item.spanTag}
                                                </span>
                                            </li>
                                        )
                                    })
                                }

                                <li className='relative' onClick={() => setIsOpenAccount(!isOpenAccount)}>
                                    <span className='text-base cursor-pointer flex items-center relative'>
                                        <img src={UserIcon} alt="" className='mr-2' />
                                        Account
                                    </span>

                                    {/* dropdown show on hover account  */}
                                    {
                                        isOpenAccount && (
                                            <ul className='p-2 w-52 absolute top-[140%] -right-3 h-auto bg-white backdrop-blur-3xl shadow-md text-base text-black' ref={dropdownRef}>
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
        <Nav />
        </>
    )
}

export default Header