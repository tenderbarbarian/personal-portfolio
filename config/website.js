const meta = {
  // Metadata
  author: 'Katarzyna Pohl',
  siteTitle: 'Katarzyna Pohl',
  siteDescription: 'Katarzyna Pohl - Frontend web developer.',
  siteTitleAlt: 'Katarzyna Pohl - Frontend web dev',
  siteShortName: 'Pohl',
  siteUrl: 'https://github.com/tenderbarbarian',
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'kasiapohl',
  googleAnalyticsID: '',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
};

module.exports = website;
