import React from 'react'
import Banner from './Banner'

const Contact = ({ img }) => {
  return (
    <div>
      <Banner
        imageURL={img}
        description="Learn to live in the moment instead of dwelling on the past or worrying about the future. "
        cta="CTA"
        position="30% 45%"
        hide={true}
      />
      <main>
      <section className="container">
          <h1 className="title">Contact Me</h1>
          <div className="contact-description text-container">
          <p>Please give me a call at (619) 542-7727 for a free phone consultation. You can also reach me by email at mswbb1@yahoo.com.</p>
          <p>Please share any information you think is important. Please also mention whether you would like in-person or tele-health sessions. </p>
          </div>
        {/* <form className="contact-form" action="https://fieldgoal.io/f/X3qjIM" method="POST">
          <div className="contact-description">
          <p>To get in touch and schedule a session, you can call or email me. You can also use the form below.</p>
          <p>Please share any information you think is important. Please also mention whether you would like in-person or tele-health sessions. </p>
          </div>
          <div>
            <label for="email">Your Email</label>
            <input name="Email" id="email" type="email" />
            <label for="email">Your Name</label>
            <input name="Name" id="name" type="text" />
            <label for="message">Your Message</label>
            <textarea name="message" rows="6" cols="50" placeholder="write a brief message..."></textarea>
            <button className="button" type="submit">Submit</button>
            </div>
        </form> */}
        </section>
        </main>
    </div>
      
  )
}

export default Contact
