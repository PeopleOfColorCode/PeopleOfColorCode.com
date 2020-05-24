import React from "react"
import AboutData from "../data/about-us.json"
import SimpleCard from "./simple-card"

const AboutUs = () => {
  const { title, features } = AboutData

  return (
    <div>
      <h1>{title}</h1>
      {features.map((feature, index) => (
        <SimpleCard key={index} content={feature} />
      ))}
    </div>
  )
}

export default AboutUs
