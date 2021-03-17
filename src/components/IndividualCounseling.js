import React from 'react'
import Banner from './Banner'
import welcomeImage from '../images/anxiety.jpg'

const IndividualCounseling = () => {
  return (
    <div>
      <Banner
      imageURL={welcomeImage}
      description="Learn to live in the moment instead of dwelling on the past or worrying about the future. "
      cta="CTA"
      />
    </div>
  )
}

export default IndividualCounseling
