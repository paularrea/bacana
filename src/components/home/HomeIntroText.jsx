import React from "react"
import { container, home_intro_link } from "./homeIntroText.module.scss"
import ScrollRevealComponent from "../ScrollReveal/ScrollRevealComponent"

const HomeIntroText = () => {
  return (
    <ScrollRevealComponent slideUp={true}>
      <div className={container}>
        <h1>Design that makes you thrive</h1>
        <p>
          We are an interior design and architecture company focusing on
          hospitality, workplaces and residential projects around the world.
          Listening to our{" "}
          <span className={home_intro_link} name="hoverContainerClients">
            clients
          </span>{" "}
          and understanding their needs, the environment and the{" "}
          <span className={home_intro_link} name="hoverContainerCommunities">
            communities
          </span>{" "}
          behind every project is what drives our creativity while strategically
          developing individual concepts around business models.
        </p>
      </div>
    </ScrollRevealComponent>
  )
}

export default HomeIntroText
