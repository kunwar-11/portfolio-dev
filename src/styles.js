import styled from 'styled-components'
import {motion} from 'framer-motion'
export const Aboutus = styled(motion.div)`
    min-height : 90vh;
    display: flex;
    align-items : center;
    justify-content : space-between;
    padding : 5rem 10rem;
    color : white;
`

export const AboutusTitle = styled.div`
    flex : 1;
    padding-right : 5rem;
    z-index : 2;
    h2 {
        font-weight : lighter;
    }
`

export const AboutusImage = styled.div`
    flex : 1;
    overflow : hidden;
    z-index : 2;
    img {
        width : 100%;
        height : 80vh;
        object-fit : cover;
    }
`

export const AboutusTitlePart = styled.div`
    overflow : hidden;
`