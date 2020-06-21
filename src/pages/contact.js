import React from "react"
import Image from "gatsby-image"
import Header from "../components/Header"
import ContactForm from "../components/ContactForm"
import { useStaticQuery, graphql } from "gatsby"

const Contact = () => {
  const { site, image } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          contact {
            phoneNumbers {
              value
              type
            }
            emailAddress
          }
          pricing
        }
      }
      image: file(relativePath: { eq: "images/aberdeen-skyline.jpg" }) {
        childImageSharp {
          fixed(height: 274) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

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
      <main className="mt-6">
        <Image
          fixed={image.childImageSharp.fixed}
          className="max-w-full object-cover"
          alt="Aberdeen Skyline"
        />
        <div className="text-xs mr-4 -mt-7 z-10 absolute text-gray-50 right-0">
          <a
            href="https://commons.wikimedia.org/wiki/File:Aberdeen_banner_view_from_Tollohill_Woods.JPG"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Aberdeen City Centre from Tollohill Woods, Aberdeen, Scotland,
            United Kingdom
          </a>{" "}
          by Ragazzi99 /{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/deed.en"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            CC BY-SA 4.0
          </a>
        </div>
        <ContactForm
          mainText={
            <p className="mt-3 text-lg leading-6 text-gray-500">
              For a memorable holiday, call us or send a message.
            </p>
          }
          emailAddress={site.siteMetadata.contact.emailAddress}
          contactInfo={
            <>
              {site.siteMetadata.contact.phoneNumbers.map(({ value, type }) => (
                <div className="mt-3 first:mt-0" key={value}>
                  <dt className="sr-only">Phone number ({type})</dt>
                  <dd className="flex">
                    <svg
                      className="flex-shrink-0 h-6 w-6 text-gray-400"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {type === "landline" ? (
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                      ) : (
                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      )}
                    </svg>
                    <a
                      className="ml-3 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                      href={`tel:${value.replace(/\s/g, "")}`}
                    >
                      {value}
                    </a>
                  </dd>
                </div>
              ))}
              <div className="mt-3">
                <dt className="sr-only">Email</dt>
                <dd className="flex">
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    className="ml-3 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
                    href={`mailto:${site.siteMetadata.contact.emailAddress}`}
                  >
                    {site.siteMetadata.contact.emailAddress}
                  </a>
                </dd>
              </div>
            </>
          }
        />
      </main>
    </>
  )
}

export default Contact
