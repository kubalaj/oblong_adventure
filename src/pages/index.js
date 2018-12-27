import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'

require('../styles/main.scss')

const keywords = ['adventure', 'blog', 'kayak', 'whitewater', 'trail', 'running', 'stories', 'van', 'sking'];
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keywords} />
    <Link to="/stories/">stories</Link>
    <Link to="/gear/">gear</Link>
    <Link to="/trip-reports/">trip reports</Link>
  </Layout>
)

export default IndexPage
