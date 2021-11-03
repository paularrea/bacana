import React, { useState, useEffect, useCallback } from "react"
import classNames from "classnames"
import "./cursor.css"

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [containerPosition, setContainerPosition] = useState({ x: 0, y: 0 })

  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [homelinkHoveredClients, setHomeLinkHoveredClients] = useState(false)
  const [homelinkHoveredCommunities, setHomeLinkHoveredCommunities] =
    useState(false)

  const [hidden, setHidden] = useState(false)

  const addEventListeners = useCallback(() => {
    document.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseenter", onMouseEnter)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("mousedown", onMouseDown)
    document.addEventListener("mouseup", onMouseUp)
  }, [])

  const removeEventListeners = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove)
    document.removeEventListener("mouseenter", onMouseEnter)
    document.removeEventListener("mouseleave", onMouseLeave)
    document.removeEventListener("mousedown", onMouseDown)
    document.removeEventListener("mouseup", onMouseUp)
  }, [])

  useEffect(() => {
    addEventListeners()
    handleLinkHoverEvents()
    imgHandleLinkHoverEvents()
    containerHoverLinkClients()
    containerHoverLinkCommunities()
    return () => removeEventListeners()
  }, [addEventListeners, removeEventListeners])

  const onMouseMove = e => {
    setPosition({ x: e.clientX, y: e.clientY })
    setContainerPosition({ x: e.clientX + 50, y: e.clientY + 250 })
  }

  const onMouseDown = () => {
    setClicked(true)
  }

  const onMouseUp = () => {
    setClicked(false)
  }

  const onMouseLeave = () => {
    setHidden(true)
  }

  const onMouseEnter = () => {
    setHidden(false)
  }

  const handleLinkHoverEvents = () => {
    document.querySelectorAll("a").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  const imgHandleLinkHoverEvents = () => {
    document.querySelectorAll("div").forEach(el => {
      el.addEventListener("mouseover", () => setLinkHovered(true))
      el.addEventListener("mouseout", () => setLinkHovered(false))
    })
  }

  const containerHoverLinkClients = () => {
    document.getElementsByName("hoverContainerClients").forEach(el => {
      el.addEventListener("mouseover", () => setHomeLinkHoveredClients(true))
      el.addEventListener("mouseout", () => setHomeLinkHoveredClients(false))
    })
  }
  const containerHoverLinkCommunities = () => {
    document.getElementsByName("hoverContainerCommunities").forEach(el => {
      el.addEventListener("mouseover", () =>
        setHomeLinkHoveredCommunities(true)
      )
      el.addEventListener("mouseout", () =>
        setHomeLinkHoveredCommunities(false)
      )
    })
  }

  const cursorClasses = classNames("cursor", {
    "cursor--clicked": clicked,
    "cursor--hidden": hidden,
    "cursor--link-hovered": linkHovered,
  })

  const floatingContainerClasses = classNames("floating_container", {
    "floating_container--clicked": clicked,
    "floating_container--hidden": hidden,
    "floating_container--link-hovered": linkHovered,
  })

  return (
    <div>
      <div
        className={cursorClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      />
      {homelinkHoveredClients && (
        <div
          className={floatingContainerClasses}
          style={{
            left: `${containerPosition.x}px`,
            top: `${containerPosition.y}px`,
          }}
        >
          Through an insightful and strategic approach, we ensure our client’s
          vision and ambitions are being met.
        </div>
      )}
      {homelinkHoveredCommunities && (
        <div
          className={floatingContainerClasses}
          style={{
            left: `${containerPosition.x}px`,
            top: `${containerPosition.y}px`,
          }}
        >
          Captivated by unique stories and unfettered by international borders,
          our experience spans all corners of the world - always favoring
          working with local designers, artists, suppliers and crafters from the
          country in which the project is being based.
        </div>
      )}
    </div>
  )
}

export default AnimatedCursor
