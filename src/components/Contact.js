import React from 'react'
import Banner from './Banner'
import welcomeImage from '../images/laptop.jpg'

const Contact = () => {
  return (
    <div>
      <Banner
      imageURL={welcomeImage}
      description="Learn to live in the moment instead of dwelling on the past or worrying about the future. "
        cta="CTA"
        position = "30% 45%"
      />
    </div>
  )
}

export default Contact
