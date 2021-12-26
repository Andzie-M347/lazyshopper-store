import { Link } from 'react-router-dom';

import { payfast, visa, mastercard } from './payments.data';

export const Copyrights = () => {
  return (
    <div className='footer-bottom'>
      <div className='container'>
        <div className='line-shape-top'>
          <div className='row flex-md-row-reverse align-items-center'>
            <div className='col-md-6 text-center text-md-end'>
              <div className='payment-mth'>
                {/* <ul>
                  <li>
                    <img src={payfast} alt='' />
                  </li>
                  <li>
                    <img src={visa} alt='' />
                  </li>
                  <li>
                    <img src={mastercard} alt='' />
                  </li>
                </ul> */}
              </div>
            </div>
            <div className='col-md-6 text-center text-md-start'>
              <p className='copy-text'>
                &copy; {new Date().getFullYear()}
                <Link className='company-name' to='/'>
                  <strong> Lazyshopper</strong>
                </Link>
                . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
