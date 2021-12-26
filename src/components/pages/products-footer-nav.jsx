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
            <a className='page-link' href='#'>
              <VscChevronLeft />
            </a>
          </li>
          <li className='li'>
            <a className='page-link' href='#'>
              1
            </a>
          </li>
          <li className='li'>
            <a className='page-link active' href='#'>
              2
            </a>
          </li>
          <li className='li'>
            <a className='page-link' href='#'>
              3
            </a>
          </li>
          <li className='li'>
            <a className='page-link' href='#'>
              <VscChevronRight />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
