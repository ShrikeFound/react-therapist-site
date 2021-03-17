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
    </div>
  )
}

export default GroupTherapy
