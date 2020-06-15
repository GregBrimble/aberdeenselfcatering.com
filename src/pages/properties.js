import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import "leaflet/dist/leaflet.css"
import "./properties.css"
import { Map, TileLayer, Marker, Popup } from "react-leaflet"

import L from "leaflet"

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
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
        <img
          className="w-full object-cover lg:w-full"
          style={{ height: "33vh" }}
          src="https://source.unsplash.com/featured/?house"
          alt=""
        />
        <div className="max-w-screen-xl mx-auto">
          <ul>
            {properties.map(({ node: property }) => (
              <li key={property.id}>
                <Link to={property.frontmatter.slug}>
                  {property.frontmatter.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        Hello
        <Map center={[57.1432118, -2.1720448]} zoom={13}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <Marker position={[57.1434, -2.1721]}>
            <Popup>Rose House</Popup>
          </Marker>
          <Marker position={[57.1436, -2.1728]}>
            <Popup>Bruce House</Popup>
          </Marker>
        </Map>
        Hi
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
  }
`

export default PropertiesPage
