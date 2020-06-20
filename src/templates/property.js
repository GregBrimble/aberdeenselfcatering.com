import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import FeatureGroup from "../components/FeatureGroup"
import ImageSlider from "../components/ImageSlider"

const Title = ({ children }) => (
  <h3 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
    {children}
  </h3>
)

const SubTitle = ({ children }) => (
  <p className="mt-4 max-w-3xl text-xl leading-7 text-gray-500">{children}</p>
)

const shortcodes = { Link, ImageSlider, FeatureGroup, Title, SubTitle }

const Property = ({ data: { mdx } }) => {
  return (
    <>
      <header className="overflow-hidden max-w-screen-xl mx-auto">
        <Header
          links={[
            { label: "Our Properties", href: "/properties", internal: true },
            { label: "Contact", href: "#contact", isPrimary: true },
          ]}
        />
      </header>
      <main className="mt-12 max-w-screen-xl mx-auto prose px-4 xl:px-0">
        <MDXProvider components={shortcodes}>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </MDXProvider>
      </main>
    </>
  )
}

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default Property
