import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá!</h1>
    <p>Seja bem-vindo ao meu site, construído em Gatsby</p>
    <p>Sinta se livre para navegar em todos os links disponíveis</p>
  </Layout>
)

export default IndexPage
