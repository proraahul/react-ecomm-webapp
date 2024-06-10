import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Product from "../../components/product";
import Sidebar from "../../components/sidebar";

const Listing = (props) => {
    const [isOpenAccount, setIsOpenAccount] = useState(false);
    const [isOpenAccount2, setIsOpenAccount2] = useState(false);
    const [Alldata, setAllData] = useState(props.data);
    const [data, setData] = useState([]);

    const { id } = useParams();

    /* The `useEffect` hook in the provided code snippet is responsible for fetching and filtering data
    based on certain conditions when the component mounts. Here's a breakdown of what the `useEffect`
    function is doing: */

    useEffect(() => {
        var itemData = [];
        Alldata.length !== 0 && Alldata.map((item) => {
            // single cat /:id
            if (props.single) {
                if (item.cat_name == id) {
                    item.items.length !== 0 && item.items.map((_item, _index) => {
                        _item.products.length !== 0
                            && _item.products.map((curEle) => {
                                itemData.push(curEle)
                            })
                    })
                }
            }
            // double cat /:id/:id
            else {
                item?.items?.length !== 0 &&
                    item?.items?.map((item_, index_) => {
                        // console.log(item_);
                        if (item_.cat_name.split(' ').join('-').toLowerCase() == id) {
                            item_?.products?.length !== 0 &&
                                item_?.products?.map((product) => {
                                    // console.log(product)
                                    itemData.push(product)
                                })
                        }
                    })
            }
        })
        const list = itemData.filter((item, index) => itemData.indexOf(item) == index);
        setData(list);
    }, [id]);

    return (
        <section className="listing-page  h-auto py-11">
            <div className="container-fluid">
                <div className="breadcrump  h-auto py-11 px-9 bg-[#d8f1e5] rounded-xl mb-7">
                    <h1 className="text-black opacity-80 text-3xl font-medium">{sessionStorage.getItem('cat').toUpperCase()}</h1>
                    <ul className="flex gap-x-1 mt-2 text-xl">
                        <li><Link to={'/'} className='hover:no-underline hover:text-custom-green'>Home</Link></li>
                        
                        <li>
                        <NavigateNextIcon />
                            <Link to={`/cat/${sessionStorage.getItem('cat')}`} className='hover:no-underline hover:text-custom-green capitalize'>{sessionStorage.getItem('cat')}</Link>
                        </li>
                        {
                            !props.single &&
                            <li className='capitalize'>
                                <NavigateNextIcon />
                                {id}
                            </li>
                        }
                    </ul>
                </div>


                <div>
                    <div className="flex gap-x-4">
                        <div className="w-[20%] sidebar-wrapper">
                            {
                                data.length !== 0 &&
                                <Sidebar
                                    data={props.data}
                                    currentCatData={data}
                                // filterByBrand={filterByBrand}
                                // filterByPrice={filterByPrice}
                                // filterByRating={filterByRating}
                                />
                            }
                        </div>
                        <div className="w-[80%] overflow-hidden product-wrapper">

                            <div className="flex items-center px-6 mb-4">
                                <p>we found <span className="text-custom-green">{data?.length}</span> items for you!</p>
                                <div className="ml-auto flex items-center">
                                    <div className="flex items-center">
                                        <button className="w-fit border py-2 px-3 capitalize rounded-md opacity-70 relative flex items-center"
                                            onClick={() => setIsOpenAccount(!isOpenAccount)}>
                                            <GridViewOutlinedIcon className="opacity-50 mr-2" />
                                            Show: 50
                                        </button>

                                        {isOpenAccount !== false && (
                                            <ul className='p-2 w-32 absolute top-[65%] right-[275px] h-auto bg-white backdrop-blur-3xl shadow text-sm text-black z-20 rounded-sm'>
                                                <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'
                                                    onClick={() => setIsOpenAccount(false)}
                                                >
                                                    <button className="w-full text-left justify-start text-sm"
                                                    >50</button>
                                                </li>
                                                <li className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]' onClick={() => setIsOpenAccount(false)}>
                                                    <button className="w-full text-left justify-start text-sm">100</button>
                                                </li>
                                                <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]' onClick={() => setIsOpenAccount(false)}>
                                                    <button className="w-full text-left justify-start text-sm">150</button>
                                                </li>
                                                <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]' onClick={() => setIsOpenAccount(false)}>
                                                    <button className="w-full text-left justify-start text-sm">200</button>
                                                </li>
                                                <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]' onClick={() => setIsOpenAccount(false)}>
                                                    <button className="w-full text-left justify-start text-sm">All</button>
                                                </li>

                                            </ul>)}

                                    </div>
                                    <div className="tab ml-5">
                                        <button className="border py-2 px-3 capitalize rounded-md opacity-70 relative w-fit flex items-center"
                                            onClick={() => setIsOpenAccount2(!isOpenAccount2)}>
                                            <SortOutlinedIcon className="opacity-50 mr-2" />
                                            Sort by: Featured
                                        </button>
                                        {isOpenAccount2 !== false && (
                                            <ul className='p-2 w-48 absolute top-[64%] right-7 h-auto bg-white backdrop-blur-3xl shadow text-black z-20 rounded-sm'>
                                                <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]'
                                                    onClick={() => setIsOpenAccount2(false)}
                                                >
                                                    <button className="w-full text-left justify-start text-sm"
                                                    >Featured</button>
                                                </li>
                                                <li className='flex py-3 px-4 hover:text-custom-green hover:bg-[#f1f1f1]' onClick={() => setIsOpenAccount2(false)}>
                                                    <button className="w-full text-left justify-start text-sm">Price: Low to High</button>
                                                </li>
                                                <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]' onClick={() => setIsOpenAccount2(false)}>
                                                    <button className="w-full text-left justify-start text-sm">Price: High to Low</button>
                                                </li>
                                                <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]' onClick={() => setIsOpenAccount2(false)}>
                                                    <button className="w-full text-left justify-start text-sm">Release Date</button>
                                                </li>
                                                <li className='flex py-3 px-4 hover:text-custom-green  hover:bg-[#f1f1f1]' onClick={() => setIsOpenAccount2(false)}>
                                                    <button className="w-full text-left justify-start text-sm">Avg. Rating</button>
                                                </li>

                                            </ul>)}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-4 gap-3 pr-3 product_row">
                                {
                                    data.length !== 0 &&
                                    data.map((item, index) => {
                                        return (
                                            <div key={index} className='item'>
                                                <Product item={item} />
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Listing