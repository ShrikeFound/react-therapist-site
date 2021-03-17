import React from 'react'

const Footer = () => {
  return (
    <footer>
      <ul className="info-list">
        <li>
          <strong>Martha S. Webb</strong><br/>
          5755 Vinley Place<br />
          San Diego, CA 92120
        </li>
        <li>
          <div><strong>Phone Number</strong><br/>
          (555)555-555 <br />
          </div>
          <div className="footer-email">
            <strong>Email</strong><br />
            martha.webb@therapy.com
          </div>
        </li>
      </ul>

    </footer>
  )
}

export default Footer
