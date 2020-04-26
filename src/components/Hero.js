import { Link } from "gatsby"
import React, { useState } from "react"
import Transition from "../../lib/Transition"
import classNames from "../../lib/classNames"
import PropTypes from "prop-types"
import Logo from "./Logo"

const Hero = ({ mainText, icon, cta, image, links }) => {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto ">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <Link href="/" className="text-indigo-600">
                    <Logo />
                  </Link>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button
                      onClick={() => setOpen(true)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                    >
                      <svg
                        className="h-6 w-6"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4">
                {links.map(({ label, href, isPrimary = false }) => (
                  <a
                    key={label}
                    href={href}
                    className={classNames(
                      "ml-8 first:ml-0 font-medium",
                      isPrimary
                        ? "text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700"
                        : "text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900",
                      "transition duration-150 ease-in-out"
                    )}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            show={open}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-md">
                <div className="rounded-lg bg-white shadow-xs overflow-hidden">
                  <div className="px-5 pt-4 flex items-center justify-between">
                    <Logo />
                    <div className="-mr-2">
                      <button
                        onClick={() => setOpen(false)}
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                      >
                        <svg
                          className="h-6 w-6"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="px-2 pt-2 pb-3">
                    {links
                      .filter(({ isPrimary }) => !isPrimary)
                      .map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          className="mt-1 first:mt-0 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                        >
                          {label}
                        </a>
                      ))}
                  </div>
                  <div>
                    {links
                      .filter(({ isPrimary }) => isPrimary)
                      .map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          className="mt-2 first:mt-0 block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                        >
                          {label}
                        </a>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </Transition>

          <div className="mt-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              {mainText}
              {cta}
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        {image}
      </div>
    </header>
  )
}

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
