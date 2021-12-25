export const SingleBanner = ({
  titleMain,
  titleSub,
  category,
  image,
  appendClass,
}) => {
  return (
    <div className={`single-banner ${appendClass}  `}>
      <img src={image} alt='' />
      <div className='banner-content'>
        <span className='category'>{category}</span>
        <span className='title'>
          {titleMain}
          <br /> & {titleSub}
        </span>
        <a
          href='shop-left-sidebar.html'
          className='shop-link btn btn-primary text-uppercase'
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};
