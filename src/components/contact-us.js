import React, { useState } from "react"
import { navigate } from "gatsby-link"
import ContactData from "../data/contact-us.json"

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const ContactUs = () => {
  const { title, enterName, enterEmail, enterMessage, sendButton } = ContactData

  const [formData, setFormData] = useState()

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...formData,
      }),
    })
      .then(() => form.reset(), navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }
  return (
    <div id="Contact" className="contact-us-wrapper">
      <div className="contact-us-background"></div>
      <h2 className="contact-us-title">{title}</h2>
      <form
        className="contact-form"
        name="contact"
        method="post"
        action="/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input
          type="hidden"
          name="form-name"
          aria-label="Contact Form"
          value="contact"
        />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input
              name="bot-field"
              aria-label="Contact Form"
              onChange={handleChange}
            />
          </label>
        </p>

        <input
          className="contact-input-name"
          type="text"
          name="name"
          aria-label="Your Name"
          onChange={handleChange}
          placeholder={enterName}
        />

        <input
          className="contact-input-email"
          type="email"
          name="email"
          aria-label="Your Email"
          onChange={handleChange}
          placeholder={enterEmail}
        />

        <textarea
          className="contact-textarea"
          name="message"
          aria-label="Your Message"
          onChange={handleChange}
          placeholder={enterMessage}
        />

        <button className="contact-button" type="submit">
          {sendButton}
        </button>
      </form>
    </div>
  )
}

export default ContactUs
