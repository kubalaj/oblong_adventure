import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

require('./blog-post.scss')

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h2 className="post-title">{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
