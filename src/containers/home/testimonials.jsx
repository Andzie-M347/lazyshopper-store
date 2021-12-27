import { PageHeader } from '../../components/header/Header';

export const Testimonials = () => {
  return (
    <section className='testimonial-area pb-100px'>
      <div className='container'>
        <div className='row'>
          <PageHeader
            title='What Client Says'
            subtitle='  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua.'
          />
        </div>

        <div className='testimonial-wrapper swiper-container'>
          <div className='swiper-wrapper'>
            <div className='swiper-slide'>
              <div className='testi-inner'>
                <div className='author-img'>
                  <img src='assets/images/testimonial-image/1.png' alt='' />
                </div>
                <div className='testi-content'>
                  <p>
                    Lorem ipsum dolor sit ametju consectadipisicing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim
                  </p>
                </div>
                <div className='testi-author text-center'>
                  <div className='author-name'>
                    <h4 className='name'>Britney Cooper</h4>
                    <span className='title'>Client-HRO</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='swiper-buttons'>
            <div className='swiper-button-next'></div>
            <div className='swiper-button-prev'></div>
          </div>
        </div>
      </div>
    </section>
  );
};
