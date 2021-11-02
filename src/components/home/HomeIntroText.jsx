import React from "react"
import { container } from "./homeIntroText.module.scss"
import text from "../../data/text"
import ScrollRevealComponent from "../ScrollReveal/ScrollRevealComponent"

const HomeIntroText = () => {
  return (
    <ScrollRevealComponent slideUp={true}>
      <div className={container}>
        <h1>{text.home.title}</h1>
        <p>{text.home.text}</p>
      </div>
    </ScrollRevealComponent>
  )
}

export default HomeIntroText
