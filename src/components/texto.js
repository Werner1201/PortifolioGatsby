import React from "react"
import style from "./texto.module.css"

// import { Container } from './styles';

function Texto({ tipo, post }) {
  const estilo = tipo === "Texto" ? style.texto : style.poema
  return (
    <div className={estilo}>
      <h1>{post.frontmatter.title}</h1>
      <div
        className={estilo}
        dangerouslySetInnerHTML={{ __html: post.html }}
      ></div>
    </div>
  )
}

export default Texto
