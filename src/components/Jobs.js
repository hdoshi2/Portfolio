import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"


const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        company
        date
        desc {
          id
          name
        }
        strapiId
        position
      }
    }
  }
`


const Jobs = () => {
  const data = useStaticQuery(query);
  console.log(data);
  return <h2>jobs component</h2>
}

export default Jobs
