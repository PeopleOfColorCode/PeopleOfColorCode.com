import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import LandingData from "../data/landing.json"

const Landing = () => {
  const { title, subtitle } = LandingData

  return (
    <div className="landing-wrapper">
      <div className="landing-text">
        <h1 className="landing-title">{title}</h1>
        <p className="landing-subtitle">{subtitle}</p>
      </div>
    </div>
  )
}

export default Landing
