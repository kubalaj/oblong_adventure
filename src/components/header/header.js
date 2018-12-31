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
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
