import React from 'react'
import Header from './header'
import { Link  } from "gatsby"


const ListLink = props => (
 <li >
    <Link  to={props.to}>{props.children}</Link>
</li>    
)

export default function Layout({children}){

    return(
        <div>
            <Header>
                     <Link to="/" >
                     <h3>MySweetSite </h3>
                    </Link>
           

        <ul>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
        </ul>

        </Header>
        
            {children}
        </div>
    )
}