import { PageHeader } from '../../components/header/Header';
import products from '../../data/products.json';
import { Product } from '../../components/home/Product';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import Slider from 'react-slick';

function Arrow(props) {
  let className = props.type === 'next' ? 'nextArrow' : 'prevArrow';
  className += ' arrow';
  const char =
    props.type === 'next' ? (
      <div className='swiper-button-next'>
        <BsChevronRight />
      </div>
    ) : (
      <div className='swiper-button-prev'>
        <BsChevronLeft />
      </div>
    );
  return (
    <span className={className} onClick={props.onClick}>
      <div class='swiper-buttons'>{char}</div>
    </span>
  );
}

export const WeeklyProducts = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='product-area'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <PageHeader
              title='Weekly Products'
              subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt ut labore et dolore magna aliqua.'
            />
          </div>

          <div className='row'>
            <div className='col'>
              <div className='new-product-slider swiper-container slider-nav-style-1 pb-100px swiper-container-initialized swiper-container-horizontal'>
                <Slider
                  {...settings}
                  nextArrow={<Arrow type='next' />}
                  prevArrow={<Arrow type='prev' />}
                >
                  {products.map((product) => (
                    <Product
                      key={product.id}
                      image={product.image}
                      title={product.title}
                      price={product.price}
                      rating={product.rating}
                    />
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
