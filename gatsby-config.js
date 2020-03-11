const config = require('./config/website');

module.exports = {
	siteMetadata: {
		author: config.author,
		title: config.siteTitle,
		email: config.email,
		linkedin: config.linkedin,
		github: config.github,
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
				color: `black`,
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
							maintainCase: false,
							removeAccents: true
						}
					},
					{
						resolve: `gatsby-remark-prismjs`, // should be placed after `gatsby-remark-autolink-headers`
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
			resolve: `gatsby-plugin-scroll-indicator`,
			options: {
				// Configure color of the scroll indicator
				// color: '#fc7c04',
				color: 'linear-gradient(to right, #fc01a8, #ffc400 60%, #fc7c04)',
				// Height of the scroll indicator
				height: '10px',
				// Configure paths where the scroll indicator will appear
				paths: [ '/projects/**' ],
				// Configure the z-index of the indicator element
				zIndex: `9999`
			}
		},
		{
			resolve: `gatsby-plugin-manifest`, //For the web app manifest to be cached, we'll need to list gatsby-plugin-manifest BEFORE gatsby-plugin-offline.
			options: {
				name: `KatarzynaPohl-Portfolio`,
				short_name: `pohl`,
				start_url: `/`,
				background_color: `#3c474b`,
				theme_color: `#fc7c04`,
				display: `standalone`,
				icon: `src/images/favicon.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-offline`,
			options: {
				appendScript: require.resolve('./src/service-worker.js')
			}
		}
		// `gatsby-plugin-remove-serviceworker`
	]
};
