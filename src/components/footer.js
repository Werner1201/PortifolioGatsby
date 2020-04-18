import React from "react"
import footerSytles from "./footer.module.css"

const Footer = ({ data }) => {
  return (
    <footer className={footerSytles.footer}>
      <div className={footerSytles.container}>
        2020-{new Date().getFullYear()},{` Made by: `}
        <a href="https://github.com/Werner1201">{data.author}</a>
      </div>
    </footer>
  )
}
export default Footer
