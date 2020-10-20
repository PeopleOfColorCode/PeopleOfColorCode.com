import React from "react"
import ValuesData from "../data/values.json"
import IconCardWithText from "./cards/icon-card-with-text"

const Values = () => {
  const { title, values } = ValuesData

  return (
    <div id="Values" className="values-wrapper">
      <h2 className="values-title">{title}</h2>
      <div className="values-image-cards-wrapper">
        {values.map((value, index) => (
          <IconCardWithText key={index} content={value} left border />
        ))}
      </div>
    </div>
  )
}

export default Values
