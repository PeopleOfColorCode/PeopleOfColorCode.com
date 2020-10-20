import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import EngageData from "../data/engage.json"
import CardWithTextLink from "./cards/card-with-text-link"

const Engage = () => {
  const { title, tiles } = EngageData

  return (
    <div id="Engage" className="engage-wrapper">
      <h2 className="engage-title">{title}</h2>
      <div className="engage-cards-wrapper">
        {/* <div className="engage-cards"> */}
        {tiles.map((tile, index) => (
          <CardWithTextLink key={index} content={tile} />
        ))}
        {/* </div> */}
      </div>
    </div>
  )
}

export default Engage
