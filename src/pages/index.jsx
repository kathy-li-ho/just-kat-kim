import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout/Layout"
import SEO from "../components/seo/SEO"

const HomePage = () => (
  <Layout>
    <SEO />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>some stuff
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default HomePage
