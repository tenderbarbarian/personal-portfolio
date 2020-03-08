import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import DarkModeToggle from './DarkModeToggle';
import logo from '../images/favicon.ico';
import headerStyles from './header.module.scss';
import './Header.scss'; // darkmode styles

interface HeaderProps {
	siteTitle: string;
}

const Header = ({ siteTitle }: HeaderProps) => (
	<header className={headerStyles.header}>
		<div className={headerStyles.toggleContainer}>
			<DarkModeToggle />
		</div>
		<nav>
			<ul className={headerStyles.navList}>
				{logo && (
					<Link to="/">
						<img src={logo} className={headerStyles.logo} alt={siteTitle} />
					</Link>
				)}
				<li>
					<Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
						Home
					</Link>
				</li>
				<li>
					<Link to="/projects/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
						Projects
					</Link>
				</li>
				<li>
					<Link to="/cv/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
						CV
					</Link>
				</li>
				<li>
					<Link to="/contact/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
						Contact
					</Link>
				</li>
			</ul>
		</nav>
	</header>
);

Header.propTypes = {
	siteTitle: PropTypes.string
};

Header.defaultProps = {
	siteTitle: `portfolio`
};

export default Header;
