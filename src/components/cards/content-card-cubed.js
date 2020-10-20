import React from "react"
import classnames from "classnames"

const ContentCardCubed = ({
  content: { title, url, buttonText, text },
  ...props
}) => {
  let contentCardCubedClassnames = props =>
    classnames("content-card-cubed", {
      "content-card-cubed__border": props.border,
    })
  return (
    <div className={contentCardCubedClassnames(props)}>
      <div className="card-with-text-wrapper">
        <h3 className="card-with-text-title">{title}</h3>
        <p className="card-with-text-text">{text}</p>
        <a href={url} target={"_blank"} rel={"noreferrer"}>
          <button className="card-with-text-button">{buttonText}</button>
        </a>
      </div>
    </div>
  )
}

export default ContentCardCubed
