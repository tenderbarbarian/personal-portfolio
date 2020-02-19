import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Image from '../components/Image';
import { Link } from 'gatsby';
import cvStyles from './cv.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CV = () => (
  <Layout>
    <SEO title="CV" />

    <div className={cvStyles.downloadSection}>
      <h2>Cirriculum vitae</h2>
      <a
        href="/documents/KatarzynaPohl-CV.pdf"
        download=""
        className={cvStyles.linkButton}
      >
        Download PDF <FontAwesomeIcon icon={faDownload} />
      </a>
    </div>

    <div className={cvStyles.cvHolder}>
      <Image />
    </div>

    <div className={cvStyles.callToAction}>
      <h3>Questions?</h3>
      <Link to="/contact/" className={cvStyles.linkButton}>
        Contact me
      </Link>
    </div>
  </Layout>
);

export default CV;
