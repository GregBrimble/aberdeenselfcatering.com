import React from "react"
import PropTypes from "prop-types"

const FeatureGroup = ({ heading, items }) => (
  <div className="py-12 bg-white">
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      {heading && <div className="lg:text-center">{heading}</div>}

      <div className="mt-10">
        <ul className="md:grid md:grid-cols-2 md:col-gap-8 md:row-gap-10">
          {items.map(({ href, label, text, icon }) => (
            <li className="mt-10 first:mt-0 md:mt-0" key={label}>
              <div className="flex">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg
                      className="h-6 w-6"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      {icon}
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <h5 className="text-lg leading-6 font-medium text-gray-900">
                    {label}
                  </h5>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    {text}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

FeatureGroup.propTypes = {
  heading: PropTypes.node,
  items: PropTypes.arrayOf(
    PropTypes.exact({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      icon: PropTypes.node.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
}

FeatureGroup.defaultProps = {
  items: [],
}

export default FeatureGroup
