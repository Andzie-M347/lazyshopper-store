import { Fragment } from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      <main className='lzs-main'>{children}</main>
      <Footer />
    </Fragment>
  );
};
