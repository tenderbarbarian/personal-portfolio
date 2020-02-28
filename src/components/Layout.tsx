import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import Header from './Header';
import Footer from './Footer';
import '../styles/styles.scss';
import '../styles/darkMode.scss';
import layoutStyles from './layout.module.scss';

export interface LayoutProps {
	readonly children?: React.ReactNode | React.ReactNode[];
	image?: string;
}

const Layout = ({ children, image }: LayoutProps) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
					author
					email
					linkedin
					github
					siteLogo
				}
			}
		}
	`);
	return (
		// <React.Fragment className={layoutStyles.picture}>
		<React.Fragment>
			<Header siteTitle={data.site.siteMetadata.title} />
			<div className={layoutStyles.container}>
				<div className={layoutStyles.box}>{children}</div>
				<Footer
					author={data.site.siteMetadata.author}
					email={data.site.siteMetadata.email}
					github={data.site.siteMetadata.github}
					linkedin={data.site.siteMetadata.linkedin}
				/>
			</div>
		</React.Fragment>
	);
};

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
