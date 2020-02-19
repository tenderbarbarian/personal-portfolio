import React from 'react';
import { Link } from 'gatsby';
import cardStyles from './card.module.scss';

export type Frontmatter = {
  title: string;
  date?: string;
  code?: string;
  demo?: string;
  tech: string[];
  description?: string;
  featuredImage?: {
    childImageSharp: any;
  };
};

export type Node = {
  html: string;
  frontmatter: Frontmatter;
  fields: {
    slug: string;
    layout?: string;
  };
};
interface CardProps {
  node: Node;
}
export const Card = ({ node }: CardProps) => {
  const {
    title,
    demo,
    code,
    featuredImage,
    tech,
    date,
    description,
  } = node.frontmatter;

  return (
    <li key={title} className={cardStyles.card}>
      <div className={cardStyles.left}>
        <h2>{title}</h2>
        <div className={cardStyles.techList}>
          {tech.map(t => (
            <div key={t} className={cardStyles.cardTechItem}>
              {t}
            </div>
          ))}
        </div>
        <p className={cardStyles.cardDescription}>{description}</p>
        <div className={cardStyles.externalLinkList}>
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className={cardStyles.linkButton}
            >
              Github
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={cardStyles.linkButton}
            >
              Live demo
            </a>
          )}
          <Link to={`${node.fields.slug}`} className={cardStyles.borderButton}>
            <span>More</span>
          </Link>
        </div>
      </div>
      <div className={cardStyles.right}>
        <div className={cardStyles.imgHoverZoom}>
          <Link to={`${node.fields.slug}`}>
            {featuredImage && (
              <img
                src={featuredImage.childImageSharp.sizes.src}
                sizes={featuredImage.childImageSharp.sizes.sizes}
              />
            )}
          </Link>
        </div>
      </div>
    </li>
  );
};

export default Card;
