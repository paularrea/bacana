import React from "react"
import { abs_arrow } from "../../components/ScrollArrow/arrow.module.scss"
import arrow from "../../../../images/icons/arrow.png"

const ScrollArrow = () => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => window.scroll(0, 700)}
      onKeyDown={() => window.scroll(0, 700)}
      className={abs_arrow}
    >
      <img src={arrow} alt="scrolling arrow" />
    </div>
  )
}

export default ScrollArrow
