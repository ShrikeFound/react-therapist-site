import React from 'react'
import Banner from './Banner'
import portraitImage from '../images/sunset.jpg'
import { Link } from 'react-router-dom'

const GroupTherapy = ({ img }) => {
  return (
    <div>
      <Banner
      imageURL={img}
      description="Helping You Increase Trust, Intimacy, and Connection in Your Relationship"
      cta="Schedule a Session"
      position="50% 34%"
      />


      <main>
        {/* <h2 className="subtitle">Martha S. Webb, Licensed Clinical Social Worker</h2> */}
        <h1 className="title">Life Management Skills</h1>

        <section className="row container">

          <div className="text-column group-therapy">
            <p>
              I facilitate a stress management group based on the three pronged approach to self care: the <b>cognitive</b> approach, <b>relaxation</b> skills, and <b>expression</b> of positive into your life and negative out of your life.
            </p>
            <p>
              Utilizing the three pronged approach in the group you will learn to cope with challenges, manage your feelings, as well as make life goals. The group’s  support and encouragement will help you achieve them as well. 
            </p>
            <Link className="button secondary" to="/contact">Email Me</Link>
          </div>
        
           <div className="frame">
            <img alt="six people on a mountain in front of a sunset raising their hands in a peace sign" src={portraitImage}/>
          </div>

        </section>
      </main>


    </div>
  )
}

export default GroupTherapy
