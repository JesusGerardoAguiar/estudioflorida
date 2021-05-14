const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const propertyPost = path.resolve(`./src/templates/property-template.js`)
  return graphql(
    `
      {
        allMdx {
          nodes {
            frontmatter {
              bathroom
              bedroom
              currency
              date
              description
              garage
              images
              listType
              location
              mts2
              path
              price
              propertyType
              title
              longitud
              latitud
              id
              soldout
              rented
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }
    console.log('this is on gatsby node ' + result)
    // Create blog posts pages.
    const properties = result.data.allMdx.nodes
    properties.forEach((product, index) => {
      createPage({
        path: `propiedad`,
        component: propertyPost,
        context: {
          identifier: product.frontmatter.identifier,
        },
      })
    })

    return null
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
