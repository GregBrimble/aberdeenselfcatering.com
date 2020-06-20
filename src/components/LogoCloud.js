import React from "react"

const LogoCloud = ({ title, items }) => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>{title}</div>
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-0 lg:grid-cols-2">
            {items.map(item => (
              <div className="col-span-1 flex py-8 pl-12 px-8 bg-gray-50 text-gray-500 hover:text-gray-800 transition duration-150 ease-in-out">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoCloud
