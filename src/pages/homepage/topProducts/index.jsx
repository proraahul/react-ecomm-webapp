import { Link } from 'react-router-dom';
import Rating from '@mui/material/Rating';
import Thumbnail1 from '../../../assets/images/thumbnail-1.jpg';
import Thumbnail2 from '../../../assets/images/thumbnail-2.jpg';
import Thumbnail3 from '../../../assets/images/thumbnail-3.jpg';

const TopProducts = ({ title }) => {
    return (
        <div className="box">
            <h3 className="relative text-xl font-medium pb-3 mb-7
                    after:content-[''] after:w-full after:h-[3px] after:bg-[#ccc] after:absolute after:bottom-0 after:left-0
                    before:content-[''] before:w-1/5 before:h-[3px] before:bg-[#b0e5c2] before:absolute before:bottom-0 before:left-0 before:z-10"
            >{title}</h3>

            <div className="flex align-items relative transition-banner items">
                <div className="image w-[30%]">
                    <Link to={''}>
                        <img src={Thumbnail1} alt="" className=" bg-[#ccc]" />
                    </Link>
                </div>

                <div className="w-[70%] px-3">
                    <Link to={''}>
                        <h4 className='font-medium opacity-80 text-sm'>Nestle Original Coffee-Mate Coffee Creamer</h4>
                    </Link>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className="flex items-center">
                        <span className='text-custom-green font-medium text-md mr-3'>$28.85</span> <span className='text-sm opacity-60 text-black line-through'>$32.8</span>
                    </div>
                </div>
            </div>

            <div className="flex align-items my-4 relative transition-banner items">
                <div className="image w-[30%]">
                    <Link to={''}>
                        <img src={Thumbnail2} alt="" className=" bg-[#ccc]" />
                    </Link>
                </div>

                <div className="w-[70%] px-3">
                    <Link to={''}>
                        <h4 className='font-medium opacity-80 text-sm'>Nestle Original Coffee-Mate Coffee Creamer</h4>
                    </Link>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className="flex items-center">
                        <span className='text-custom-green font-medium text-md mr-3'>$28.85</span> <span className='text-sm opacity-60 text-black line-through'>$32.8</span>
                    </div>
                </div>
            </div>

            <div className="flex align-items relative transition-banner items">
                <div className="image w-[30%]">
                    <Link to={''}>
                        <img src={Thumbnail3} alt="" className=" bg-[#ccc]" />
                    </Link>
                </div>

                <div className="w-[70%] px-3">
                    <Link to={''}>
                        <h4 className='font-medium opacity-80 text-sm'>Nestle Original Coffee-Mate Coffee Creamer</h4>
                    </Link>
                    <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                    <div className="flex items-center">
                        <span className='text-custom-green font-medium text-md mr-3'>$28.85</span> <span className='text-sm opacity-60 text-black line-through'>$32.8</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts