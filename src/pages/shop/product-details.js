import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PageLayout } from '../../layouts/page-layout';

import products from '../../data/products.json';
import { truncate } from '../../utils/helpers';
import Slider from 'react-slick';

// Icons
import { IoIosStar, IoIosHeartEmpty } from 'react-icons/io';
import { BsCheck2Circle } from 'react-icons/bs';

export const ProductDetails = () => {
  const { slug } = useParams();
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    const _products = products.find((product) => product.slug === slug);

    setDetail(_products);
  }, [detail]);

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  useEffect(() => {
    setNav1(slider1);
    setNav2(slider2);
  });

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav',
  };

  const settingsThumbs = {
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '10px',
  };

  return (
    <PageLayout>
      <section className='product-details-area pt-100px pb-100px'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-5 col-sm-12 col-xs-12 mb-lm-30px mb-md-30px mb-sm-30px'>
              <div className='swiper-container zoom-top'>
                <div className='swiper-wrapper'>
                  <div className='swiper-slide zoom-image-hover'>
                    {detail.images && (
                      <React.Fragment>
                        <Slider
                          {...settingsMain}
                          asNavFor={nav2}
                          ref={(slider) => setSlider1(slider)}
                        >
                          {detail.images.map((item) => (
                            <div className='slick-slide' key={item.id}>
                              <img
                                className='img-responsive m-auto'
                                src={process.env.PUBLIC_URL + `/${item.image}`}
                              />
                            </div>
                          ))}
                        </Slider>
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
              <div className='swiper-container mt-20px zoom-thumbs '>
                <div className='swiper-wrapper'>
                  {detail.images && (
                    <Slider
                      {...settingsThumbs}
                      asNavFor={nav1}
                      ref={(slider) => setSlider2(slider)}
                    >
                      {detail.images.map((item) => (
                        <div className='slick-slide' key={item.id}>
                          <div
                            className='swiper-slide'
                            style={{
                              width: '140.8px',
                              marginRight: '18px',
                              marginLeft: '18px',
                            }}
                          >
                            <img
                              className='img-responsive m-auto'
                              src={process.env.PUBLIC_URL + `/${item.image}`}
                              alt={item.id}
                            />
                          </div>
                        </div>
                      ))}
                    </Slider>
                  )}
                </div>
              </div>
            </div>
            <div
              className='col-lg-7 col-sm-12 col-xs-12'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div className='product-details-content quickview-content ml-25px'>
                <h2>{detail.title} </h2>
                <div className='pricing-meta'>
                  <ul className='d-flex'>
                    <li className='new-price'>R{detail.price}</li>

                    {detail.oldPrice && (
                      <li className='old-price'>
                        <del>{detail.oldPrice}</del>
                      </li>
                    )}
                  </ul>
                </div>
                <div className='pro-details-rating-wrap'>
                  <div className='rating-product'>
                    {Array(detail.rating)
                      .fill()
                      .map((_, i) => (
                        <IoIosStar key={i} />
                      ))}
                  </div>
                  <span className='read-review'>
                    <a className='reviews' href='#'>
                      ( 2 Review )
                    </a>
                  </span>
                </div>
                <div className='stock mt-30px'>
                  <span className='avallabillty'>
                    Availability:{' '}
                    <span className='in-stock'>
                      <BsCheck2Circle /> In Stock
                    </span>
                  </span>
                </div>
                <div className='pro-details-quality'>
                  <div className='cart-plus-minus'>
                    <div className='dec qtybutton'>-</div>
                    <input
                      className='cart-plus-minus-box'
                      type='text'
                      name='qtybutton'
                      value='1'
                    />
                    <div className='inc qtybutton'>+</div>
                  </div>
                  <div className='pro-details-cart'>
                    <button className='add-cart'> Add To Cart</button>
                  </div>
                  <div className='pro-details-compare-wishlist pro-details-wishlist '>
                    <a href='wishlist.html'>
                      <IoIosHeartEmpty />
                    </a>
                  </div>
                </div>
                <div className='pro-details-categories-info pro-details-same-style d-flex'>
                  <span>Categories: </span>
                  <ul className='d-flex'>
                    <li>
                      <Link to={`/categories/${detail.category}`}>
                        <span className='rating-wrap'>{detail.category}</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='pro-details-social-info pro-details-same-style d-flex'>
                  <span>Share: </span>
                  <ul className='d-flex'>
                    <li>
                      <a href='#'>
                        <i className='fa fa-facebook'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-google'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-youtube'></i>
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <i className='fa fa-instagram'></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
