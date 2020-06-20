import React from "react"
import { graphql, Link } from "gatsby"
import Loadable from "react-loadable"
import Image from "gatsby-image"
import ThreeCards from "../components/ThreeCards"
import Header from "../components/Header"
import "./properties.css"

const LoadableMap = Loadable({
  loader: () => import("../components/Map"),
  loading: () => <span>Loading...</span>,
})

const PropertiesPage = ({ data }) => {
  const { edges: properties } = data.allMdx

  return (
    <>
      <header className="overflow-hidden max-w-screen-xl mx-auto">
        <Header
          links={[
            { label: "Our Properties", href: "/properties", internal: true },
            {
              label: "Contact",
              href: "/contact",
              isPrimary: true,
              internal: true,
            },
          ]}
        />
      </header>
      <main className="mt-6">
        <LoadableMap />
        <div className="max-w-screen-xl mx-auto">
          <ThreeCards
            items={[
              {
                title: "Weighbridge Cottage",
                image: (
                  <Image
                    className="h-48 w-full object-cover"
                    fluid={data.WeighbridgeCottage.childImageSharp.fluid}
                    alt="Weighbridge Cottage"
                  />
                ),
                href: "/properties/weighbridge-cottage",
                content: (
                  <p>
                    At A {"&"} L Enterprises, our serviced apartments are fully
                    furnished and developed with a style and comfort in mind. We
                    provide high-quality customer service.
                  </p>
                ),
              },
              {
                title: "Bruse House",
                image: (
                  <Image
                    className="h-48 w-full object-cover"
                    fluid={data.BruceHouse.childImageSharp.fluid}
                    alt="Bruce House"
                  />
                ),
                href: "/properties/bruce-house-and-rose-house",
                content: (
                  <p>
                    At A {"&"} L Enterprises, our serviced apartments are fully
                    furnished and developed with a style and comfort in mind. We
                    provide high-quality customer service.
                  </p>
                ),
              },
              {
                title: "Rose House",
                image: (
                  <Image
                    className="h-48 w-full object-cover"
                    fluid={data.RoseHouse.childImageSharp.fluid}
                    alt="Rose House"
                  />
                ),
                href: "/properties/bruce-house-and-rose-house",
                content: (
                  <p>
                    At A {"&"} L Enterprises, our serviced apartments are fully
                    furnished and developed with a style and comfort in mind. We
                    provide high-quality customer service.
                  </p>
                ),
              },
              {
                title: "46 Ashvale Place",
                image: (
                  <Image
                    className="h-48 w-full object-cover"
                    fluid={data.AshvalePlace46.childImageSharp.fluid}
                    alt="46 Ashvale Place"
                  />
                ),
                href: "/properties/46-ashvale-place",
                content: (
                  <p>
                    At A {"&"} L Enterprises, our serviced apartments are fully
                    furnished and developed with a style and comfort in mind. We
                    provide high-quality customer service.
                  </p>
                ),
              },
              {
                title: "49 Ashvale Place",
                image: (
                  <Image
                    className="h-48 w-full object-cover"
                    fluid={data.AshvalePlace49.childImageSharp.fluid}
                    alt="49 Ashvale Place"
                  />
                ),
                href: "/properties/49-ashvale-place",
                content: (
                  <p>
                    At A {"&"} L Enterprises, our serviced apartments are fully
                    furnished and developed with a style and comfort in mind. We
                    provide high-quality customer service.
                  </p>
                ),
              },
            ]}
          />
        </div>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allMdx {
      edges {
        node {
          id
          frontmatter {
            title
            slug
          }
        }
      }
    }
    AshvalePlace46: file(
      relativePath: { eq: "images/46-ashvale-place_DSCF9045.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AshvalePlace49: file(
      relativePath: { eq: "images/49-ashvale-place_DSCF9014.jpeg" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BruceHouse: file(
      relativePath: { eq: "images/bruce-house-and-rose-house_IMG_2913.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    RoseHouse: file(
      relativePath: {
        eq: "images/bruce-house-and-rose-house_20150601_184526.png"
      }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    WeighbridgeCottage: file(
      relativePath: { eq: "images/cottage_front view.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default PropertiesPage
