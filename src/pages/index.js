import React from 'react'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'


require('../styles/main.scss')

const keywords = ['adventure', 'blog', 'kayak', 'whitewater', 'trail', 'running', 'stories', 'van', 'sking'];
export default ({data}) => (
  <div className="content">
    <Layout>
      <SEO title="Home" keywords={keywords} />
      <div>
          <h2 className="latest-stories">Latest Stories</h2>
            {data.allMarkdownRemark.edges.map(({ node }) => (
              <div className="post" key={node.id}>
              <div className="col">
                <Img sizes={node.frontmatter.featuredImage.childImageSharp.sizes} />
              </div>
              <div className="col content">
                <Link to={node.fields.slug}>
                  <h3>
                    {node.frontmatter.title}
                    <br />
                    <span className="date">
                    {node.frontmatter.date}
                    </span>
                  </h3>
                  <p>{node.excerpt}</p>
                </Link>
                </div>
              </div>
            ))}
        </div>
    </Layout>
  </div>
)

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            featuredImage {
                childImageSharp{
                    sizes(maxWidth: 630) {
                        ...GatsbyImageSharpSizes
                    }
                }
            }
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`
