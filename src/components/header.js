/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
import PropTypes from "prop-types"
// eslint-disable-next-line
import React from "react"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => {
  const headerContainer = css`
    display: flex;
    min-height: 80px;
    padding: 20px;
    align-items: center;
    width: 100%;
    background-color: #663399;
  `

  return (
    <header css={headerContainer}>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
