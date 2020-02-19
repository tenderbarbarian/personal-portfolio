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
  const data = useStaticQuery(graphql`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            frontmatter {
              title
              date
              code
              demo
              tech
              description
              featuredImage {
                childImageSharp {
                  sizes(maxWidth: 500, quality: 70) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    sizes
                  }
                }
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  // markdown blog
  return (
    <Layout>
      <SEO title="Projects" />
      <ol className={projectStyles.projectList}>
        {data.allMarkdownRemark.edges.map((edge: Edge) => (
          <Card
            node={edge.node}
            key={edge.node.frontmatter.title}
            className={projectStyles.card}
          ></Card>
        ))}
      </ol>
    </Layout>
  );
};

export default Projects;
