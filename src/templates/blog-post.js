import React from "react"
import { graphql } from "gatsby"
import Texto from "../components/texto"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const tipo = post.frontmatter.type
  return (
    <Layout>
      <Texto tipo={tipo} post={post}></Texto>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        type
        date
        title
      }
    }
  }
`
