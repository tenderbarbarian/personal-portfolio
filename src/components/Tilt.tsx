import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Tilt from 'react-parallax-tilt';
import { Link } from 'gatsby';
import IconLink from '../components/IconLink';
import tiltStyles from './tilt.module.scss';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
	return (
		<Tilt
			className={tiltStyles.trackOnWindow}
			perspective={500}
			glareEnable={true}
			glareMaxOpacity={0.25}
			glarePosition="all"
			scale={scale}
			trackOnWindow={false}
			transitionSpeed={2500}
			gyroscope={true}
			tiltMaxAngleX={45}
			tiltMaxAngleY={45}
		>
			<div className={tiltStyles.innerElement}>
				<h1>{data.site.siteMetadata.author}</h1>
				<p>
					<span>Frontend developer</span>
				</p>
				<div className={tiltStyles.shape}>
					<div>
						<strong>
							<IconLink url={data.site.siteMetadata.github} icon={[ 'fab', 'github' ]} />
						</strong>
						<strong>
							<IconLink url={`mailto:${data.site.siteMetadata.email}`} icon={faEnvelope} />
						</strong>
						<strong>
							<IconLink url={data.site.siteMetadata.linkedin} icon={[ 'fab', 'linkedin' ]} />
						</strong>
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
