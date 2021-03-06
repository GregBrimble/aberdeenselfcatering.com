import React from "react"
import { graphql } from "gatsby"
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
            background={false}
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
                    Weighbridge Cottage is a 2 bedroom granite cottage situated
                    in the West End of Aberdeen.
                  </p>
                ),
              },
              {
                title: "Bruce House",
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
                    Bruce House is a two bedroom apartment in the West End of
                    Aberdeen in close proximity to Weighbridge Cottage and Rose
                    House.
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
                    Rose House is a two bedroom apartment in the West End of
                    Aberdeen in close proximity to Weighbridge Cottage and Bruce
                    House.
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
                href: "/properties/46-ashvale-place-and-49-ashvale-place",
                content: (
                  <p>
                    46 Ashvale Place is a one bedroom apartment that sleeps two
                    and is situated in Aberdeen City Centre.
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
                href: "/properties/46-ashvale-place-and-49-ashvale-place",
                content: (
                  <p>
                    49 Ashvale Place is a one bedroom apartment that sleeps two
                    and is situated in Aberdeen City Centre.
                  </p>
                ),
              },
              {
                title: "Bulgarian Villa",
                image: (
                  <Image
                    className="h-48 w-full object-cover"
                    fluid={data.BulgarianVilla.childImageSharp.fluid}
                    alt="Bulgarian Villa"
                  />
                ),
                href: "/properties/bulgarian-villa",
                content: (
                  <p>
                    The Bulgarian Villa is part of a gated complex with three
                    other villas, a shared pool and communual gardens.
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
    AshvalePlace46: file(
      relativePath: {
        eq: "images/46-ashvale-place-and-49-ashvale-place_DSCF9045.png"
      }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    AshvalePlace49: file(
      relativePath: {
        eq: "images/46-ashvale-place-and-49-ashvale-place_DSCF9014.jpeg"
      }
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
      relativePath: { eq: "images/weighbridge-cottage_front view.png" }
    ) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    BulgarianVilla: file(
      relativePath: {
        eq: "images/bulgarian-villa_105405512_2624629617796426_6293980994153138068_n.jpg"
      }
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
