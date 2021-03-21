import React from 'react'
import Banner from './Banner'

const IndividualCounseling = ({ img }) => {
  return (
    <div>
      <Banner
      imageURL={img}
      description="Learn to live in the moment instead of dwelling on the past or worrying about the future. "
      cta="CTA"
      position="50% 25%"
      />

      <main>
        <h1 className="title">Individual Counseling</h1>

        <section className="row container">
          <div className="column">
          <p>No one is immune to life’s ups and downs. I am here for you when you need someone who understands, someone who believes in you. I focus on your strengths as a person, helping you to reach your full potential, even when you don’t fully believe in yourself.</p>
          <p>I have developed what I call the “Three Pronged Approach to Self Care”. I will coach you to do self care in three categories, which are cognitive, relaxation and expression. I will help you to improve your world view, to use holistic methods to promote relaxation and guide you to release negative feelings, allowing you to become the best and happiest you.</p>
          </div>
        </section>
      </main>

    </div>
  )
}

export default IndividualCounseling
