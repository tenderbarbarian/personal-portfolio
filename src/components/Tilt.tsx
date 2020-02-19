import React, { useState } from 'react';
import Tilt from 'react-parallax-tilt';
import { Link } from 'gatsby';
import IconLink from '../components/IconLink';
import tiltStyles from './tilt.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Parallax = () => {
  const [scale, setScale] = useState(1.15);

  return (
    <Tilt
      className={tiltStyles.trackOnWindow}
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.75}
      glarePosition="all"
      scale={scale}
      trackOnWindow={false}
      transitionSpeed={2500}
      gyroscope={true}
      tiltMaxAngleX={45}
      tiltMaxAngleY={45}
    >
      <div className={tiltStyles.innerElement}>
        <h1>Katarzyna Pohl</h1>
        <p>
          <span>Frontend developer</span>
        </p>
        <div className={tiltStyles.shape}>
          <div>
            <IconLink
              url="https://github.com/tenderbarbarian"
              icon={['fab', 'github']}
            />
            <IconLink
              url="mailto:katarzyna.m.pohl@gmail.com"
              icon={faEnvelope}
            />
            <IconLink
              url="https://www.linkedin.com/in/katarzynasoloducha/"
              icon={['fab', 'linkedin']}
            />
          </div>
        </div>
        <div className={tiltStyles.featuredLinks}>
          <Link to="/projects/" className={tiltStyles.linkButton}>
            Projects
          </Link>
          <Link to="/cv/" className={tiltStyles.linkButton}>
            CV
          </Link>
        </div>
      </div>
    </Tilt>
  );
};

export default Parallax;
