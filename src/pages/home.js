import React from 'react';
import { Layout } from '../layouts';

// Containers
import {
  Showcase,
  Features,
  BestProducts,
  Categories,
  WeeklyProducts,
  // Testimonials,
} from '../containers/index';

export const Home = () => {
  return (
    <Layout>
      <Showcase />
      <Features />
      <BestProducts />
      <Categories />
      <WeeklyProducts />
      {/* <Testimonials /> */}
    </Layout>
  );
};
