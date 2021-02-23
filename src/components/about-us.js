import React from "react"
import AboutData from "../data/about-us.json"
import SimpleCard from "./cards/simple-card"

const AboutUs = () => {
  const { features } = AboutData

  return (
    <div id="About" className="about-us-wrapper">
      <div className="about-us-card-wrapper">
        <div className="about-us-cards">
          {features.map((feature, index) => (
            <SimpleCard key={index} content={feature} border subtitleBorder />
          ))}
        </div>
      </div>
    </div>
  )
}

export default AboutUs
