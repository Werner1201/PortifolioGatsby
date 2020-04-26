import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import RepoCard from "../components/repoCard"
import Grid from "../components/grid"

import SEO from "../components/seo"

const PortifolioPage = () => {
  const reposData = useStaticQuery(graphql`
    query {
      github {
        user(login: "Werner1201") {
          repositories(orderBy: { field: NAME, direction: ASC }, last: 51) {
            totalCount
            edges {
              node {
                id
                name
                url
                primaryLanguage {
                  name
                }
                description
                createdAt
                defaultBranchRef {
                  target {
                    ... on GitHub_Commit {
                      id
                      committedDate
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const repos = reposData.github.user.repositories.edges
  const list = populateGrid(repos)
  return (
    <Layout>
      <SEO title="portfolio" />
      <Grid>{list}</Grid>
    </Layout>
  )
}

const populateGrid = repos => {
  console.log(repos)
  let list = repos.map(repo => (
    <a style={{ textDecoration: "none" }} href={repo.node.url}>
      <RepoCard repo={repo}></RepoCard>
    </a>
  ))
  return list
}

export default PortifolioPage
