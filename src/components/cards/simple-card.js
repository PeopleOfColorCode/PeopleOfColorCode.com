import React from "react"

const SimpleCard = ({ content: { subtitle, text }, style }) => (
  <div className={`simple-card-wrapper__${style}`}>
    <h3 className={`simple-card-subtitle__${style}`}>{subtitle}</h3>
    <p className="simple-card-text">{text}</p>
  </div>
)

export default SimpleCard
