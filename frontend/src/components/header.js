import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import './header.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#4A3333`,
      marginBottom: `1.45rem`,
      width: "100%",
      position: "relative",
      zIndex: '4'
    }}
  >
    <div id="header_main"
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
        backgroundColor: '#4A3333',
        textAlign: "center",
        width: "100%"
        
      }}
    >
      <img
      src="https://upload.wikimedia.org/wikipedia/en/a/ae/Los_Pollos_Hermanos_logo.png"
      width={180}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="Los Pollos Hermanos"
      style={{ marginBottom: `1.45rem`,

    }}
    />
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `#F9FFEA`,
            textDecoration: `none`,
            textAlign: "center"
          }}
        >
          Under new management!
        </Link>
      </h1>
    </div>
    <div className="dropdown">
      <button className="dropbtn"><img className='arrow' src={'https://cdn-icons-png.flaticon.com/512/5234/5234126.png'}/></button>
      <div className="dropdown-content">
        <Link to="#about">About Us</Link>
        <Link to="#menu">Menu</Link>
        <Link to="#order">Order</Link>
      </div>
    </div>
  </header>
  
)

// make a component here that sticks the dropdown menu to the top of the page past a certain scroll distance

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
