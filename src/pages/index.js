import React from 'react'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from '../components/layout'
import SEO from '../components/seo'


require('../styles/main.scss')

const keywords = ['adventure', 'blog', 'kayak', 'whitewater', 'trail', 'running', 'stories', 'van', 'sking'];
export default ({data}) => (
  <Layout>
    <SEO title="Home" keywords={keywords} />
    <div>
        <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
      <Img fluid={data.imageOne.childImageSharp.fluid} />
  </Layout>
)

export const query = graphql`
  query {
    imageOne: file(relativePath: { eq: "images/IMG_9906.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }`
