import React from "react"
import EngageData from "../data/engage.json"
import ContentCardCubed from "./cards/content-card-cubed"

const Engage = () => {
  const { title, tiles } = EngageData

  return (
    <div id="Engage" className="engage-wrapper">
      <h2 className="engage-title">{title}</h2>
      <div className="engage-cards-wrapper">
        {/* <div className="engage-cards"> */}
        {tiles.map((tile, index) => (
          <ContentCardCubed key={index} content={tile} border />
        ))}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Engage
