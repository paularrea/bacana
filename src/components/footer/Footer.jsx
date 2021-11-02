import React from "react"
import instagramLogo from "../../images/icons/instagram_logo.png"
import globeLogo from "../../images/icons/globe_logo.png"
import phoneLogo from "../../images/icons/phone_logo.png"
import { container, flex_container } from "./footer.module.scss"

const Footer = () => {
  return (
      <footer className={container}>
        <div className={flex_container}>
          <div>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.instagram.com/studiobacana/"
            >
              <img src={instagramLogo} alt="instagram logo" />
              @studiobacana
            </a>
          </div>
          <div>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:info@bacanastudio.com"
            >
              <img src={globeLogo} alt="globe logo" />
              info@bacanastudio.com
            </a>
          </div>
          <div>
            <a href="tel:+351912677606">
              <img src={phoneLogo} alt="phone logo" />
              +351 912 677 606
            </a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
