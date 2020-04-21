import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import toggleSwitchStyles from "./toggleSwitch.module.css"

const ToggleSwitch = () => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <label className={toggleSwitchStyles.switch}>
          <input
            type="checkbox"
            onChange={e => toggleTheme(e.target.checked ? "dark" : "light")}
            checked={theme === "dark"}
          />
          <span className={toggleSwitchStyles.slider}></span>
        </label>
      )}
    </ThemeToggler>
  )
}

export default ToggleSwitch
