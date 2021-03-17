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
    </div>
  )
}

export default Contact
