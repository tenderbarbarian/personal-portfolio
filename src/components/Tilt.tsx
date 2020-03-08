import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Tilt from 'react-parallax-tilt';
import { Link } from 'gatsby';
import IconLink from '../components/IconLink';
import tiltStyles from './tilt.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import useDarkMode from 'use-dark-mode';

// const DarkModeStatus = () => {
//   const { value } = useDarkMode(false);

//   return value ? 'Dark Mode' : 'Light Mode';
// };

// export default DarkModeStatus;

const Parallax = () => {
	const [ scale, setScale ] = useState(1.15);
	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					author
					email
					linkedin
					github
				}
			}
		}
	`);
	const { value } = useDarkMode(false);
	// console.log(value);

	return (
		<Tilt
			className={tiltStyles.trackOnWindow}
			perspective={500}
			glareEnable={true}
			glareMaxOpacity={0.8}
			glarePosition="top"
			scale={scale}
			trackOnWindow={false}
			transitionSpeed={2500}
			gyroscope={true}
			tiltMaxAngleX={45}
			tiltMaxAngleY={45}
		>
			<div className={tiltStyles.innerElement}>
				<h1>
					<strong>{data.site.siteMetadata.author}</strong>
				</h1>
				<p>Frontend developer</p>
				<div className={tiltStyles.shape}>
					<div>
						<strong>
							<IconLink url={data.site.siteMetadata.github} icon={[ 'fab', 'github' ]} text="github" />
						</strong>
						<strong>
							<IconLink url={`mailto:${data.site.siteMetadata.email}`} icon={faEnvelope} text="email" />
						</strong>
						<strong>
							<IconLink
								url={data.site.siteMetadata.linkedin}
								icon={[ 'fab', 'linkedin' ]}
								text="linkedin"
							/>
						</strong>
					</div>
				</div>
				<div className={tiltStyles.featuredLinks}>
					<Link to="/projects/" className={tiltStyles.tiltButton}>
						<span>Projects</span>
					</Link>
					<Link to="/cv/" className={tiltStyles.tiltButton}>
						<span>CV</span>
					</Link>
				</div>
			</div>
		</Tilt>
	);
};

export default Parallax;
