import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import HeadphonesOutlinedIcon from '@mui/icons-material/HeadphonesOutlined';
import { useState } from 'react';

const Nav = (props) => {
  const [navData, setNavData] = useState([]);
  const [isOpenNav, setIsOpenNav] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [openDropdownMenu, setDropdownMenu] = useState(false);
  const [openDropdownMenuIndex, setDropdownMenuIndex] = useState(null);

  const [openMegaMenu, setOpenMegaMenu] = useState(false);

  useEffect(() => {
    setNavData(props.data);
  }, [])

  useEffect(() => {
    setIsOpenNav(props.openNav)
  }, [props.openNav])


  const openDropdownFun = (index) => {
    setDropdownMenu(!openDropdownMenu)
    setDropdownMenuIndex(index)
  }

  return (
    <>
      {
        isOpenNav === true && <div className='navbarOverlay'></div>
      }
      <div className='nav flex items-center'>
        <div className='w-full container-fluid grid grid-cols-12 relative'>

          <div className='col-span-3 part1 flex items-center'>
            <button className='bg-custom-green text-white catTab'>
              <GridViewIcon /> &nbsp;Browse All Categories <KeyboardArrowDownIcon /></button>
          </div>

          <div className='col-span-7 static mb-0 flex items-center'>
            <nav className={isOpenNav === true ? 'open' : ''}>
              <ul className='mb-0 flex items-center gap-x-7'>
                <li>
                  <button><Link to={'/'}>Home</Link></button>
                </li>

                {
                  navData.length !== 0 &&
                  navData.slice(0, -1).map((item, index) => {
                    return (
                      <li key={index}>
                        <button onClick={() => openDropdownFun(index)}>
                          <Link to={`${`/cat/${item.cat_name}`}`}
                            onClick={() => sessionStorage.setItem('cat', item.cat_name)}
                          >
                            {item.cat_name}
                            <KeyboardArrowDownIcon
                              className={`${openDropdownMenu === true && openDropdownMenuIndex === index && 'rotateIcon'}`} />
                          </Link>
                        </button>

                        {
                          item?.items?.length !== 0 &&
                          <div className={`dropdown_menu ${openDropdownMenu === true && openDropdownMenuIndex === index && 'open'}`}>
                            <ul className='p-3'>
                              {item?.items?.map((item_, index_) => {
                                return (
                                  <li key={index_} className='py-2'>
                                    <Link
                                      to={`/cat/${item.cat_name}/${item_.cat_name.split(' ').join('-').toLowerCase()}`}
                                      onClick={() => sessionStorage.setItem('cat', item.cat_name)} className='hover:no-underline hover:text-custom-green'>
                                      {item_.cat_name}
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </div>
                        }
                      </li>
                    )

                  })
                }

                <li><Link to={'/about'}>About</Link></li>


                <li className='static'>
                  <button onClick={() => setOpenMegaMenu(!openMegaMenu)}>
                    <Link>Mega Menu<KeyboardArrowDownIcon className={`${openMegaMenu === true && 'rotateIcon'}`} />
                    </Link>
                  </button>

                  <div className={`dropdown_menu megaMenu absolute ${openMegaMenu === true && 'open'}`}>
                    <div className='grid grid-cols-12 gap-x-4'>
                      {props.data.length !== 0 &&
                        props.data.map((item, index) => {
                          return (
                            <div className='col-span-4' key={index}>
                              <Link to={`/cat/${item.cat_name}`}>
                                <h4 className='text-custom-green capitalize text-lg font-medium'>{item.cat_name}</h4>
                              </Link>
                              {item?.items?.length !== 0 &&
                                <ul className='mt-4 mb-0'>
                                  {item?.items?.map((item_, _index) => {
                                    return (
                                      <li key={_index} className='text-sm'>
                                        <Link to={`/cat/${item.cat_name}/${item_.cat_name.replace(/\s/g, '-')}`} className='text-sm'>
                                          {item_.cat_name}
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                              }
                            </div>
                          )
                        })}
                    </div>
                  </div>
                </li>
                <li>
                  <button><Link>Blog</Link></button>
                </li>
                {/* <li className='list-inline-item'>
                                        <Button><Link>Pages  <KeyboardArrowDownIcon /></Link>
                                        </Button>

                                        <div className='dropdown_menu'>
                                            <ul>
                                                <li><Button><Link to="/about">About Us</Link></Button></li>
                                                <li><Button><Link to="/about">Contact</Link></Button></li>
                                                <li><Button><Link to="/about">My Account</Link></Button></li>
                                                <li><Button><Link to="/about">Login</Link></Button></li>
                                                <li><Button><Link to="/about">Register</Link></Button></li>
                                                <li><Button><Link to="/about">Forgot password</Link></Button></li>
                                                <li><Button><Link to="/about">Reset password</Link></Button></li>
                                                <li><Button><Link to="/about">Purchase Guide</Link></Button></li>
                                                <li><Button><Link to="/about">Privacy Policy</Link></Button></li>
                                                <li><Button><Link to="/about">Terms of Service</Link></Button></li>
                                                <li><Button><Link to="/about">404 Page</Link></Button></li>
                                            </ul>
                                        </div>

                                    </li> */}
                <li>
                  <button><Link>Contact</Link></button>
                </li>
              </ul>

              {
                windowWidth < 992 &&
                <>
                  {
                    // context.isLogin !== "true" &&
                    // <div className='pl-3 pr-3'>
                    //   <br />
                    //   <Link to={'/signIn'}>
                    //     <button className="btn btn-g btn-lg w-full" onClick={closeNav}>Sign In</button>
                    //   </Link>
                    // </div>
                  }

                </>
              }

            </nav>
          </div>

          <div className='col-span-2 part3 flex items-center'>
            <div className='phNo flex items-center ml-auto'>
              <span><HeadphonesOutlinedIcon /></span>
              <div className='info ml-3'>
                <h3 className='text-custom-green mb-0'>1900 - 888</h3>
                <p className='px-0'>24/7 Support Center</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </>
  )
}

export default Nav;