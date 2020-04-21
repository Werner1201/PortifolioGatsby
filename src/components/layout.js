import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import layoutStyle from "./layout.module.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  return (
    <div className={layoutStyle.wrapper}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className={layoutStyle.pagebody}>
        <main>{children}</main>
      </div>
      <Footer data={data.site.siteMetadata}></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
