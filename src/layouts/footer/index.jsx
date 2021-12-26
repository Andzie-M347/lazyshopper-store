import { Fragment } from 'react';
import { Copyrights } from './copyrights';
import { Newsletter } from './newsletter';

import { IoLocationOutline } from 'react-icons/io5';
import { GoDeviceMobile } from 'react-icons/go';

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
                    <h4 className='footer-herading'>Information</h4>
                    <div className='footer-links'>
                      <div className='footer-row'>
                        <ul className='align-items-center'>
                          <li className='li'>
                            <a className='single-link' href='about.html'>
                              About us
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              Delivery information
                            </a>
                          </li>
                          <li className='li'>
                            <a
                              className='single-link'
                              href='privacy-policy.html'
                            >
                              Privacy Policy
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              Sales
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              Terms & Conditions
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              Shipping Policy
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              EMI Payment
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 col-lg-3 col-sm-6 mb-lm-30px'>
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
                            <a className='single-link' href='#'>
                              Returns
                            </a>
                          </li>
                          <li className='li'>
                            <a
                              className='single-link'
                              href='shop-left-sidebar.html'
                            >
                              Shipping
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='wishlist.html'>
                              Wishlist
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              How Does It Work
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              Merchant Sign Up
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='col-md-6 col-lg-2 col-sm-6 mb-sm-30px'>
                  <div className='single-wedge'>
                    <h4 className='footer-herading'>Store </h4>
                    <div className='footer-links'>
                      <div className='footer-row'>
                        <ul className='align-items-center'>
                          <li className='li'>
                            <a className='single-link' href='index.html'>
                              Affiliate
                            </a>
                          </li>
                          <li className='li'>
                            <a
                              className='single-link'
                              href='shop-left-sidebar.html'
                            >
                              Bestsellers
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              Discount
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              Latest products
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              Sale
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='#'>
                              All Collection
                            </a>
                          </li>
                          <li className='li'>
                            <a className='single-link' href='contact.html'>
                              Contact Us
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
