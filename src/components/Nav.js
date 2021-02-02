import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'
function Nav() {
    const {pathname} = useLocation()
    return (
        <Navigation>
           <h1><Link id = 'logo' to = '/'>Capture</Link></h1>
           <ul>
               <li>
                   <Link to = '/'>About us</Link>
                   <Line initial = {{width : '0%'}} animate = {{width : pathname === '/' ? '50%' : '0%'}} transition = {{duration : 1}}/>
               </li>
               <li>
                   <Link to = '/work'>Our work</Link>
                    <Line initial = {{width : '0%'}} animate = {{width : pathname === '/work' ? '50%' : '0%'}} transition = {{duration : 1}}/>
               </li>
               <li>
                   <Link to = '/contact'>Contact us</Link>
                    <Line initial = {{width : '0%'}} animate = {{width : pathname === '/contact' ? '50%' : '0%'}} transition = {{duration : 1}}/>
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
    position : sticky;
    top : 0;
    z-index : 10;
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
    @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;
    #logo {
      display: inline-block;
      margin: 1rem;
    }
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
  @media (max-width: 1300px) {
    left: 0%;
  }
`;
export default Nav
