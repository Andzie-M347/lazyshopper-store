import { Link } from 'react-router-dom';
import { Product } from '../../components/home/Product';
import { PageLayout } from '../../layouts/page-layout';
import { ProductTab } from '../../components/pages/products-tab';

import products from '../../data/products.json';
import { ProductsFooterNav } from '../../components/pages/products-footer-nav';

export const Products = () => {
  return (
    <PageLayout>
      <div className='shop-category-area pt-100px pb-100px'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <div className='sidebar-widget-image'>
                <Link to='/product/:id' className='single-banner'>
                  <img src='assets/images/banner/13.jpg' alt='' />
                </Link>
              </div>

              <ProductTab />

              {/* Products Area */}
              <div className='shop-bottom-area'>
                <div className='row'>
                  <div className='col'>
                    <div className='tab-content'>
                      <div className='tab-pane fade show active' id='shop-grid'>
                        <div className='row mb-n-30px'>
                          {products.map((product) => (
                            <div
                              className='col-md-4 col-sm-6 col-xs-6 mb-30px'
                              data-aos='fade-up'
                              data-aos-delay='600'
                              key={product.id}
                            >
                              <Product
                                image={product.image}
                                title={product.title}
                                price={product.price}
                                rating={product.rating}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Breadcrumb */}
                <ProductsFooterNav />
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
