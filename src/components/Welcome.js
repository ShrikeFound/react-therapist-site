import React from 'react'
import { Link } from 'react-router-dom'
import Banner from './Banner'
import portraitImage from '../images/portrait.jpg'
import Card from './Card'
const Welcome = ({ img }) => {
  return (
    <>
      <Banner
      imageURL={img}
      description="Helping You Increase Trust, Intimacy, and Connection in Your Relationship"
      cta="CTA"
      position="50% 34%"
    />
      <main>

        <h2 className="subtitle">Martha S. Webb, Licensed Clinical Social Worker</h2>
        <h1 className="title">We all need a little help at times.</h1>

        <section className="row container">

          <div className="frame">
            <img alt="portrait" src={portraitImage}/>
          </div>

          <div className="text-column">
            <p>No one is immune to life’s ups and downs. I am here for you when you need someone who understands, someone who believes in you. I focus on your strengths as a person, helping you to reach your full potential, even when you don’t fully believe in yourself.</p>
            <p>I have developed what I call the “Three Pronged Approach to Self Care”. I will coach you to do self care in three categories, which are cognitive, relaxation and expression. I will help you to improve your world view, to use holistic methods to promote relaxation and guide you to release negative feelings, allowing you to become the best and happiest you.</p>
            <p>If you’re searching for someone to work with you to fulfill your dreams, to help you to fill yourself up with what life takes out, then I am the therapist for you. Let’s work together to solve your life’s challenges. The joy is in the solving!</p>
            <Link className="button secondary" to="/contact">Email Me</Link>
          </div>
        
        </section>

        <section className="card-gallery container">
          <Card
            className="card"
            title="Anxiety"
            subtitle="Learn to Manage"
            description="Learn to live in the moment instead of dwelling on the past or worrying about the future. "
            cta="cta"
          />

          <Card
            className="card"
            title="Depression"
            subtitle="Learn to Manage"
            description="Regain your energy, your happiness, and your life. "
            cta="cta"
          />

          <Card
            className="card"
            title="Self Esteem"
            subtitle="Learn to Manage"
            description="Learn to live in the moment instead of dwelling on the past or worrying about the future. "
            cta="cta"
          />
        </section>

      </main>
    </>
  )
}

export default Welcome
