import React from 'react';
import Layout from '../components/Layout';
import '../utils/fontawesome';
import '../styles/styles.scss';
import SEO from '../components/SEO';
import indexStyles from './index.module.scss';
import TiltCard from '../components/Tilt';

export const IndexPage = () => {
  return (
    <div className={indexStyles.tiltContainer}>
      <TiltCard />
    </div>
  );
};

const LayoutIndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexPage />
  </Layout>
);

export default LayoutIndexPage;
