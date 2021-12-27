import React, { useState } from 'react';
import { GoMailRead } from 'react-icons/go';

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  return (
    <div className='newsletter-area '>
      <div className='container line-shape-bottom'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <div className='newsletter-content mb-lm-30px'>
              <GoMailRead />
              <div className='newsletter-text'>
                <h3 className='title'>Newsletter & Get Updates</h3>
                <p>Sign up for our newsletter to get update from us</p>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <div className='news-letter-form'>
              <div id='mc_embed_signup' className='subscribe-form'>
                <form
                  id='mc-embedded-subscribe-form'
                  className='validate'
                  noValidate=''
                >
                  <div id='mc_embed_signup_scroll' className='mc-form'>
                    <input
                      className='email'
                      type='email'
                      required=''
                      placeholder='Enter Your Mail Here.......'
                      name='EMAIL'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <div className='clear'>
                      <button
                        id='mc-embedded-subscribe'
                        className='button'
                        type='submit'
                        name='subscribe'
                      >
                        {' '}
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
