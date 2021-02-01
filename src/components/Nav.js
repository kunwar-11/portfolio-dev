import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function Nav() {
    return (
        <Navigation>
           <h1><Link id = 'logo' to = '/'>Capture</Link></h1>
           <ul>
               <li>
                   <Link to = '/'>About us</Link>
               </li>
               <li>
                   <Link to = '/work'>Our work</Link>
               </li>
               <li>
                   <Link to = '/contact'>Contact us</Link>
               </li>
           </ul>  
        </Navigation>
    )
}

const Navigation = styled.nav`
    min-height : 10vh;
    display : flex;
    justify-content : space-between;
    align-items : center;
    padding : 1rem 8rem;
    background : #282828;
    a {
        color : white;
        text-decoration : none;
    }
    #logo{
        font-size : 1.5rem;
        font-family : 'lobster' , cursive;
        font-weight : lighter;
    }
    ul {
        display : flex;
        list-style : none;
    }
    li {
        padding-left : 10rem;
        position : relative;
    }
`
export default Nav
