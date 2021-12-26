export const Category = ({ category, title, subtitle, link, image }) => {
  return (
    <div className='single-banner'>
      <img src={image} alt={title} />
      <div className='banner-content'>
        <span className='category'>{category}</span>
        <span className='title'>
          {title} <br />& {subtitle}
        </span>
        <a href={link} className='shop-link btn btn-primary text-uppercase'>
          Shop Now
        </a>
      </div>
    </div>
  );
};
