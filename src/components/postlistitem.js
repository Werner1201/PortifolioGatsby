import React from "react"
import { Link } from "gatsby"

// import { Container } from './styles';

function PostListItem({ node }) {
  const diaMesAno = node.frontmatter.date.split(",")
  return (
    <div key={node.id}>
      <Link to={node.fields.slug}>
        <h3>
          {node.frontmatter.title}
          {"  "}{" "}
          <span>
            — {`${diaMesAno[0]} de ${diaMesAno[1]} de ${diaMesAno[2]}`} —
          </span>
          <span>{` ${node.frontmatter.type}`}</span>
        </h3>
        <p>{node.excerpt}</p>
      </Link>
    </div>
  )
}

export default PostListItem
