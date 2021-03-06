import React from "react"
import PropTypes from "prop-types"
import GridStyle from "./grid.module.css"

const Grid = ({ children }) => {
  return <div className={GridStyle.grid}>{children}</div>
}

Grid.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Grid
