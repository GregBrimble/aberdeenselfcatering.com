import { Link } from "gatsby"
import React, { useState } from "react"
import Transition from "../../lib/Transition"
import classNames from "../../lib/classNames"
import Logo from "./Logo"

const Header = ({ links }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className="relative max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 pt-6">
        <div className="flex items-center flex-1">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Link to="/" className="text-indigo-600">
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
          <div className="hidden md:block md:ml-10">
            {links.map(({ label, href, isPrimary = false, internal = false }) =>
              internal ? (
                <Link
                  key={label}
                  to={href}
                  className={classNames(
                    "ml-8 first:ml-0 font-medium",
                    isPrimary
                      ? "text-indigo-600 hover:text-indigo-900 focus:outline-none focus:text-indigo-700"
                      : "text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900",
                    "transition duration-150 ease-in-out"
                  )}
                >
                  {label}
                </Link>
              ) : (
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
              )
            )}
          </div>
        </div>
      </nav>

      <Transition
        show={open}
        enter="duration-150 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <div
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          style={{ zIndex: 1001 }}
        >
          <div className="rounded-lg shadow-md">
            <div className="rounded-lg bg-white shadow-xs overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <Link to="/">
                  <Logo />
                </Link>
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
                  .map(({ label, href, internal }) =>
                    internal ? (
                      <Link
                        key={label}
                        to={href}
                        className="mt-1 first:mt-0 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        key={label}
                        href={href}
                        className="mt-1 first:mt-0 block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out"
                      >
                        {label}
                      </a>
                    )
                  )}
              </div>
              <div>
                {links
                  .filter(({ isPrimary }) => isPrimary)
                  .map(({ label, href, internal }) =>
                    internal ? (
                      <Link
                        key={label}
                        to={href}
                        className="mt-2 first:mt-0 block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                      >
                        {label}
                      </Link>
                    ) : (
                      <a
                        key={label}
                        href={href}
                        className="mt-2 first:mt-0 block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100 hover:text-indigo-700 focus:outline-none focus:bg-gray-100 focus:text-indigo-700 transition duration-150 ease-in-out"
                      >
                        {label}
                      </a>
                    )
                  )}
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  )
}

export default Header
