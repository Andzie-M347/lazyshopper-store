import { Product } from '../../components/home/Product';
import { PageHeader } from '../../components/header/Header';

import products from '../../data/products.json';

export const BestProducts = () => {
  return (
    <section className='product-area pt-100px'>
      <div className='container'>
        <div className='row'>
          <PageHeader
            title='Best Products'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua.'
          />
        </div>

        {/* .Products */}
        <div className='row'>
          {products.map((product) => (
            <div
              className='col-lg-4 col-xl-3 col-md-6 col-sm-6 col-xs-6 mt-5 mb-md-30px mb-lm-30px'
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
      </div>{' '}
    </section>
  );
};
