import React from 'react'
import Banner from './Banner'

const GroupTherapy = ({ img }) => {
  return (
    <div>
      <Banner
      imageURL={img}
      description="Helping You Increase Trust, Intimacy, and Connection in Your Relationship"
      cta="CTA"
      position="50% 34%"
      />


      <main>
        {/* <h2 className="subtitle">Martha S. Webb, Licensed Clinical Social Worker</h2> */}
        <h1 className="title">Life Management Therapy Group</h1>

        <section className="row container">
          <div className="column">
            <p>
              I guide a stress management group based on the three pronged approach to healthcare: the cognitive approach, relaxation skills, and expression of positive into your life and negative out of your life.
            </p>
            <p>
              With the three pronged approach, we will learn how to cope with life's daily activities, manage our hurts and griefs, discuss our plans, and set and work towards our goals.
            </p>
          </div>
        </section>
      </main>


    </div>
  )
}

export default GroupTherapy
