import React from "react"
import { container } from "./clients.module.scss"
import BlueLogo from "../GatsbyImages/clients/BlueLogo"
import SelinaLogo from "../GatsbyImages/clients/SelinaLogo"
import StayncoLogo from "../GatsbyImages/clients/StayncoLogo"
import WillaLogo from "../GatsbyImages/clients/WillaLogo"

const ClientsBanner = () => {
  return (
    <div className={container}>
      <BlueLogo />
      <SelinaLogo />
      <StayncoLogo />
      <WillaLogo />
    </div>
  )
}

export default ClientsBanner
