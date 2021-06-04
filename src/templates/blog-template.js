import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"
import { createGlobalStyle } from "styled-components"
const GlobalStyles = createGlobalStyle`
@font-face {
  font-family: MontserratRegular;
  src: url(${require("../../content/assets/fonts/Montserrat-Regular.ttf")});
}
@font-face {
  font-family: MontserratBold;
  src: url(${require("../../content/assets/fonts/Montserrat-SemiBold.ttf")});
}
@font-face {
  font-family: LeagueSpartanBold;
  src: url(${require("../../content/assets/fonts/LeagueSpartan-Bold.otf")});
}
  h4,h5,h6{
  }
  a{
    text-decoration: none!important;
  }
`

class BlogPostTemplate extends React.Component {
  render() {
    const { data } = this.props
    const posts = data && data.allMdx && data.allMdx.nodes && data.allMdx.nodes
      .filter(node => node.frontmatter.blogPost===true)
      .map(frontmatter => {
        return { ...frontmatter.frontmatter, body:frontmatter.body }
      })
  
    const post = posts && posts.length > 0 && posts.filter((post) => post.path === this.props.location.pathname.split('/')[2])[0]
    const siteTitle = post.title
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <GlobalStyles />
        <SEO
          title={post.title}
          description={post.description || post.excerpt}
        />
        <Container>

        <HeaderPost headerImg={post.headerImg} />
        <PostTile>{post.title}</PostTile>
        <p
          style={{
            ...scale(-1 / 5),
            fontFamily: "MontserratRegular",
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.date.split('T')[0]}
        </p>
        <MDXRenderer style={{ fontFamily: "MontserratRegular!important" }}>
          {post.body}
        </MDXRenderer>
        </Container>

      </Layout>
    )
  }
}

export default BlogPostTemplate

const Container = styled.div`
  padding-left:10rem;
  padding-right:10rem;
  padding-bottom:10rem;
`

const PostTile = styled.h1`
  font-family: LeagueSpartanBold;
  color: #f3b52a;
  margin-top: 1rem;
  margin-bottom:3rem;
`


const HeaderPost = styled.div`
  background-image: url(${props => props.headerImg});
  width: 100%;
  height: 30rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  margin-top: 4rem;
`

export const pageQuery = graphql`
  query BlogBySlug {
    allMdx {
      nodes {
        body
        frontmatter {
          title
        headerImg
        date
        description
        blogPost
        path
        }
      }
    }
  }
`