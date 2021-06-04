import React from "react"
import { Link, graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"
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

const Blog = props => {
  const { data } = props
  const siteTitle = data.site.siteMetadata.title
  const posts = data.allMdx.edges

  return (
    <Layout location={props.location} title={siteTitle}>
      <GlobalStyles />
      <SEO />
      <div style={{ margin: "20px 0 40px", display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' }}>
        {posts.map(({ node }) => {
          console.log(node.frontmatter.reactions)
          const title = node.frontmatter.title || node.fields.slug;
          if(node.frontmatter.blogPost){
          return (
            <PostDiv key={node.fields.slug}>
              <Link
                style={{ boxShadow: `none` }}
                to={`blog/${node.frontmatter.path}`}
              >
                <HeaderPost headerImg={node.frontmatter.headerImg} />
                <PostTile style={{ marginBottom: rhythm(1 / 4) }}>
                  {title}
                </PostTile>
                <small>{node.frontmatter.date}</small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
              </Link>
            </PostDiv>
          )}
          return <></>
        })}
      </div>
    </Layout>
  )
}

export default Blog

const PostTile = styled.h3`
  margin-bottom: rhythm(1 / 4);
  font-family: MonteserratR;
  color: #f3b52a;
  margin-top: 1.5rem !important;
  margin-left: 1rem;
  a {
    font-family: MonteserratR;
    color: #f3b52a;
  }
`

const PostDiv = styled.div`
  margin-bottom: 2rem;
  width:35rem;
  @media (max-width: 768px) {
    width:20rem;
  }
  small,
  p {
    font-family: MontserratL;
    color: black;
    margin-left: 1rem;
  }
  border: 1px solid #f3b543;
  border-radius: 5px;
`


const HeaderPost = styled.div`
  background-image: url(${props => props.headerImg});
  width: 100%;
  height: 15rem;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
`

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            description
            blogPost
            headerImg
            path
          }
        }
      }
    }
  }
`