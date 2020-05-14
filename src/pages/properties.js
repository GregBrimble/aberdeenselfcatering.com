import React from "react"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"

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
