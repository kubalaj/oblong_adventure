import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

import './header.scss'

const Header = ({ siteTitle }) => (
  <div className="header">
    <div className="container">
      <h1>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
    <Link to="/stories/">stories</Link>
    <Link to="/gear/">gear</Link>
    <Link to="/trip-reports/">trip reports</Link>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
