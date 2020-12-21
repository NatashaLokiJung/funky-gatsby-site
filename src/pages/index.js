/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
// eslint-disable-next-line
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => {
  const container = css`
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    min-height: 500px;
  `
  const txtarea = css`
    background: #ab8bcc;
    width: 80%;
    padding: 20px;
    height: 400px;
    border-radius: 50px;
    overflow-y: scroll;
  `

  return (
    <Layout>
      <SEO title="Home" />

      <section css={container}>
        <section css={txtarea}>
          <Link to="/page-2/">Go to page 2 &rarr;</Link> <br />
          <h2>Hello from page 1</h2>
          <p>
            Is this here the prettiest site I've ever made? Absolutely not!{" "}
            <br></br> But I'm learning how to make a website using Gatsby.js and
            that's the important bit here.
          </p>
          <br></br>
          <p>
            If you want to see more of my wacky projects, then come on over to
            my <a href="https://github.com/NatashaLokiJung">Github profile</a>{" "}
            or tweet me{" "}
            <a href="https://twitter.com/tashilokijung">@tashilokijung</a>.
          </p>
          <br></br>
          <br></br>
        </section>
      </section>
    </Layout>
  )
}

export default IndexPage
