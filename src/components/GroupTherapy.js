import React from 'react'
import Banner from './Banner'
import welcomeImage from '../images/group.jpg'

const GroupTherapy = () => {
  return (
    <div>
      <Banner
      imageURL={welcomeImage}
      description="Helping You Increase Trust, Intimacy, and Connection in Your Relationship"
      cta="CTA"
      position="50% 34%"
      />
    </div>
  )
}

export default GroupTherapy
