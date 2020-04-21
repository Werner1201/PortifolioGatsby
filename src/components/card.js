import React from "react"
import cardStyle from "./card.module.css"

const Card = ({ obj }) => {
  let img = obj.img
  let title = obj.title
  let description = obj.description
  return (
    <div className={cardStyle.wrapper}>
      <div className={cardStyle.items}>
        <img src={`${img}`} alt="Avatar" className={cardStyle.avatar}></img>
        <div className={cardStyle.texts}>
          <h1>{`${title}`}</h1>
          <p>{`${description}`}</p>
        </div>
      </div>
    </div>
  )
}

export default Card
