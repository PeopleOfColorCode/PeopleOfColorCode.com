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
      <div className="content-card-cubed-wrapper">
        <div className="content-card-cubed-content">
          <h3 className="content-card-cubed-title">{title}</h3>
          <p className="content-card-cubed-text">{text}</p>
          <a href={url} target={"_blank"} rel={"noreferrer"}>
            <button className="content-card-cubed-button">{buttonText}</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContentCardCubed
