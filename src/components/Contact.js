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
      <section>
        <form action="https://fieldgoal.io/f/X3qjIM" method="POST">
          <h1>Form Title</h1>
          <label for="email">Your Email</label>
          <input name="Email" id="email" type="email" />
          <label for="email">Your Name</label>
          <input name="Name" id="name" type="text" />
          <label for="message">Your Message</label>
          <textarea name="message" rows="6" cols="50">Enter text here...</textarea>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
