import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Pagina no Encontrada" />
        <h1 style={{
              textAlign: "center",
              marginTop: "1rem",
        }}>Página no encontrada</h1>
        <p style={{
              textAlign: "center",
              marginTop: "1rem",
        }}>Ve a nuestro inicio :)</p>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
