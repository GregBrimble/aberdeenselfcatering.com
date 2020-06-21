import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"

const DEFAULT_SUBJECT = "aberdeenselfcatering.com Enquiry"

const ContactForm = ({ mainText, contactInfo, emailAddress }) => {
  const [subject, setSubject] = useState(DEFAULT_SUBJECT)
  const [body, setBody] = useState("")

  const [link, setLink] = useState(`mailto:${emailAddress}`)

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  useEffect(() => {
    setSubject(`${name} | ${DEFAULT_SUBJECT}`)
    setBody(`New message from:
${name}
${email}
${phone}

${message}
`)
  }, [name, email, phone, message])

  useEffect(() => {
    const searchParams = new URLSearchParams()
    searchParams.set("subject", subject)
    searchParams.set("body", body)
    setLink(`mailto:${emailAddress}?${searchParams.toString()}`)
  }, [subject, body])

  return (
    <div className="relative bg-white" id="contact">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50"></div>
      </div>
      <div className="relative max-w-7xl mx-auto lg:grid lg:grid-cols-5">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12">
          <div className="max-w-lg mx-auto">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl sm:leading-9">
              Get in touch
            </h2>
            {mainText}
            {contactInfo && (
              <dl className="mt-8 text-base leading-6 text-gray-500">
                {contactInfo}
              </dl>
            )}
          </div>
        </div>
        <div className="bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12">
          <div className="max-w-lg mx-auto lg:max-w-none">
            <form
              action={link}
              encType="text/plain"
              className="grid grid-cols-1 row-gap-6"
              onSubmit={e => {
                e.preventDefault()
                window.open(link)
              }}
            >
              <div>
                <label htmlFor="full_name" className="sr-only">
                  Full name
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    required
                    id="full_name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Full name"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    required
                    id="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="email"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">
                  Phone
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    required
                    id="phone"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <div className="relative rounded-md shadow-sm">
                  <textarea
                    required
                    id="message"
                    value={message}
                    onChange={e => setMessage(e.target.value)}
                    rows="4"
                    className="form-input block w-full py-3 px-4 placeholder-gray-500 transition ease-in-out duration-150"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="">
                <span className="inline-flex rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="inline-flex justify-center py-3 px-6 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Submit
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

ContactForm.propTypes = {
  mainText: PropTypes.node,
  contactInfo: PropTypes.node,
}

ContactForm.defaultProps = {
  links: [],
}

export default ContactForm
