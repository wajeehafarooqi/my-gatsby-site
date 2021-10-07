import { graphql, Link } from "gatsby"
import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({data}) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2 >Design and develop</h2>
          <h3>GatsBy,,,,,</h3>
          <p>Lorem ipsum dolor sit amet.</p>
          <Link className={styles.btn} to="/projects">Profile</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}
export const query=graphql`
  query Banner {
    file(relativePath: {eq: "banner.png"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`