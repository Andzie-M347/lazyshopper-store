import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// import slidersData from '../../../data/slider.json';
import { SliderItem } from './slider';

import image from '../../../assets/images/banner/slider-bg-2-2.jpg';

import Slick from 'react-slick';

const Arrow = (props) => {
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
};

export const Slider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='hero-slider swiper-container slider-nav-style-1 slider-dot-style-1'>
      <div className='swiper-wrapper'>
        <Slick
          {...settings}
          nextArrow={<Arrow type='next' />}
          prevArrow={<Arrow type='prev' />}
        >
          <SliderItem
            category='-20% Off'
            title='Handmade'
            subtitle='Shop Co.'
            image={image}
          />
          <SliderItem
            category='-20% Off'
            title='Handmade'
            subtitle='Shop Co.'
            image={image}
          />
        </Slick>
      </div>

      <div className='swiper-pagination swiper-pagination-white'></div>
    </div>
  );
};
