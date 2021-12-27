import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

export const ProductsFooterNav = () => {
  return (
    <nav
      className='pro-pagination-style text-center text-lg-end mb-0'
      data-aos='fade-up'
      data-aos-delay='200'
    >
      <div className='pages'>
        <ul>
          <li className='li'>
            <a className='page-link' href='http://'>
              <VscChevronLeft />
            </a>
          </li>
          <li className='li'>
            <a className='page-link' href='http://'>
              1
            </a>
          </li>
          <li className='li'>
            <a className='page-link active' href='http://'>
              2
            </a>
          </li>
          <li className='li'>
            <a className='page-link' href='http://'>
              3
            </a>
          </li>
          <li className='li'>
            <a className='page-link' href='http://'>
              <VscChevronRight />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
