import React from 'react'
import Banner from './Banner'

const IndividualCounseling = ({ img }) => {
  return (
    <div>
      <Banner
      imageURL={img}
      description="Learn to live in the moment instead of dwelling on the past or worrying about the future. "
      cta="Contact Me"
      position="50% 25%"
      />

      <main>
        <h1 className="title">Individual Counseling</h1>

        <section className="row container">
          <div className="column">
          <p>I believe we could all use help sometimes, so I will be there to listen and empathize. I will also work as a coach to help you do self care that fills you back up with what life takes out. </p>
          <p>I have developed what I call the three pronged approach to self care, which is cognitive, relaxation and expression. I will educate you in terms of certain thought patterns you can change, so you will think in a way that makes you feel better. Then I will encourage relaxation techniques you will use that you choose, as we are all different in terms of what we find relaxing.  I will also encourage you to make your life what you want it to be and let go of what does not serve you. </p>
          </div>
        </section>
      </main>

    </div>
  )
}

export default IndividualCounseling
