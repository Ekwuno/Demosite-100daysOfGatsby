import React from 'react'
import {Link,graphql} from 'gatsby'
import Layout from '../../componets/layout'


export const query = graphql`
query ($id: String = "") {
    contentfulCity(id: {eq: $id}) {
      name
      description
      map {
        lat
        lon
      }
    }
  }
`

export default function City({data}) {
    return(
        <Layout>
            <h2>
               <Link to = "/">{data.contentfulCity.name}</Link> 
            </h2>

            <h3>
                {data.contentfulCity.description}
            </h3>
            
            <h4>
                {data.contentfulCity.map.lat} - {data.contentfulCity.map.lon}
            </h4>
        </Layout>
    )
}