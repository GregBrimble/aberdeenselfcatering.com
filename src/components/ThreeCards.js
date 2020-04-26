import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ThreeCards = ({ heading, items }) => (
  <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
    <div className="absolute inset-0">
      <div className="bg-white h-1/3 sm:h-2/3"></div>
    </div>
    <div className="relative max-w-7xl mx-auto">
      {heading && <div className="text-center">{heading}</div>}

      <div className="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
        {items.map(({ title, image, href, content }) => (
          <div
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
            key={title}
          >
            <div className="flex-shrink-0">{image}</div>
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <Link to={href} className="block">
                  <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                    {title}
                  </h3>
                  <div className="mt-3 text-base leading-6 text-gray-500">
                    {content}
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)

ThreeCards.propTypes = {
  heading: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      title: PropTypes.string.isRequired,
      image: PropTypes.node.isRequired,
      href: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ),
}

ThreeCards.defaultProps = {
  items: [],
}

export default ThreeCards
