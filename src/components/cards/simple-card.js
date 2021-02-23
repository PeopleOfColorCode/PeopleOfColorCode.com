import React from "react"
import classnames from "classnames"

const SimpleCard = ({ content: { subtitle, text }, ...props }) => {
  let simpleCardClassnames = props =>
    classnames("simple-card", {
      "simple-card-wrapper__border": props.border,
      "simple-card-subtitle__border": props.subtitleBorder,
    })
  return (
    <div className={simpleCardClassnames(props)}>
      <h3>{subtitle}</h3>
      <p className="simple-card-text">{text}</p>
    </div>
  )
}

export default SimpleCard
