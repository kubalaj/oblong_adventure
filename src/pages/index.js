import React from 'react'
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'


require('../styles/main.scss')

const keywords = ['adventure', 'blog', 'kayak', 'whitewater', 'trail', 'running', 'stories', 'van', 'sking'];
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={keywords} />
  </Layout>
)

export default IndexPage
