import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from './components/seo';
import { Home, Checkout, Products } from './pages';

const App = () => {
  return (
    <Fragment>
      <SEO title='Lazyshopper — Everyday. Couch . Shopping' />
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/checkout/' exact element={<Checkout />} />
          <Route path='/products/' exact element={<Products />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
