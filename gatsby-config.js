const config = require('./config/website');

module.exports = {
	siteMetadata: {
		author: config.author,
		title: config.siteTitle,
		description: config.siteDescription,
		twitter: config.twitter,
		siteUrl: config.siteUrl,
		siteLogo: config.siteLogo,
		siteBanner: config.siteBanner
	},
	plugins: [
		`gatsby-plugin-typescript`,
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `darkorange`,
				showSpinner: false
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `src`,
				path: `${__dirname}/src/`,
				ignore: [ `**/\.*` ] // ignore files starting with a dot
			}
		},
		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					`gatsby-remark-embedder`,
					{
						resolve: `gatsby-remark-autolink-headers`,
						options: {
							className: `gatsby-remark-autolink`,
							// offsetY: `100`,
							maintainCase: true,
							removeAccents: true
						}
					},
					{
						resolve: `gatsby-remark-prismjs`,
						options: {
							// classPrefix: 'language-',
							inlineCodeMarker: null,
							aliases: {},
							showLineNumbers: true,
							noInlineHighlight: false
						}
					},
					'gatsby-remark-relative-images',
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 1200,
							linkImagesToOriginal: false
						}
					}
				]
			}
		},
		`gatsby-transformer-sharp`,
		'gatsby-plugin-scss-typescript',
		`gatsby-plugin-sharp`,
		`gatsby-plugin-catch-links`,
		'gatsby-plugin-use-dark-mode',
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `KatarzynaPohl-Portfolio`,
				short_name: `pohl`,
				start_url: `/`,
				background_color: `#663399`,
				theme_color: `#663399`,
				display: `minimal-ui`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				appendScript: require.resolve('./src/service-worker.js')
			}
		}
	]
};
