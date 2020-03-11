import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import pageStyles from './page.module.scss';

interface PageTemplateProps {
	data: {
		site: {
			siteMetadata: {
				title: string;
				description: string;
				author: string;
			};
		};
		markdownRemark: {
			html: string;
			excerpt: string;
			frontmatter: {
				title: string;
			};
		};
	};
}
const ContentTemplate: React.SFC<PageTemplateProps> = ({ data }) => (
	<Layout>
		<SEO title={data.markdownRemark.frontmatter.title} />

		<div className={pageStyles.box}>
			<div className={pageStyles.projectHeader}>
				<h1>{data.markdownRemark.frontmatter.title}</h1>
				<div>
					<a href="/projects/" className={pageStyles.borderButton}>
						<span>Back</span>
					</a>
				</div>
			</div>
			{/* eslint-disable-next-line react/no-danger */}
			<div className={pageStyles.markdown} dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
			<div className={pageStyles.topLinks}>
				{data.markdownRemark.frontmatter.code && (
					<a
						href={data.markdownRemark.frontmatter.code}
						target="_blank"
						rel="noopener noreferrer"
						className={pageStyles.borderButton}
					>
						<span>Github</span>
					</a>
				)}
				{data.markdownRemark.frontmatter.demo && (
					<a
						href={data.markdownRemark.frontmatter.demo}
						target="_blank"
						rel="noopener noreferrer"
						className={pageStyles.borderButton}
					>
						<span>Live demo</span>
					</a>
				)}
			</div>
		</div>

		<div className={pageStyles.more}>
			<Link to="/projects/" className={pageStyles.linkButton}>
				More Projects
			</Link>
		</div>
	</Layout>
);

export default ContentTemplate;

export const query = graphql`
	query PageTemplateQuery($slug: String!) {
		site {
			siteMetadata {
				title
				description
				author
			}
		}
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			excerpt
			frontmatter {
				title
				code
				demo
			}
		}
	}
`;
