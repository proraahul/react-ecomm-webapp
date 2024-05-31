import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import SortOutlinedIcon from '@mui/icons-material/SortOutlined';
import Product from "../../components/product";
import Sidebar from "../../components/sidebar";

const Listing = ({single,data}) => {
    const [isOpenAccount, setIsOpenAccount] = useState(false);
    const [isOpenAccount2, setIsOpenAccount2] = useState(false);
    const [Alldata, setAllData] = useState(data);

    const {id} = useParams();

    useEffect(() => {
        var itemData = [];
        Alldata.length !==0 && Alldata.map((item,index)=>{
            if(single){
                if(item.cat_name == id){
                    item.items.length !==0 && item.items.map((_item, _index)=>{
                        itemData.push({..._item, parentCatName:item.cat_name, childCatName: _item.cat_name});
                    })
                }
            }
        })
    }, []);

    return (
        <section className="listing-page w-full h-auto py-11">
            <div className="container-fluid">
                <div className="breadcrump w-full h-auto py-11 px-9 bg-[#d8f1e5] rounded-xl mb-7">
                    <h1 className="text-black opacity-80 text-3xl font-medium">Snack</h1>
                    <ul className="flex gap-x-5 mt-2 text-xl">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/'}>Shop</Link></li>
                        <li><Link to={'/'}>Snack</Link></li>
                    </ul>
                </div>


                <div>
                    <div className="flex w-full gap-x-4">
                        <div className="w-[20%] sidebar-wrapper">
                            <Sidebar />
                        </div>
                        <div className="w-[80%] overflow-hidden product-wrapper">

                            <div className="flex items-center px-6 mb-5">
                                <p>we found <span className="text-custom-green">29</span> items for you!</p>
                                <div className="ml-auto flex items-center">
                                    <div>
                                        <button className="w-36 border py-2 px-5 capitalize rounded-md opacity-70 relative flex items-center" onClick={() => setIsOpenAccount(!isOpenAccount)}> <GridViewOutlinedIcon className="opacity-50"/>
                                            Show: 50
                                            </button>

                                        {isOpenAccount !== false && (
                                            <ul className='p-2 w-36 absolute top-[64%] right-70 h-auto bg-white backdrop-blur-3xl box-shadow text-sm text-black z-50'>
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
                                        <button className="border py-2 px-5 capitalize rounded-md opacity-70 relative w-52 flex items-center" 
                                        onClick={() => setIsOpenAccount2(!isOpenAccount2)}>
                                        <SortOutlinedIcon className="opacity-50"/>
                                            Sort by: Featured</button>
                                        {isOpenAccount2 !== false && (
                                            <ul className='p-2 w-52 absolute top-[64%] right-12 h-auto bg-white backdrop-blur-3xl box-shadow text-black z-50'>
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

                            <div className="grid grid-cols-5 gap-2 pr-3">
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
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Listing