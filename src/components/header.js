import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import headerStyles from "./header.module.css"
import ToggleSwitch from "./toggleSwitch"
import "../styles/global.css"

const Header = ({ siteTitle }) => (
  <header className={headerStyles.header}>
    <div className={headerStyles.container}>
      <h1 className={headerStyles.titleH1}>
        <Link to="/" className={headerStyles.link}>
          {siteTitle}
        </Link>
      </h1>
      <div className={headerStyles.menu}>
        <ul className={headerStyles.nav}>
          <li className={headerStyles.navItem}>
            <Link to="/blog" className={headerStyles.linklist}>
              Blog
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/portfolio" className={headerStyles.linklist}>
              Portfólio
            </Link>
          </li>
          <li className={headerStyles.navItem}>
            <Link to="/about" className={headerStyles.linklist}>
              Sobre
            </Link>
          </li>
        </ul>
        <ToggleSwitch></ToggleSwitch>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
