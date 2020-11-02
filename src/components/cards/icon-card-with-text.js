import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import classnames from "classnames"

const IconCardWithText = ({ content, ...props }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fixed(width: 100, height: 74) {
              originalName
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const cardImage = images.find(
    i => i.childImageSharp.fixed.originalName === content.image
  )

  let iconCardWithTextClassnames = props =>
    classnames("icon-card-with-text", {
      "icon-card-with-text__left": props.left,
      "icon-card-with-text__border": props.border,
    })
  return (
    <div className={iconCardWithTextClassnames(props)}>
      <div className="icon-card-with-text-wrapper">
        <Img fixed={cardImage.childImageSharp.fixed} />
        <h3 className="icon-card-with-text-subtitle">{content.subtitle}</h3>
        <p>{content.text}</p>
      </div>
    </div>
  )
}

export default IconCardWithText
