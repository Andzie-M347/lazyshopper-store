import { Category } from '../../components/home/category';

// Images Imports
import gadgets from '../../assets/images/categories/1.jpg';
import clothes from '../../assets/images/categories/2.jpg';
import beauty from '../../assets/images/categories/3.jpg';

export const Categories = () => {
  return (
    <section className='banner-area pt-100px pb-100px'>
      <div className='container'>
        <div className='row'>
          <div className='single-col'>
            <Category
              title='Flower Vase'
              subtitle='Poot'
              category='Gadgets'
              image={gadgets}
              link='shop-left-sidebar.html'
            />
          </div>
          <div className='single-col center-col'>
            <Category
              title='Wool Silk Dress'
              subtitle='Offer 2021'
              category='Clothes'
              image={clothes}
              link='shop-left-sidebar.html'
            />
          </div>
          <div className='single-col'>
            <Category
              title=' Pen Holder'
              subtitle='Poot'
              category='Beauty'
              image={beauty}
              link='shop-left-sidebar.html'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
