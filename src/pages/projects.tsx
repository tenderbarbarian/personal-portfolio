import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import { Card, Node } from '../components/Card';
import '../utils/fontawesome';
import projectStyles from './projects.module.scss';

export type Edge = {
	node: Node;
};

export interface Content {
	edges: Node[];
}

const Projects = () => {
	// markDown query
	//(sort: { fields: date, order: DESC })
	const data = useStaticQuery(graphql`
		{
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
				edges {
					node {
						frontmatter {
							title
							demo
							code
							date
							featuredImage {
								publicURL
								size
								childImageSharp {
									sizes {
										src
									}
								}
							}
							description
							tech
						}
						fields {
							slug
							layout
						}
					}
				}
			}
		}
	`);
	// const data = useStaticQuery(graphql`
	//   {
	//     allMarkdownRemark {
	//       edges {
	//         node {
	//           html
	//           frontmatter {
	//             title
	//             date
	//             code
	//             demo
	//             tech
	//             description
	//             iframe
	//             featuredImage {
	//               childImageSharp {
	//                 sizes(maxWidth: 500, quality: 70) {
	//                   base64
	//                   aspectRatio
	//                   src
	//                   srcSet
	//                   sizes
	//                 }
	//               }
	//             }
	//           }
	//           fields {
	//             slug
	//           }
	//         }
	//       }
	//     }
	//   }
	// `);
	// markdown blog
	return (
		<Layout>
			<SEO title="Projects" />
			<ol className={projectStyles.projectList}>
				{data.allMarkdownRemark.edges.map((edge: Edge) => (
					<Card node={edge.node} key={edge.node.frontmatter.title} className={projectStyles.card} />
				))}
			</ol>
		</Layout>
	);
};

export default Projects;
