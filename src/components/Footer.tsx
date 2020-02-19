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
			Built with React, Typescript, Sass, GraphQL and Gatsby by {author}, © {new Date().getFullYear()}{' '}
		</div>
		<div>
			<IconLink url="https://github.com/tenderbarbarian" icon={[ 'fab', 'github' ]} />
			<IconLink url="mailto:ksoloduc@gmail.com" icon={faEnvelope} />
			<IconLink url="https://www.linkedin.com/in/katarzynasoloducha/" icon={[ 'fab', 'linkedin' ]} />
		</div>
	</footer>
);

export default Footer;
