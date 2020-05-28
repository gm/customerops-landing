import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import mockupFrame from "../images/mockup-frame.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "100vh",
        width: "100vw",
        opacity: 0.5,
      }}
    />
    <h1 style={{ textAlign: "center" }}>CustomerOps</h1>
    <p style={{ textAlign: "center", maxWidth: 440 }}>
      Because it would be an absolute shame to have a consulting company without a website.
    </p>
    <Button onclick="window.location.href='mailto:graham@customerops.llc';">Contact Us</Button>
    
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
