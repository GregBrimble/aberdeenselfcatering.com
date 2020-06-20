import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"

const Hero = ({ mainText, icon, cta, image, links }) => (
  <div className="relative bg-white overflow-hidden">
    <div className="hidden lg:block lg:absolute lg:inset-0">
      <svg
        className="absolute top-0 left-1/2 transform translate-x-64 -translate-y-8"
        width="640"
        height="784"
        fill="none"
        viewBox="0 0 640 784"
      >
        <defs>
          <pattern
            id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
            x="118"
            y="0"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect
              x="0"
              y="0"
              width="4"
              height="4"
              className="text-gray-200"
              fill="currentColor"
            />
          </pattern>
        </defs>
        <rect
          y="72"
          width="640"
          height="640"
          className="text-gray-50"
          fill="currentColor"
        />
        <rect
          x="118"
          width="404"
          height="784"
          fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
        />
      </svg>
    </div>
    <div className="relative pb-16 md:pb-20 lg:pb-24 xl:pb-32">
      <Header links={links} />

      <main className="mt-8 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-20 xl:mt-24">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            {mainText}
            {cta}
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            {image}
          </div>
        </div>
      </main>
    </div>
  </div>
)

Hero.propTypes = {
  mainText: PropTypes.node.isRequired,
  cta: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      isPrimary: PropTypes.bool,
    })
  ),
}

Hero.defaultProps = {
  links: [],
}

export default Hero
