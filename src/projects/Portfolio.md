---
layout: page
title: 'Katarzyna Pohl - Portfolio'
code: 'https://github.com/tenderbarbarian/personal-portfolio'
description: 'PWA with fluid images, dark mode, data sourcing from Markdown and through GraphQL'
tech: ["React", "Typescript", "Gatsby", "GraphQL", "Sass"]
date: '2020-01-06'
featuredImage: "./portfolio1.jpg"
---
<!-- # iframe: 'https://www.youtube.com/embed/dQw4w9WgXcQ' -->
__Table of content:__
<!-- TOC -->

- [What it it?](#what-it-it)
- [Core technologies](#core-technologies)
- [Highly optimized](#highly-optimized)
- [Responsive](#responsive)
- [PWA](#pwa)
- [Syntax highlighting](#syntax-highlighting)
- [Dark mode](#dark-mode)
- [GraphQL & Markdown](#graphql--markdown)
- [Parallax Tilt Effect](#parallax-tilt-effect)
- [Contact form](#contact-form)
- [Speedy, optimized, responsive images](#speedy-optimized-responsive-images)

<!-- /TOC -->

## What it it?

This is a feature-rich portfolio project; with many things like SEO, speedy, optimized images or responsive design for all devices (mobile, tablet and desktop) already implemented and some more to come. Let's take a look at all the available features:

## Core technologies
<p>
    <img src="https://img.shields.io/badge/library-React-blue?style=flat&logo=react" />
    <img src="https://img.shields.io/badge/framework-Gatsby-purple?style=flat&logo=gatsby" />
    <img src="https://img.shields.io/badge/styling-Sass-pink?style=flat&logo=Sass" />
    <img src="https://img.shields.io/badge/backend-GraphQL-navy?style=flat" />
    <img src="https://img.shields.io/badge/module--bundler-Webpack-lightblue?style=flat&logo=webpack" />
    <img src="https://img.shields.io/badge/package--manager-Npm-darkred?style=flat&logo=npm" />
    <img src="https://img.shields.io/badge/deployment-Netlify-aqua?style=flat&logo=Netlify" />
    <img src="https://img.shields.io/badge/versioning-Git-red?style=flat&logo=Git" />
</p>

## Highly optimized

Despite being heavily SEO optimized performance and accessibility have also been a major factor when implementing this portfolio. This leads to a great Lighthouse result.

## Responsive

This portfolio is optimized for phones, tablets and desktops. The styling is done with CSS3 postprocessor Sass.

## PWA

Implements Progressive Web Apps features (i.e. offline capability). With the help of manifest and web workers we get a product that functions offline and where wifi is unreliable. 

## Syntax highlighting
Code properly formatted is automatically highlighted with Prism. The code lines are numbered and languages labeled for clarity.

Which gives us the following effect: 

~~~javascript
class Person {
    constructor() {
        this.name = "Katarzyna Pohl";
        this.traits = ["DESIGN", "CODE", "CREATE"];
    }
    fun() {
        do{
            enjoy();
        } while( coding || drawing == play);
    }
}
~~~


## Dark mode

Strained eyes? DarkMode to the rescue! By implementing a custom `use-dark-mode` React Hook and `.dark-mode` and `.light-mode` css classes, I've arrived at the two different switchable styles. After adding a toggle switch on the right side of the header, we get a fully functioning customizable dark/light mode. 

## GraphQL & Markdown
To glue it all the site relies on GraphQL. It queries the content, and generates static pages  from markdown files (the .md files are located in the `src/projects` directory). Static pages are linked automatically, and they have ability to embed responsive video as well as codepen components if needed. 

## Parallax Tilt Effect
Hopefully, you enjoyed playing with the tilt card on home page, I know I did. It's intended to be fun and playful. And honestly I had great time implementing it as well.
![portfolioCard](./portfolio.jpg)

Curious as to how it works behind the scenes? 

In order to achieve the 3d parallax effect, there are two things that work in tandem: `react-parallax-tilt`  npm module and css styling. `react-parallax-tilt` does all the heavy lifting and computations, while css is the icing on top that deepens the 3D effect.

This bit of css elevates inner HTML from the surface of the card: 

```css
transform: translateZ(60px);
transform-style: preserve-3d;
```
And below the card there's an additional shadow: 
```css
box-shadow: -2px -2px 2px rgba(224, 223, 223, 0.1), 3px 3px 10px 1px rgba(36, 36, 36, 0.2);
```

## Contact form

Super light weight form uses a tiny `react-hook-form` library definitely improved my process of arriving at a super light weight great preforming contact form. In comparison, Redux-form and Formik give a less pleasant developer experience and trigger more rerendering.

## Speedy, optimized, responsive images

I've been playing with `gatsby-image`. It is a React component specially designed to work seamlessly with Gatsby’s GraphQL queries. It combines Gatsby’s native image processing capabilities (pretty slick) with advanced image loading techniques to easily and completely optimize image loading. 

Typically large, unoptimized images dramatically slow down a site. With `gatsby-image` I wrote a GraphQL query which creates multiple thumbnails with optimized JPEG and PNG compression. 

```JSX
const Image = () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "cv.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
  />
);
```

The gatsby-image component automatically sets up the “blur-up” effect as well as lazy loading of images further down the screen. And then it displays to the user different images at different breakpoints, it's pretty sweet.

If you'd like to learn more or have any questions please feel free to contact me.
Oh, and feel free to give it star on GitHub if you like.