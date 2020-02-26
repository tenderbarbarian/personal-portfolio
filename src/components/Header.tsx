import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import DarkModeToggle from './DarkModeToggle';
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
				<li>
					<Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
						<span>Home</span>
					</Link>
				</li>
				<li>
					<Link to="/projects/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
						<span>Projects</span>
					</Link>
				</li>
				<li>
					<Link to="/cv/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
						<span>CV</span>
					</Link>
				</li>
				<li>
					<Link to="/contact/" className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem}>
						<span>Contact</span>
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
	siteTitle: ``
};

export default Header;
