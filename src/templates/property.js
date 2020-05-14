import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql, Link } from "gatsby"
import Header from "../components/Header"
import ImageSlider from "../components/ImageSlider"

const shortcodes = { Link, ImageSlider }

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
      <main className="mt-6 max-w-screen-xl mx-auto prose">
        <h1>{mdx.frontmatter.title}</h1>
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
