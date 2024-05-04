import axios from 'axios';
import { useEffect, useState } from 'react';
import Logo from '../assets/icons/logo.svg';
import SearchIcon from '../assets/icons/search-icon.svg';
import CompareIcon from '../assets/icons/icon-compare.svg';
import HeartWishlistIcon from '../assets/icons/icon-heart.svg';
import CartIcon from '../assets/icons/icon-cart.svg';
import UserIcon from '../assets/icons/icon-user.svg';
import DropDown from './DropDown';


const Header = () => {
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

    const countryList = [];

    useEffect(() => {
        getCountry('https://countriesnow.space/api/v0.1/countries/');
    }, []);

    const getCountry = async (url) => {
        try {
            await axios.get(url)
                .then((res) => {
                        // console.log(res.data.data);
                        res.data.data.map((item, index)=>{
                            // console.log(item.country)
                            countryList.push(item.country)
                        })
                        
                })
        }catch (error) {
            console.log(error);
        }
    }
    

    return (
        <header className="w-full h-auto m-auto px-5">
            <div className='py-9'>
                <div className='grid sm:grid-cols-12 items-center sm:gap-x-5'>

                    <div className='sm:col-span-2'>
                        <img src={Logo} alt="nest mart and grocery logo" />
                    </div>

                    {/* header search start here */}
                    <div className='sm:col-span-5'>
                        <div className='w-full h-14 grid grid-cols-12 items-center border border-[#bce3c9] px-5 py-3  text-base'>
                            <DropDown data={categories} placeholder={'All Categories'}/>
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
                        <DropDown data={countryList} placeholder={'Your Location'}/>
                        </div>

                        <ul className='pl-14 flex gap-3'>
                                <li className='relative'>
                                <span className='text-base cursor-pointer flex items-center'>
                                    <img src={CompareIcon} alt="" className='mr-2'/>
                                    <span className='bg-green-500 rounded-full w-5 h-5  flex justify-center items-center text-white font-normal absolute -top-1 left-3'>3</span>
                                    Compare
                                    </span>
                                </li>
                                <li className='relative'>
                                <span className='text-base cursor-pointer flex items-center'>
                                    <img src={HeartWishlistIcon} alt="" className='mr-2'/>
                                    <span className='bg-green-500 rounded-full w-5 h-5  flex justify-center items-center text-white font-normal absolute -top-1 left-3'>3</span>
                                    Wishlist
                                    </span>
                                </li>
                                <li className='relative'>
                                <span className='text-base cursor-pointer flex items-center'>
                                    <img src={CartIcon} alt="" className='mr-2'/>
                                    <span className='bg-green-500 rounded-full w-5 h-5  flex justify-center items-center text-white font-normal absolute -top-1 left-3'>3</span>
                                    Cart
                                    </span>
                                </li>
                                <li className='relative'>
                                <span className='text-base cursor-pointer flex items-center'>
                                    <img src={UserIcon} alt="" className='mr-2'/> 
                                    Account
                                    </span>
                                </li>
                        </ul>
                        </div>

                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header