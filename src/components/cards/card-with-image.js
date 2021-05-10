import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const CardWithImage = ({ content: { image, name, url } }) => {
  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          childImageSharp {
            fluid(maxWidth: 350, maxHeight: 350) {
              originalName
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  const images = data.allFile.nodes
  const cardImage = images.find(
    i => i.childImageSharp.fluid.originalName === image
  )
  return (
    <div className="card-with-image-wrapper">
      <div className="panel-left"></div>
      <div className="panel-bottom"></div>
      <Img fluid={cardImage.childImageSharp.fluid} />
      <div className="card-with-image-content">
        <h3 className="card-with-image-header">{name}</h3>
        <a
          className="link-logo"
          aria-label="External Link"
          href={url}
          target="_blank"
          rel="noreferrer"
        />
      </div>
    </div>
  )
}

export default CardWithImage
