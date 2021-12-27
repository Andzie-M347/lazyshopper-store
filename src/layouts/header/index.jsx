import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// ASSETS
import logo from '../../assets/images/logo/logo.png';

import { RiShoppingBag3Line } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineMenu } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { VscChevronDown } from 'react-icons/vsc';

export const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const listenToScroll = () => {
      let scrollPosition = window.scrollY;

      if (scrollPosition >= 90) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', () => {
      listenToScroll();
    });
  }, [scroll]);

  return (
    <header>
      <div
        className={
          scroll
            ? 'header-main sticky-nav menu_fixed animated fadeInDown'
            : 'header-main sticky-nav'
        }
      >
        <div className='container position-relative'>
          <div className='row'>
            <div className='col-auto align-self-center'>
              <div className='header-logo'>
                <Link to='/'>
                  <img src={logo} alt='Site Logo' />
                </Link>
              </div>
            </div>

            <div className='col align-self-center d-none d-lg-block'>
              <div className='main-menu'>
                <ul>
                  <li className='dropdown'>
                    <Link to='/'>
                      Home <i className='fa fa-angle-down'></i>
                    </Link>
                  </li>
                  <li>
                    <Link to='/about/'>About</Link>
                  </li>

                  <li className='dropdown position-static'>
                    <Link to='/products/'>
                      Shop <VscChevronDown />
                    </Link>
                  </li>

                  <li>
                    <Link to='/contact/'>contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className='col col-lg-auto align-self-center pl-0'>
              <div className='header-actions'>
                <span className='header-action-btn' data-bs-toggle='modal'>
                  <BiSearch />
                </span>

                <div className='header-bottom-set dropdown'>
                  <button
                    className='dropdown-toggle header-action-btn'
                    data-bs-toggle='dropdown'
                  >
                    <AiOutlineUser />
                  </button>

                  <ul className='dropdown-menu dropdown-menu-right'>
                    <li>
                      <Link className='dropdown-item' to='/checkout/'>
                        Checkout
                      </Link>
                    </li>
                    <li>
                      <Link className='dropdown-item' to='/login/'>
                        Sign in
                      </Link>
                    </li>
                  </ul>
                </div>

                <a
                  href='#offcanvas-wishlist'
                  className='header-action-btn offcanvas-toggle'
                >
                  <i className='pe-7s-like'></i>
                </a>

                <a
                  href='#offcanvas-cart'
                  className='header-action-btn header-action-btn-cart offcanvas-toggle pr-0'
                >
                  <RiShoppingBag3Line />

                  <span className='header-action-num'>01</span>

                  <span className='cart-amount'>R30.00</span>
                </a>
                <a
                  href='#offcanvas-mobile-menu'
                  className='header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none'
                >
                  <AiOutlineMenu />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
