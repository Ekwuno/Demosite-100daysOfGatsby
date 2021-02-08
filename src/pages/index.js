import React from 'react'
import {graphql} from 'gatsby'
import {Box,Text,Link} from "@chakra-ui/react"

import Layout from '../componets/layout'
import { Headphone } from '../componets/headphones'

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

      <Box  as = "button" borderRadius="md" bg="tomato" color="white" px={4} h={10}>
        <Text frontSize="xl"> Hello I am from Chakra</Text>
      </Box>
     

     <Headphone/>
      <ul>
        {
          data.allContentfulCity.edges.map(({node:city})=> (
            <li
            key = {city.name}
            >
              {city.description} - {city.map.lat} - {city.map.lon}
                <Text>
                  <Link color="teal.500" href = {city.gatsbyPath}>{city.name}</Link>
                </Text>
            </li>
          ))
        }
      </ul>
      <Link href= "/about"> To about page </Link>
    </ Layout>
  )
}