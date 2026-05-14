import React from 'react'

export const Contact = () => {
  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact Us</h2>

      <div className="contact-container">

        {/* LEFT SIDE — DETAILS */}
        <div className="contact-info">
          <h3>Get in Touch</h3>
          <p>We’d love to hear from you! Whether it's feedback, questions, or catering requests — we’re here.</p>

          <p><strong>📍 Location:</strong> Newcastle, NSW</p>
          <p><strong>📞 Phone:</strong> +61 400 000 000</p>
          <p><strong>✉️ Email:</strong> info@burgeryard.com</p>

          <div className="map-box">
            <iframe
              title="BurgerYard Location"
              src="https://www.google.com.au/maps/place/46+Dickson+St,+Lambton+NSW+2299/"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

      </div>
    </section>
  )
}
