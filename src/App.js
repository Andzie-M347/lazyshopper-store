import { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import SEO from './components/seo';
import { Home, Checkout, Products, ProductDetails } from './pages';

import ScrollTop from './components/footer/scrollTop';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 80,
      duration: 1000,
      once: true,
      easing: 'ease',
    });
    AOS.refresh();
  }, []);

  return (
    <Fragment>
      <SEO title='Lazyshopper — Everyday. Couch . Shopping' />

      <Router>
        <ScrollTop />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/checkout/' exact element={<Checkout />} />
          <Route path='/products/' exact element={<Products />} />
          <Route path='/product/:slug' exact element={<ProductDetails />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
