import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1>Üdv a surimi-project oldalán!</h1>
    <p>Tekintsd meg a blog postokat amik Markdown oldalakból generálódnak</p>
    <p>
      <Link to="/blog/my-first-post/">Kattints az első Markdown blog posthoz</Link>
      <br />
      <Link to="/blog/my-second-post/">Kattints a második Markdown blog posthoz</Link>
    </p>
  </Layout>
)

export default IndexPage
