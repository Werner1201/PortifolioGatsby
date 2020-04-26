import React from "react"

import Layout from "../components/layout"
import Card from "../components/card"
import SEO from "../components/seo"

const AboutPage = () => {
  let objeto = {
    img: "https://avatars3.githubusercontent.com/u/8631657?v=4",
    title: "Werner de Paula Römling Salustiano",
    description:
      "Estudante da Graduação de Sistemas da Informação na Universidade Estácio, Graduado em Tecnólogo em Analise e Desenvolvimento de Sistemas pela Unigranrio. Cristão Pentecostal, Entusiasta do Software Livre e Escritor de Poemas e Poesias nas Horas vagas.",
    detalhes1:
      "Nascido na Cidade de Duque de Caxias no Estado do Rio de Janeiro no dia 12 de Janeiro de 1999, Tive uma infância muito agradável, onde desde muito novo tenho contato com computadores, muito devido ao entusiasmo do meu pai com as mudanças tecnológicas que chegavam ao Brasil com a virada do Milênio.",
    detalhes2:
      "Sou filho de um Vendedor de Materiais para Eventos e Atualmente consultor de Vendas, com uma Professora de Português funcionária pública do Município onde vivo, com essa combinação obtive paixões sobre as artes da lógica com as artes da literatura. E nessa mistura de paixões, possuo o devido respeito a história e aos ensinamentos de Jesus Cristo como eles mesmos me ensinaram.",
    detalhes3:
      "Conforme dito, e o tempo passando fui tendo mais entendimento sobre o Cristianismo Protestante Pentecostal, Doutrina que professo e prego quando posso, e tomei as devidas providências para oficializar meu comprometimento, como aceitar Jesus como meu Senhor e Salvador e Me Batizar para morrer pro mundo e viver pra Cristo.",
    detalhes4:
      "Passou-se mais tempo, em minha adolescência estudei em uma instituição estadual pública no ensino médio, pois a área privada estava muito custosa e os prospectos de conseguir uma vaga para Universidades Públicas era maior, mal sabia eu que seria um lugar onde me ensinaria as maiores lições de conviência e de se colocar no lugar do outro que já tive, eu posso dizer que lá eu aprendi a ser mais comunicativo, e brinco que aprendi a viver.",
    detalhes5:
      "Depois do Ensino Médio, consegui desconto na Instituição Unigranrio e Cursei Técnólogo em Analise e Desenvolvimento de Sistemas, uma área que eu era muito interessado pois sempre quis criar meus sites e software que solucionassem problemas que eu tinha usando meu computador, através desse percurso aprendi mais sobre as pessoas, conheci pessoas muito legais mas aprendi que principalmente, existem amizades que você não precisa manter, e que não dependo de amigos para aprovarem quem eu sou.",
    detalhes6:
      "Formando-me, prossegui em fazer uma nova graduação dessa vez na Universidade Estácio em formato EAD onde eu não estaria preso ao horário da aula para que pudesse me candidatar a estágios. Nesse mesmo período passei a me aproximar dos jovens irmãos da igreja onde congrego para ter uma convivência maior com aqueles que eu chamo de irmãos, pois sempre me considerei hipócria de rejeitá-los por simplesmente não querer a amizade deles, e percebi que a minha reação, satisfação e demonstração de que me importo são muito importantes para que as pessoas também reconheçam que sou humano como eles e não sou um robô que é sempre sério",
    detalhes7:
      "Recentemente tenho me interessado bastante em canais que comentam ou criam software livre e uma vida mais independente das estruturas de suprimento de alimentos atual",
  }
  return (
    <Layout>
      <SEO title="about" />
      <h1>Resumo Sobre mim.</h1>
      <Card obj={objeto}></Card>
      <br></br>
      <h2>Detalhes sobre mim</h2>
      <p>{objeto.detalhes1}</p>
      <p>{objeto.detalhes2}</p>
      <p>{objeto.detalhes3}</p>
      <p>{objeto.detalhes4}</p>
      <p>{objeto.detalhes5}</p>
      <p>{objeto.detalhes6}</p>
      <p>{objeto.detalhes7}</p>
    </Layout>
  )
}

export default AboutPage
