import React from "react"
import { container } from "./homeIntroText.module.scss"
import text from "../../data/text"

const HomeIntroText = () => {
  return (
    <div className={container}>
      <h1>{text.home.title}</h1>
      <p>{text.home.text}</p>
    </div>
  )
}

export default HomeIntroText
