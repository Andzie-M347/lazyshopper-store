import { Fragment } from 'react';
import { Copyrights } from './copyrights';
import { Newsletter } from './newsletter';

import { IoLocationOutline } from 'react-icons/io5';
import { GoDeviceMobile } from 'react-icons/go';

import logo from '../../assets/images/logo/logo-light.svg';

export const Footer = () => {
  return (
    <Fragment>
      <Newsletter />

      {/* Footer area */}
      <footer className='footer-area'>
        <div className='footer-container'>
          <div className='footer-top'>
            <div className='container'>
              <div className='row'>
                <div className='col-md-6 col-sm-6 col-lg-3 mb-md-30px mb-lm-30px'>
                  <div className='single-wedge'>
                    <h4 className='footer-herading'>
                      <img src={logo} alt='lazyshopper logo' height='70px' />
                    </h4>
                    <div className='footer-links'>
                      <div className='footer-row'>
                        <p>
                          When you need some shopping done, get the most out of
                          your free time. Cut the hustle and do it your way with
                          Lazy Shopper's unique shopping experience
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className='col-md-6 col-lg-5 col-sm-6 mb-lm-30px'
                  style={{ visibility: 'hidden' }}
                >
                  <div className='single-wedge'>
                    <h4 className='footer-herading'>Account</h4>
                    <div className='footer-links'>
                      <div className='footer-row'>
                        <ul className='align-items-center'>
                          <li className='li'>
                            <a className='single-link' href='my-account.html'>
                              {' '}
                              My account
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='cart.html'>
                              My orders
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='cart.html'>
                              Cart
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 col-lg-4 col-sm-6 pl-120px line-shape'>
                  <div className='single-wedge '>
                    <h4 className='footer-herading'>Contact Us</h4>
                    <div className='footer-links'>
                      <p className='mail'>
                        If you have any question.please <br />
                        contact us at{' '}
                        <a href='mailto:demo@example.com'>
                          demo@example.com
                        </a>{' '}
                      </p>
                      <p className='address'>
                        <IoLocationOutline />
                        <span>
                          Your address goes here.
                          <br />
                          123, Address.
                        </span>{' '}
                      </p>
                      <p className='phone m-0'>
                        <GoDeviceMobile />
                        <span>
                          <a href='tel:0123456789'>+ 0 123 456 789</a> <br />{' '}
                          <a href='tel:0123456789'>+ 0 123 456 789</a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer bottom */}

          <Copyrights />
        </div>
      </footer>
    </Fragment>
  );
};
