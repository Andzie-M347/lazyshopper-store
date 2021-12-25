import doily from '../../assets/images/banner/7.jpg';
import flower from '../../assets/images/banner/8.jpg';
import { Slider } from '../../components/home/banner';
import { SingleBanner } from '../../components/home/banner/single-banner';

export const Showcase = () => {
  return (
    <div className='section bg-color1 ptb-30px slider-banner'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-8 col-lg-8 col-md-12 col-sm-12'>
            <Slider />
          </div>
          <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 responsive-flex'>
            <SingleBanner
              image={doily}
              titleMain='Doily Dream'
              titleSub='Catcher'
              category='Best Seller'
            />

            <SingleBanner
              appendClass='mt-25px'
              image={flower}
              titleMain='Flower Vase'
              titleSub='Poot'
              category='Best Seller'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
