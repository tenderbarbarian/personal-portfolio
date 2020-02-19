import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

// import * as styles from './styles.module.scss';
// Only files that include the .module.scss extensions shall be treated as module files, and hence have typings generated at build time. .scss files shall be loaded using the regular css-loader.
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that does not exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
