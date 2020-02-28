// css: text-transform:capitalize;
export enum Tech {
	Typescript = 'typescript',
	Javascript = 'js',
	React = 'react',
	Saas = 'Sass',
	NodeJS = 'node',
	MongoDB = 'mongoDB',
	MySQL = 'MySQL',
	GraphQL = 'GraphQL',
	Express = 'express',
	Firebase = 'firebase',
	Gatsby = 'gatsby',
	NextJS = 'NextJS',
	Jest = 'Jest',
	Enzyme = 'Enzyme',
	Bootstrap = 'bootstrap',
	HTML5 = 'html5',
	Webpack = 'Webpack',
	Babel = 'babel',
	CSS3 = 'css3'
}

export enum Tech {
	Typescript = 'typescript',
	Javascript = 'js',
	React = 'library-React-blue',
	Sass = 'styling-Sass-pink',
	NodeJS = 'node',
	MongoDB = 'mongoDB',
	MySQL = 'MySQL',
	GraphQL = 'backend-GraphQL-navy',
	Express = 'express',
	Firebase = 'firebase',
	Gatsby = 'framework-Gatsby-purple',
	NextJS = 'NextJS',
	Jest = 'Jest',
	Enzyme = 'Enzyme',
	Bootstrap = 'bootstrap',
	HTML5 = 'html5',
	Webpack = 'module--bundler-Webpack-lightblue',
	Babel = 'babel',
	CSS3 = 'css3',
	Npm = 'package--manager-Npm-darkred',
	Netlify = 'deployment-Netlify-aqua',
	Git = 'versioning-Git-red'
}

export interface Project {
	title: string;
	demo?: string;
	code?: string;
	description: string;
	tech?: Array<Tech>;
}

export const projects: Array<Project> = [
	{
		title: 'Expensify',
		demo: 'http://react-redux-planer.herokuapp.com/',
		code: 'https://github.com/tenderbarbarian/track-stuff-react-app',
		description:
			'App to track expenses. Includes Jest and Enzyme unit tests. Requires Google authentication to access.',
		tech: [ Tech.React, Tech.Firebase, Tech.Enzyme, Tech.Jest, Tech.SCSS, Tech.Webpack, Tech.Babel ]
	},
	{
		title: 'Blog',
		demo: 'https://optimistic-stonebraker-707e80.netlify.com/blog/null',
		code: 'https://github.com/tenderbarbarian/track-stuff-react-app',
		description: 'Headless CMS integrated with Contenful',
		tech: [ Tech.Gatsby, Tech.GraphQL, Tech.SCSS, Tech.Javascript ]
	},
	{
		title: 'Yelp Camp',
		demo: 'https://kiciakocia.herokuapp.com/',
		description: 'REST-ful CRUD hosted on Heroku. Stores data in MongoDB hosted by MongoLab',
		tech: [ Tech.Express, Tech.NodeJS, Tech.Bootstrap, Tech.Javascript, Tech.MongoDB ]
	},
	{
		title: 'Portfolio',
		demo: 'https://optimistic-stonebraker-707e80.netlify.com/blog/null',
		code: 'https://github.com/tenderbarbarian/track-stuff-react-app',
		description: 'PWA with fluid images, dark mode, data sourcing from Markdown and through GraphQL',
		tech: [ Tech.Typescript, Tech.Gatsby, Tech.GraphQL, Tech.SCSS ]
	}
];

export default projects;
