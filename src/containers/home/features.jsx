import React from 'react';
import features from '../../data/features.json';

export const Features = () => {
  return (
    <div className='feature-area pt-100px'>
      <div className='container'>
        <div className='feature-wrapper'>
          {features.map((feature) => (
            <div className='single-feture-col' key={feature.id}>
              <div className='single-feature'>
                <div className='feature-icon'>
                  <img src={process.env.PUBLIC_URL + feature.icon} alt='' />
                </div>
                <div className='feature-content'>
                  <h4 className='title'>{feature.title}</h4>
                  <span className='sub-title'>{feature.description}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
