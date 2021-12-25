import { IoIosHeartEmpty, IoIosGitCompare, IoIosStar } from 'react-icons/io';
import { IoEyeOutline } from 'react-icons/io5';

export const Product = ({ image, title, price, rating }) => {
  return (
    <div className='col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mb-md-30px mb-lm-30px'>
      <div className='product'>
        <div className='thumb'>
          <a href='single-product.html' className='image'>
            <img src={image} alt='Product' />
            <img className='hover-image' src={image} alt='Product' />
          </a>
          <span className='badges'></span>
          <div className='actions'>
            <a
              href='wishlist.html'
              className='action wishlist'
              title='Wishlist'
            >
              <IoIosHeartEmpty />
            </a>
            <a
              href='wishlist.html'
              className='action quickview'
              data-link-action='quickview'
              title='Quick view'
              data-bs-toggle='modal'
              data-bs-target='#exampleModal'
            >
              <IoEyeOutline />
            </a>
            <a href='compare.html' className='action compare' title='Compare'>
              <IoIosGitCompare />
            </a>
          </div>
        </div>
        <div className='content'>
          <span className='ratings'>
            <span className='rating-wrap'>
              {Array(rating)
                .fill()
                .map((_, i) => (
                  <IoIosStar key={i} />
                ))}
            </span>
            <span className='rating-num'>( 3 Review )</span>
          </span>
          <h5 className='title'>
            <a href='single-product.html'>{title}</a>
          </h5>
          <span className='price'>
            <span className='new'>R{price}</span>
          </span>
        </div>
        <button title='Add To Cart' className=' add-to-cart'>
          Add To Cart
        </button>
      </div>
    </div>
  );
};
