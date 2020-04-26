import PropTypes from "prop-types"
import React from "react"

const Footer = ({ copyright, links }) => (
  <footer className="bg-white">
    <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center md:order-2">
        {links.map(({ label, href, icon }) => (
          <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            key={icon + href}
            className="ml-6 first:ml-0 text-gray-400 hover:text-gray-500"
          >
            <span className="sr-only">{label}</span>
            {icon}
          </a>
        ))}
      </div>
      <div className="mt-8 md:mt-0 md:order-1">
        <p className="text-center text-base leading-6 text-gray-400">
          {copyright}
        </p>
      </div>
    </div>
  </footer>
)

Footer.propTypes = {
  copyright: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
    })
  ),
}

Footer.defaultProps = {
  copyright: "",
  links: [],
}

export default Footer
