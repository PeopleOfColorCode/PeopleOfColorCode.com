import React from "react"
import OrganizerData from "../data/organizers.json"
import CardWithImage from "./cards/card-with-image"
import Floaters from "./floaters"

const Organizers = () => {
  const { title, tiles } = OrganizerData

  return (
    <div id="Organizers" className="organizers-wrapper">
      <Floaters />
      <h2 className="organizers-title">{title}</h2>
      <div className="organizers-cards">
        {tiles.map((tile, index) => (
          <CardWithImage key={index} content={tile} />
        ))}
      </div>
      <div className="organizers-background"></div>
    </div>
  )
}

export default Organizers
