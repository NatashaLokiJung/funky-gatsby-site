/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
// eslint-disable-next-line
import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import Image from "../components/image"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const imgbox = css`
    width: 30%;
    position: absolute;
    z-index: 10;
    bottom: 0;
    right: 0;
  `
  const wrapper = css`
    display: flex;
    flex-direction: column;
    background-color: pink;
    min-height: 100vh;
  `

  return (
    <>
      <div css={wrapper}>
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <div css={imgbox}>
          <Image />
        </div>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
