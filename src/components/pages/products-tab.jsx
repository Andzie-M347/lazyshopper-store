import React from 'react';
import { ImList } from 'react-icons/im';
import { RiGridFill } from 'react-icons/ri';

export const ProductTab = () => {
  return (
    <React.Fragment>
      <header className='desktop-tab'>
        <div className='shop-top-bar d-flex'>
          <div className='shop-tab nav'>
            <a className='active' href='#shop-grid' data-bs-toggle='tab'>
              <RiGridFill />
            </a>
            <a href='#shop-list' data-bs-toggle='tab'>
              <ImList />
            </a>
          </div>

          <div className='select-shoing-wrap d-flex align-items-center'>
            <div className='shot-product'>
              <p>Sort By:</p>
            </div>
            <div className='shop-select'>
              <select className='form-select shop-sort'>
                <option data-display='Default'>Default</option>
                <option value='1'> Name, A to Z</option>
                <option value='2'> Name, Z to A</option>
                <option value='3'> Price, low to high</option>
                <option value='4'> Price, high to low</option>
              </select>
            </div>
          </div>

          <div className='select-shoing-wrap d-flex align-items-center'>
            <div className='shot-product'>
              <p>Show:</p>
            </div>
            <div className='shop-select show'>
              <select className='form-select shop-sort'>
                <option data-display='12'>12</option>
                <option value='1'> 12</option>
                <option value='2'> 10</option>
                <option value='3'> 25</option>
                <option value='4'> 20</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <header className='shop-top-bar mobile-tab'>
        <div className='shop-tab nav d-flex justify-content-between'>
          <div className='shop-tab nav'>
            <a className='active' href='#shop-grid' data-bs-toggle='tab'>
              <i className='fa fa-th' aria-hidden='true'></i>
            </a>
            <a href='#shop-list' data-bs-toggle='tab'>
              <i className='fa fa-list' aria-hidden='true'></i>
            </a>
          </div>

          <div className='select-shoing-wrap d-flex align-items-center'>
            <div className='shot-product'>
              <p>Sort By:</p>
            </div>
            <div className='shop-select'>
              <select className='shop-sort'>
                <option data-display='Default'>Default</option>
                <option value='1'> Name, A to Z</option>
                <option value='2'> Name, Z to A</option>
                <option value='3'> Price, low to high</option>
                <option value='4'> Price, high to low</option>
              </select>
            </div>
          </div>
        </div>

        <div className='select-shoing-wrap d-flex align-items-center justify-content-between'>
          <div className='select-shoing-wrap d-flex align-items-center'>
            <div className='shot-product'>
              <p>Show:</p>
            </div>
            <div className='shop-select show'>
              <select className='shop-sort'>
                <option data-display='12'>12</option>
                <option value='1'> 12</option>
                <option value='2'> 10</option>
                <option value='3'> 25</option>
                <option value='4'> 20</option>
              </select>
            </div>
          </div>

          <p className='compare-product'>
            Product Compare <span>(0) </span>
          </p>
        </div>
      </header>
    </React.Fragment>
  );
};
