import React from "react"
import Slider from "react-slick"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./ImageSlider.css"

const ImageSlider = ({ slug, title }) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
  }

  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        edges {
          node {
            fluid(maxWidth: 1280) {
              ...GatsbyImageSharpFluid
              originalName
            }
          }
        }
      }
    }
  `)

  const images = allImageSharp.edges.filter(({ node }) =>
    node.fluid.originalName.startsWith(`${slug}_`)
  )

  return (
    <Slider {...settings}>
      {images.map((image, i) => (
        <div key={i} className="my-auto">
          <Img fluid={image.node.fluid} alt={title} />
        </div>
      ))}
    </Slider>
  )
}

export default ImageSlider
