import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="Gear"/>
    <h1>Gear</h1>
    <Link to="/">back</Link>
  </Layout>
)

export default SecondPage
