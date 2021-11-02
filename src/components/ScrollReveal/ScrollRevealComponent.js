import React from "react"
import { useInView } from "react-intersection-observer"

const ScrollRevealComponent = ({
  threshold = 0,
  children,
  slideUp,
  suspense,
}) => {
  const [ref, inView] = useInView({ threshold })

  return (
    <div
      style={{
        backgroundColor: "transparent",
        transition: suspense
          ? `opacity 10000ms, transform 10000ms,`
          : "opacity 1000ms, transform 1000ms",
        opacity: inView ? 1 : 0,
        transform: slideUp ? `translateY(${inView ? 0 : 50}px)` : "none",
      }}
      ref={ref}
    >
      {children}
    </div>
  )
}

export default ScrollRevealComponent
