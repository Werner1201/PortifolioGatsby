import React from "react"

import Layout from "../components/layout"

import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Olá! Seja Bem-vindo!</h1>
    <p>
      Este site foi totalmente construído em React, usando Gatsby como seu motor
      de construção de Site Estático.
    </p>
    <p>
      <strong>
        A definição desse site é: Um Lugar onde posso mostrar o que sei, faço e
        penso. Seja profissional, casual ou artístico.
      </strong>
    </p>
    Possui um design minimalista, com o intuito de ser usado por mim como um
    site pessoal, diferentemente de muitos portifólios, onde o criador o faz
    apenas como enfeite em sua Página do Github.
    <br />
    <br />
    <h2>Um site pessoal</h2>
    <p>
      Como anteriormente foi dito, possuo o desejo de utilizar o mesmo como um
      repositório tanto de projetos profissionais quanto artisticos, como
      Poemas, poesias e Textos pessoais.
    </p>
    Em Meu Blog porei tais Poemas, Poesias e Textos como um diário de meus
    pensamentos, e registro dos meus feitos. <br />
    <br />
    Em Meu Portfólio há uma requisição a API do Github para resgatar uma lista
    de meus repositórios e projetos que estarão em cards onde podem ser
    visualizados ao clicar tanto no Github quanto no site em si.
    <br />
    <br />E por fim na página Sobre, existem mais detalhes sobre mim, minha
    jornada, gostos e planos futuros.
  </Layout>
)

export default IndexPage
