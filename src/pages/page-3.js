/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"
// eslint-disable-next-line
import { Link } from "gatsby"
import React, { useState, useEffect } from "react"
// import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  // Client-side Runtime Data Fetching
  const [aJoke, setJoke] = useState()
  useEffect(() => {
    fetch(`https://icanhazdadjoke.com/`, {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    })
      .then(response => response.json())
      .then(result => {
        setJoke(result.joke)
      })
  }, [])

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

  const jokebox = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    background: #e0d4ec;
    margin: 20px;
    padding: 30px;
    border-radius: 20px;
  `

  const button = css`
    width: 140px;
    padding: 15px;
    margin-top: 30px;
    border: 4px solid;
    border-color: #ab8bcc;
    border-radius: 10px;
    cursor: pointer;
    background-color: #663399;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
  `

  return (
    <Layout>
      <SEO title="Page two" />
      <section css={container}>
        <section css={txtarea}>
          <Link to="/">&larr; Back to Homepage</Link>
          <h2>Hi from the second page</h2>

          <p>
            {" "}
            Have some really awful dad jokes from{" "}
            <a href="https://icanhazdadjoke.com/">icanhazdadjoke.com</a>:
          </p>
          <section css={jokebox}>
            <h3>"{aJoke}"</h3>
            <Link to="/page-2/">
              <button css={button}>New joke!</button>
            </Link>
          </section>
        </section>
      </section>
    </Layout>
  )
}

export default SecondPage
