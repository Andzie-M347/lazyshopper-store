import React from 'react';
import { Header } from './header';
import { Footer } from './footer';

export const PageLayout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <main className='main-app'>{children}</main>
      <Footer />
    </React.Fragment>
  );
};
