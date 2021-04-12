import React from 'react'
import Banner from './Banner'

const Contact = ({ img }) => {
  return (
    <div>
      <Banner
      imageURL={img}
      description="Learn to live in the moment instead of dwelling on the past or worrying about the future. "
        cta="CTA"
        position = "30% 45%"
      />
      <section className="container">
        <form  className="contact-form" action="https://fieldgoal.io/f/X3qjIM" method="POST">
          <div className="contact-description">
          <h1>Form Title</h1>
          <p>
              Have you ever run into the problem of creating a site with pictures given by the client, only to find later after they update their photography the original look and feel is not retained? This solution involves creating a transparent PNG overlay which can be used as a mask / frame around regular JPEG or GIF.
          </p>
          </div>
          <div>
            <label for="email">Your Email</label>
            <input name="Email" id="email" type="email" />
            <label for="email">Your Name</label>
            <input name="Name" id="name" type="text" />
            <label for="message">Your Message</label>
            <textarea name="message" rows="6" cols="50">Enter text here...</textarea>
            <button className="button" type="submit">Submit</button>
            </div>
        </form>
      </section>
    </div>
  )
}

export default Contact
