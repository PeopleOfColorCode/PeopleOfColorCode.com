import React from "react"
import EngageData from "../data/engage.json"
import ContentCardCubed from "./cards/content-card-cubed"
import Floaters from "./floaters"

const Engage = () => {
  const { title, tiles } = EngageData

  return (
    <div id="Engage" className="engage-wrapper">
      <h2 className="engage-title">{title}</h2>
      <Floaters />
      <div className="engage-cards-wrapper">
        {tiles.map((tile, index) => (
          <ContentCardCubed key={index} content={tile} border />
        ))}
      </div>
    </div>
  )
}

export default Engage
