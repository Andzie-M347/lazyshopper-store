import { Product } from '../../components/home/Product';
import { Header } from '../../components/header/Header';

import products from '../../data/products.json';

export const BestProducts = () => {
  return (
    <section className='product-area pt-100px'>
      <div className='container'>
        <div className='row'>
          <Header
            title='Best Products'
            subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod incididunt ut labore et dolore magna aliqua.'
          />
        </div>

        {/* .Products */}
        <div className='row'>
          {products.map((product) => (
            <Product
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>{' '}
    </section>
  );
};
