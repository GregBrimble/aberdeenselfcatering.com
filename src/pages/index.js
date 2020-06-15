import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"
import SEO from "../components/SEO"
import FeatureGroup from "../components/FeatureGroup"
import ThreeCards from "../components/ThreeCards"

const IndexPage = () => {
  const { site } = useStaticQuery(graphql`
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
    }
  `)

  return (
    <>
      <SEO title="Home" />
      <Hero
        mainText={
          <>
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
              Self-catering accommodation <br className="xl:hidden" />
              available in <span className="text-indigo-600">Aberdeen</span>
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              If you are looking for self-catering accommodation in and around
              Aberdeen, we can help. At A {"&"} L Enterprises, we offer
              comfortable properties to rent.
            </p>
          </>
        }
        cta={
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Link
                to="/properties"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Our Properties
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-700 bg-indigo-100 hover:text-indigo-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
              >
                Contact
              </a>
            </div>
          </div>
        }
        image={
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://source.unsplash.com/featured/?house"
            alt=""
          />
        }
        links={[
          { label: "Our Properties", href: "/properties", internal: true },
          {
            label: "Contact",
            href: "#contact",
            isPrimary: true,
          },
        ]}
      />
      <main>
        <FeatureGroup
          heading={
            <>
              <p className="text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">
                Properties to rent in Aberdeen
              </p>
              <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                Comfortable self-catering accommodation from{" "}
                <span className="underline">{site.siteMetadata.pricing}</span>
              </h3>
              <p className="mt-4 max-w-4xl text-xl leading-7 text-gray-500 lg:mx-auto">
                Whether you are looking for a holiday home or you need a
                serviced apartment for business purposes, you can count on us.
                All our properties are well furnished, well-equipped and child
                friendly. Our properties comes with a wide range of amenities
                and features such as complimentary Wi-Fi, free parking and more.
              </p>
            </>
          }
          items={[
            {
              label: "Royal Deeside",
              href: "",
              icon: (
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              ),
              text:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            },
            {
              label: "Balmoral Castle",
              href: "",
              icon: (
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              ),
              text:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            },
            {
              label: "Malt Whiskey Trail",
              href: "",
              icon: (
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              ),
              text:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            },
            {
              label: "Castle Trail",
              href: "",
              icon: (
                <path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              ),
              text:
                "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
            },
          ]}
        />
        <ThreeCards
          items={[
            {
              title: "Serviced apartments",
              image: (
                <img
                  className="h-48 w-full object-cover"
                  src="https://source.unsplash.com/featured/?garden"
                  alt=""
                />
              ),
              href: "/",
              content: (
                <p>
                  At A {"&"} L Enterprises, our serviced apartments are fully
                  furnished and developed with a style and comfort in mind. We
                  provide high-quality customer service.
                </p>
              ),
            },
            {
              title: "Perfect location",
              image: (
                <img
                  className="h-48 w-full object-cover"
                  src="https://source.unsplash.com/featured/?bedroom"
                  alt=""
                />
              ),
              href: "/",
              content: (
                <ul className="list-disc list-inside">
                  <li>Close to town center</li>
                  <li>Close to bus links</li>
                  <li>Close to ferry terminal</li>
                  <li>Close to railway station</li>
                </ul>
              ),
            },
            {
              title: "Well-maintained apartments",
              image: (
                <img
                  className="h-48 w-full object-cover"
                  src="https://source.unsplash.com/featured/?kitchen"
                  alt=""
                />
              ),
              href: "/",
              content: (
                <p>
                  We have many years of experience in the trade and maintain
                  each property to the highest standards. Contact us today to
                  discuss your requirements.
                </p>
              ),
            },
          ]}
        />
        <ContactForm
          mainText={
            <p className="mt-3 text-lg leading-6 text-gray-500">
              For a memorable holiday, call us or send a message.
            </p>
          }
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

export default IndexPage
