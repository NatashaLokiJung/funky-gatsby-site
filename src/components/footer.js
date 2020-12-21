/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import PropTypes from "prop-types"
// eslint-disable-next-line
import React from "react"

const Footer = () => {
  const footerContainer = css`
    display: flex;
    padding: 20px;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    min-height: 80px;
    background-color: #663399;
  `
  return (
    <div css={footerContainer}>
      © {new Date().getFullYear()}, Built with{" "}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </div>
  )
}

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
