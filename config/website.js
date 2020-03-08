const meta = {
	// Metadata
	author: 'Katarzyna Pohl',
	siteTitle: 'Katarzyna Pohl',
	siteDescription: 'Katarzyna Pohl - Frontend web developer.',
	siteTitleAlt: 'Katarzyna Pohl - Frontend web dev',
	siteShortName: 'Pohl',
	siteUrl: 'https://pohl.netlify.com',
	email: 'katarzyna.m.pohl@gmail.com',
	linkedin: 'https://www.linkedin.com/in/katarzyna-m-pohl/',
	github: 'https://github.com/tenderbarbarian'
};

const social = {
	siteLogo: `icons/icon-48x48.png`,
	siteBanner: `${meta.siteUrl}/images/social-banner.png`
};

const website = {
	...meta,
	...social,
	disqusShortName: 'kasiapohl',
	googleAnalyticsID: '',
	// Manifest
	themeColor: '#6D83F2',
	backgroundColor: '#6D83F2'
};

module.exports = website;
