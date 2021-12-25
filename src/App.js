import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SEO from './components/seo';
import { Home } from './pages';

const App = () => {
  return (
    <Fragment>
      <SEO title='Lazyshopper — Everyday. Couch . Shopping' />
      <Router>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
