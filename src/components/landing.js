import React from "react"
import LandingData from "../data/landing.json"
import Floaters from "./floaters"

const Landing = () => {
  const { title, subtitle } = LandingData

  return (
    <div className="landing-wrapper">
      <Floaters />
      <div className="landing-text">
        <h1 className="landing-title">{title}</h1>
        <p className="landing-subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default Landing
