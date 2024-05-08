import Rating from '@mui/material/Rating';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Product = () => {
    return (
        <div className="productThumb w-full h-auto border overflow-hidden rounded-md p-4">
            <Link>
                <div className='imgWrapper w-full overflow-hidden'>
                    <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/shop/product-1-2.jpg" alt="" className="" />
                </div>
            </Link>
            <div>
                <span className="block text-faded-black text-sm">Snack</span>
                <h4 className='font-medium my-2 hover:text-custom-green leading-5'><Link>Seeds of Change Organic Quinoa, Brown, & Red Rice</Link></h4>
                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                <span className='block text-black opacity-60 text-xs'>By <Link className='text-custom-green '>NestFood</Link></span>

                <div className="flex items-center mt-3">
                    <div className="flex items-center">
                        <span className='text-custom-green font-medium text-lg mr-3'>$28.85</span> <span className='text-sm opacity-60 text-black line-through'>$32.8</span>
                    </div>
                    <button className='ml-auto border text-custom-green hover:bg-custom-green hover:text-white py-1 px-3'> <ShoppingCartOutlinedIcon />Add</button>
                </div>
            </div>
        </div>
    )
}

export default Product