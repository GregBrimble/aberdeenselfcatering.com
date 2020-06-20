import React from "react"
import PropTypes from "prop-types"
import Header from "./Header"

const Hero = ({ mainText, icon, cta, image, links }) => (
  <header className="relative bg-white overflow-hidden">
    <div className="max-w-screen-xl mx-auto ">
      <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        {/* <svg
          className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
          fill="currentColor"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg> */}

        <Header links={links} />

        <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            {mainText}
            {cta}
          </div>
        </div>
      </div>
    </div>
    <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">{image}</div>
  </header>
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
