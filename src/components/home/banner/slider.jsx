export const SliderItem = ({ category, title, subtitle, link, image }) => {
  return (
    <div
      className='hero-slide-item slider-height-2 swiper-slide d-flex'
      style={{
        backgroundImage: `url(${image})`,
        width: '876px',
        transition: 'all 0ms ease 0s',
        opacity: 1,
      }}
    >
      <div className='hero-slide-content hero-slide-content-2 slider-animated-1 slider-animated-2 text-start align-self-center pl-80px'>
        <span className='category'>{category}</span>
        <h2 className='title-1'>
          {title} <br /> {subtitle}
        </h2>
        <a href={link} className='btn btn-primary text-uppercase'>
          Shop Now
        </a>
      </div>
    </div>
  );
};
