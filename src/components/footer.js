import React from "react"

const Footer = () => (
  <footer>
    <p>People of Color Code</p>
    <div>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a className="footer-link" href="https://www.gatsbyjs.org">
        Gatsby
      </a>
    </div>
    <div>
      Gradient Animation by {` `}
      <a className="footer-link" href="https://codepen.io/mohaiman">
        Mohammad Abdul Mohaiman
      </a>
    </div>
    <div>
      Floating Animation by {` `}
      <a className="footer-link" href="https://codepen.io/Lewitje">
        Lewi Hussey
      </a>
    </div>
  </footer>
)

export default Footer
