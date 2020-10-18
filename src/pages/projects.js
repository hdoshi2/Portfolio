import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        github
        id
        title
        url
        description
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  }
`

const ProjectsPage = ({ data }) => {

  const { allStrapiProjects: { nodes: projects } } = data;

  return <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="All Projects" />
    </section>
  </Layout>
}

export default ProjectsPage
