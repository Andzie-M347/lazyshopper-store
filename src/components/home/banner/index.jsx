import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import slidersData from '../../../data/slider.json';
import { SliderItem } from './slider';

export const Slider = () => {
  return (
    <div className='hero-slider swiper-container slider-nav-style-1 slider-dot-style-1'>
      <div className='swiper-wrapper'>
        <SliderItem category='-20% Off' title='Handmade' subtitle='Shop Co.' />
      </div>

      <div className='swiper-pagination swiper-pagination-white'></div>
      <div className='swiper-buttons'>
        <div className='swiper-button-next'>
          <BsChevronRight />
        </div>
        <div className='swiper-button-prev'>
          <BsChevronLeft />
        </div>
      </div>
    </div>
  );
};
