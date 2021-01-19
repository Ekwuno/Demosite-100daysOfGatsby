import React from 'react'
import {Link,graphql} from 'gatsby'

import Layout from '../componets/layout'

export const query = graphql`
query MyQuery {
  allContentfulCity {
    edges {
      node {
        name
        description
        map {
          lat
          lon
        }
        gatsbyPath(filePath: "/city/{contentfulCity.name}")
      }
    }
  }
}

`

export default function IndexPage ({data}){
  return (
    <Layout>
      <h1> 
        Hi I am a POC 
      </h1>
      <ul>
        {
          data.allContentfulCity.edges.map(({node:city})=> (
            <li
            key = {city.name}
            >
              {city.description} - {city.map.lat}- {city.map.lon}
                <h2>
                  <Link to = {city.gatsbyPath}>{city.name}</Link>
                </h2>
            </li>
          ))
        }
      </ul>
      <Link to= "/about"> To about page </Link>
    </ Layout>
  )
}