import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export function Headphone() {
  return(
  
        <StaticImage 
            src="../images/bose.jpeg" 
            alt="Headphone" 
            placeholder="blurred"
            layout="fixed"
            width={400}
            height={400}
            
        />

    )
}