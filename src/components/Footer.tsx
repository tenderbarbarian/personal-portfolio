import React from 'react';
import '../utils/fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import IconLink from './IconLink';
import footerStyles from './footer.module.scss';

interface FooterProps {
	author?: string;
}
const Footer = ({ author }: FooterProps) => (
	<footer className={footerStyles.footerContainer}>
		<div>
			<p>
				Built with{' '}
				<a href="https://facebook.github.io/react/" target="_blank" rel="noopener noreferrer">
					React
				</a>, Typescript, Sass, GraphQL and{' '}
				<a href="http://gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
					Gatsby
				</a>{' '}
				by {author}, © {new Date().getFullYear()}
			</p>
			<div className={footerStyles.hostingContainer}>
				Hosted on
				<a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/b/b8/Netlify_logo.svg"
						alt="Hosted on Netlify"
					/>
				</a>
			</div>
		</div>
		<div>
			<IconLink url="https://github.com/tenderbarbarian" icon={[ 'fab', 'github' ]} />
			<IconLink url="mailto:ksoloduc@gmail.com" icon={faEnvelope} />
			<IconLink url="https://www.linkedin.com/in/katarzynasoloducha/" icon={[ 'fab', 'linkedin' ]} />
		</div>
	</footer>
);

export default Footer;
