import { useEffect } from "react";
import { useRef, useState } from "react"
import KeyboardDownArrow from '../assets/icons/arrow-down-black.svg';
import LocationIcon from '../assets/icons/location.svg';

const DropDown = ({ data, placeholder }) => {
    const [isOpenDropDown, setIsOpenDropDown] = useState(false);
    const [selectIndex, setSelectIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(placeholder);
    const [listData, setListData] = useState(data);
    const dropdownRef = useRef(null);

    const handleOpenDropDown = () => setIsOpenDropDown(!isOpenDropDown);

    const handleCloseDropDown = (index, name) => {
        setSelectIndex(index);
        setIsOpenDropDown(false);
        setSelectedItem(name);
    }

    const filterListItem = (e) => {
        const searchInputText = e.target.value.toLowerCase();
        let searchFromList = data.filter((item) => item.toLowerCase().includes(searchInputText));
        // console.log(filteredData);

        const removeDuplicateFromSearchList = searchFromList.filter((item, index) => searchFromList.indexOf(item) === index);
        setListData(removeDuplicateFromSearchList);
    }

    useEffect(() => {
        // Function to handle clicks outside of dropdown
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpenDropDown(false);
            }
        };

        // Add event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // location-dropdown styling
    const style = {
        minWidth: placeholder === 'Your Location' ? '180px' : '',
        border: placeholder === 'Your Location' ? '1px solid rgba(0,0,0,0.2)' : '',
        padding: placeholder === 'Your Location' ? '' : '',
        height: placeholder === 'Your Location' ? '40px' : '',
        boxShadow: placeholder === 'Your Location' ? '5px 5px 15px rbga(0,0,0,0.05)' : '',
    };

    const positionStyle = {
        top: placeholder === 'Your Location' ? '105%' : '',
        left: placeholder === 'Your Location' ? '-0.15rem' : '',
    }

    const locationColor = {
        color: placeholder === 'Your Location' ? '#279a65' : ''
    }


    return (
        <div className="col-span-4 font-medium cursor-pointer relative w-[150px]" ref={dropdownRef}>

            <div className="flex justify-between items-center" style={style}>
                {
                    placeholder == 'Your Location' ? <img src={LocationIcon} alt="" className="opacity-50" /> : ''
                }
                <span className="block w-fit text-base" onClick={handleOpenDropDown} style={locationColor}>
                    {selectedItem.length > 14 ? selectedItem.substr(0, 14) + '...' : selectedItem}
                </span>
                <img src={KeyboardDownArrow} />
            </div>

            {
                isOpenDropDown ?
                    (
                        <div className="w-[250px] h-auto bg-[#fff] absolute top-[150%] -left-5 z-50 shadow-md p-4 rounded" style={positionStyle}>

                            <div>
                                <input type="text" className="w-full h-12 border border-[#bce3c9] outline-none px-4"
                                    onChange={filterListItem}
                                    placeholder='Search here...'
                                />
                            </div>

                            <ul className="w-full m-0 p-4 text-lg max-h-80 overflow-y-scroll mt-2 search-result text-black text-opacity-70">

                                <li className={`w-full p-2 hover:bg-custom-green hover:text-white ${selectIndex === 0 ? 'active-category' : ''}`}
                                    onClick={() => handleCloseDropDown(0, item)}
                                    key={`index-${0}`}>
                                    {placeholder}
                                </li>

                                {
                                    listData.map((item, index) =>
                                        <li
                                            className={`w-full p-2 hover:bg-custom-green hover:text-white rounded-sm
                                    ${selectIndex === index + 1 ? 'active-category' : ''}`}
                                            onClick={() => handleCloseDropDown(index + 1, item)}
                                            key={`index-${index + 1}`}
                                        >
                                            {item}
                                        </li>
                                    )}
                            </ul>
                        </div>
                    ) : ''
            }
        </div>
    )
}

export default DropDown