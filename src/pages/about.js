import React from "react"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const AboutPage = () => {
  let objeto = {
    img: "https://avatars3.githubusercontent.com/u/8631657?v=4",
    title: "Werner Römling Salustiano",
    description:
      "Estudante da Graduação de Sistemas da Informação na Universidade Estácio, Graduado em Tecnólogo em Analise e Desenvolvimento de Sistemas pela Unigranrio. Cristão Pentecostal, Entusiasta do Software Livre e Escritor de Poemas e Poesias nas Horas vagas.",
  }
  return (
    <Layout>
      <SEO title="about" />
      <h1>Resumo Sobre mim.</h1>
      <Card obj={objeto}></Card>
      <br></br>
      <h2>Detalhes sobre mim</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque autem
        alias incidunt nesciunt. Delectus dolorum, itaque animi saepe non
        ducimus libero aliquam atque sapiente ratione omnis mollitia, voluptates
        impedit iste? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Officiis, omnis numquam? Corporis quo quod consequatur, repudiandae
        animi cumque eius accusantium aliquid sed dolores velit quis officiis,
        soluta odit. Atque, illo? Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Rerum aliquid necessitatibus omnis voluptatum
        praesentium sunt ipsam error, quasi ut corporis perspiciatis deleniti
        aliquam expedita? Hic quae dolorum corrupti dolores maxime? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Voluptatum provident
        exercitationem deleniti eveniet nobis id saepe. Corrupti, eaque expedita
        officia dolore repellat ipsa, quia blanditiis molestias nostrum saepe
        exercitationem ut.
      </p>
    </Layout>
  )
}

export default AboutPage
