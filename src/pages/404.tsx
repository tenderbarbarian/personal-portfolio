import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import styles404 from './404.module.scss';

// import * as styles from './styles.module.scss';
// Only files that include the .module.scss extensions shall be treated as module files, and hence have typings generated at build time. .scss files shall be loaded using the regular css-loader.
const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles404.box}>
      <h1>PAGE NOT FOUND</h1>
      <p>You just hit a route that does not exist.</p>
    </div>
  </Layout>
);

export default NotFoundPage;
