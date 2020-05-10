import React from "react"
import { graphql } from "gatsby"
import PostListItem from "./postlistitem"
// import { Container } from './styles';

function PostList({ dados }) {
  return (
    <div>
      <h4>{dados.allMarkdownRemark.totalCount} Posts</h4>
      {geraLista(dados.allMarkdownRemark.edges)}
    </div>
  )
}

function geraLista(edges) {
  return edges.map(({ node }) => <PostListItem node={node}></PostListItem>)
}

export default PostList
