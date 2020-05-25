import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout title="Error 404" color="red">
    <SEO title="404: Not found" />

    <div className="content">
      <h2>NOT FOUND</h2>
      <p>Sorry, this page does not exist.</p>
    </div>
  </Layout>
)

export default NotFoundPage
