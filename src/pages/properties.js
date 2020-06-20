import React from "react"
import { graphql, Link } from "gatsby"
import Loadable from "react-loadable"
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
