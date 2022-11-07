const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const propertyPost = path.resolve(`./src/templates/property-template.js`);
  const blogPost = path.resolve(`./src/templates/blog-template.js`);
  const projectPost = path.resolve(`./src/templates/project-template.js`);

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
              location
              rooms
              title
              headerImg
              date
              description
              blogPost
              isProject
              map
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
      
      if(product.frontmatter.isProject){
        createPage({
          path: `project/${product.frontmatter.id}`,
          component: projectPost,
          context: {
            slug: product.frontmatter.id,
          },
        })
      }
      if(product.frontmatter.blogPost){
        createPage({
          path: `blog/${product.frontmatter.path}`,
          component: blogPost,
          context: {
            slug: product.frontmatter.path,
          },
        })
      }
      createPage({
        path: `propiedad`,
        component: propertyPost,
        context: {
          identifier: product.frontmatter.identifier,
        },
      })
    })
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
