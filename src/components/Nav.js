import React from 'react'
import styled from 'styled-components'
function Nav() {
    return (
        <Navigation>
           <h1><a id = 'logo' href="#">Capture</a></h1>
           <ul>
               <li>
                   <a href="#">About us</a>
               </li>
               <li>
                   <a href="#">Our work</a>
               </li>
               <li>
                   <a href="#">Contact us</a>
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
