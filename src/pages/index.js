import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


require('../styles/main.scss')

const keywords = ['adventure', 'blog', 'kayak', 'whitewater', 'trail', 'running', 'stories', 'van', 'sking'];
const IndexPage = () => (
  <Layout>
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Overpass|Permanent+Marker" rel="stylesheet"></link>
    </Helmet>
    <p className="test">test</p>
    <SEO title="Home" keywords={keywords} />
    <Link to="/stories/">stories</Link>
    <Link to="/gear/">gear</Link>
    <Link to="/trip-reports/">trip reports</Link>
  </Layout>
)

export default IndexPage
