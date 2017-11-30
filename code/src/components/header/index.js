import React from "react"
import Grid from "lib/grid"

import "./style.css"

class Header extends React.Component {

  render() {
    return (
      <header>

        <label className="hamburger-mobile" htmlFor="hamburger-menu" />
        <input className="hamburger-checkbox" id="hamburger-menu" type="checkbox" />
        <ul className="mobile-menu">
          <li href="http://technigo.io">Technigo</li>
          <li href="http://technigo.io">Boot Camp</li>
          <li href="http://technigo.io">Stories</li>
          <li href="http://technigo.io">About</li>
        </ul>
        <Grid className="header-grid" >
          <a href="http://technigo.io">Technigo</a>
          <a href="http://technigo.io">Boot Camp</a>
          <a href="http://technigo.io">Stories</a>
          <a href="http://technigo.io">About</a>
        </Grid>
      </header>
    )
  }
}

export default Header
