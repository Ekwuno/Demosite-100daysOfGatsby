import React from 'react'
import {Link} from 'gatsby'
import Header from '../componets/header'
import Layout from '../componets/layout'

export default function AboutPage (){
  return (
    <Layout>
        
      <h1> 
        Hi I am an about page 
      </h1>
      <h2> Go back to <Link to="/"> home</Link></h2>
    </Layout>
  )
}