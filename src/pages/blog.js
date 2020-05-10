import React from "react"
import { graphql } from "gatsby"
import PostList from "../components/postlist"
import Layout from "../components/layout"

import SEO from "../components/seo"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div>
        <h1>Meus Textos Poemas e Poesias</h1>
        <PostList dados={data}></PostList>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD,MMMM,YYYY", locale: "pt-Br")
            type
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default BlogPage
