import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import Checkbox from '@mui/material/Checkbox';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import BannerImg from '../../assets/images/banner1.jpg';
import { Link } from 'react-router-dom';

function valuetext(value) {
  return `${value}°C`;
}

const Sidebar = ({ data, currentCatData }) => {
  const [value, setValue] = useState([120, 700]);
  const [totalLength, setTotalLength] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  var catLength = 0;
  var lengthArr = [];
  useEffect(() => {
    data?.length !== 0 &&
      data.map((item) => {
        item?.items?.length !== 0 &&
          item?.items?.map((_item) => {
            catLength += _item.products.length
          })
        lengthArr.push(catLength)
        // console.log(catLength);
        catLength = 0;
      });

    const list = lengthArr?.filter((item, index) => lengthArr.indexOf(item) === index);
    setTotalLength(list);

    // console.log(lengthArr)
  }, []);


  return (
    <>
      <div className="sidebar sticky top-20">
        <div className="p-6 border rounded-lg box-shadow mb-7">
          <h3 className='relative first-line:text-xl font-medium pb-3 mb-7 
         after:content-[""] 
         after:w-full 
        after:h-[3px] after:bg-[#ccc] 
        after:absolute after:bottom-0 after:left-0 
        before:content-[""] before:w-1/5 before:h-[3px] before:bg-[#b0e5c2] before:absolute before:bottom-0 before:left-0 before:z-10'>
            Category
          </h3>

          <div className="cat-list">
            {
              data.length !== 0 &&
              data.slice(0,-1).map((item, index) => {
                return (
                  <Link to={`/cat/${item.cat_name}`} key={index} className='hover:no-underline hover:text-custom-green'>
                    <div className="cat-item flex items-center p-3 cursor-pointer my-2 rounded-md">
                      <span>
                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/category-1.svg" alt={item.cat_name} width={30} />
                      </span>
                      <h4 className='mb-0 ml-3'>{item.cat_name}</h4>
                      <span className="flex items-center justify-center rounded-full ml-auto bg-[#BCE3C9] p-2 text-xs">{totalLength[index]}</span>
                    </div>
                  </Link>
                )
              })
            }
          </div>
        </div>

        <div className="p-6 border rounded-lg box-shadow">
          <h3 className='relative first-line:text-xl font-medium pb-3 mb-7 
         after:content-[""] 
         after:w-full 
        after:h-[3px] after:bg-[#ccc] 
        after:absolute after:bottom-0 after:left-0 
        before:content-[""] before:w-1/5 before:h-[3px] before:bg-[#b0e5c2] before:absolute before:bottom-0 before:left-0 before:z-10'>Fill by price</h3>
          <Slider
            min={0}
            max={1000}
            step={1}
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
            className='text-xs z-10 mt-2 text-custom-green'
            color=''
          />

          <div className="flex py-2 price-range">
            <span>From: <strong className="text-custom-green font-medium">${value[0]}</strong></span>
            <span className="ml-auto">To: <strong className="text-custom-green font-medium">${value[1]}</strong></span>
          </div>

          <div className="filters py-6">
            <h5 className="mb-3 font-medium">Color</h5>
            <ul className='-ml-3 py-1'>
              <li className="w-full"><Checkbox {...label} color='success' />Red (56)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Green (78)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Blue (54)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Red (56)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Green (78)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Blue (54)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Red (56)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Green (78)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Blue (54)</li>
            </ul>
          </div>

          <div className="filters">
            <h5 className="mb-3 font-medium">Item Condition</h5>
            <ul className='-ml-3 py-1'>
              <li className="w-full"><Checkbox {...label} color='success' />New (1506)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Refurbished (27)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Used (45)</li>
              <li className="w-full"><Checkbox {...label} color='success' />New (1506)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Refurbished (27)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Used (45)</li>
              <li className="w-full"><Checkbox {...label} color='success' />New (1506)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Refurbished (27)</li>
              <li className="w-full"><Checkbox {...label} color='success' />Used (45)</li>
            </ul>
          </div>

          <button className='mt-6 border py-2 px-6 rounded-md bg-custom-green text-white font-medium hover:bg-[#FDC040] btn'>
            <FilterAltOutlinedIcon />
            Filter</button>
        </div>

        <img src={BannerImg} alt="" className="w-full mt-10" />
      </div>
    </>
  )
}

export default Sidebar