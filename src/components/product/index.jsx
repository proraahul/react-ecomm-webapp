import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import CompareArrowsOutlinedIcon from '@mui/icons-material/CompareArrowsOutlined';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';

const Product = ({tag}) => {

    const bgStyle = {
        backgroundColor: tag === 'new' ? '#3BB77E' : 
        tag === 'sale' ? '#67bcee' : 
        tag === 'hot' ? '#f74b81' : 
        tag === 'best' ? '#f59758' : 'black',

    }

    return (
        <div className="productThumb w-full h-auto border overflow-hidden rounded-md p-4 relative">
           
                   {
                    tag!==null && tag!==undefined && 
                    <span className='badge absolute top-0 left-0 inline-block z-10 text-white py-2 px-5 text-xs rounded-b-full rounded-l-md capitalize' style={bgStyle}>
                        {tag}
                    </span>
                   }
            <Link>
                <div className='imgWrapper w-full overflow-hidden relative'>
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-2-1.jpg"
                        alt=""/>

                    <div className="overlay transition-banner opacity-0 absolute top-0 left-0 w-full h-full p-6 flex items-center justify-center">
                        <ul className="bg-white w-[120px] h-auto rounded-lg flex items-center justify-center border overflow-hidden text-custom-green">
                            <li>
                                <Tooltip title="Add to Wishlist" placement='top'>
                                    <a href="#" className='block p-2 hover:text-black hover:opacity-70'><FavoriteBorderOutlinedIcon />
                                    </a>
                                </Tooltip>

                            </li>
                            <li>
                                <Tooltip title="Compare" placement='top'>
                                    <a href="#" className='block p-2 border-l border-r hover:text-black hover:opacity-70'><CompareArrowsOutlinedIcon />
                                    </a>
                                </Tooltip>

                            </li>
                            <li>
                                <Tooltip title="Quick View" placement='top'>
                                    <a href="#" className='block p-2 hover:text-black hover:opacity-70'><RemoveRedEyeOutlinedIcon />
                                    </a>
                                </Tooltip>
                            </li>
                        </ul>
                    </div>

                </div>
            </Link>
            <div>
                <span className="block text-faded-black text-sm">Snack</span>
                <h4 className='font-medium my-2 hover:text-custom-green leading-5'><Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <span className='block text-black opacity-60 text-xs'>By <Link className='text-custom-green'>NestFood</Link></span>

                <div className="flex items-center mt-3">
                    <div className="flex items-center">
                        <span className='text-custom-green font-medium text-lg mr-3'>$28.85</span> <span className='text-sm opacity-60 text-black line-through'>$32.8</span>
                    </div>
                    <button className='ml-auto border text-custom-green hover:bg-custom-green hover:text-white py-1 px-1 rounded text-sm'><ShoppingCartOutlinedIcon />Add</button>
                </div>
            </div>
        </div>
    )
}

export default Product