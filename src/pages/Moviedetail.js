import React , {useState , useEffect} from 'react'
import styled from 'styled-components'
import {useHistory} from 'react-router-dom'
import {MovieState} from '../movieState'
function Moviedetail() {
    const history = useHistory();
    const url = history.location.pathname;
    const [movies ,setMovies] = useState(MovieState);
    const [movie , setMovie] = useState(null);

    useEffect(() => {
        setMovie(movies.filter(state => state.url === url)[0])
    },[movies , url])
    console.log(movie)
    return (
        <>
        {movie && (
            <Details>
                <Heading>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt="mainImg"/>
                </Heading>
                <Awards>
                    {movie.awards.map(award => (
                        <Award title = {award.title} description = {award.description}/>
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt="secondaryImg"/>
                </ImageDisplay>
            </Details>
          )}  
        </>
    )
}

const Details = styled.div`
    color : white;
`

const Heading = styled.div`
    min-height : 90vh;
    padding-top : 20vh;
    position : relative;
    h2 {
        position : absolute;
        top : 10%;
        left : 50%;
        transform : translate(-50% , -10%)
    }
    img {
        width : 100%;
        height : 80vh;
        object-fit : cover;
    }
`
const Awards = styled.div`
    min-height : 80vh;
    display :flex;
    margin : 5rem 10rem;
    align-items : center;
    justify-content : space-around;
`
const AwardStyle = styled.div`
    padding : 5rem;
    h3 {
        font-size : 2rem;
    }
    .line {
        width : 100%;
        height : 0.5rem;
        background : #23d997;
        margin : 1rem 0rem;
    }
    p{
        padding : 2rem 0rem;
    }
`
const ImageDisplay = styled.div`
    min-height : 50vh;
    img {
        width : 100%;
        height : 100vh;
        object-fit: cover;
    }
`
const Award = ({title , description}) => {
    return (
        <AwardStyle>
            <h3>{title}</h3>
            <div className="line"></div>
            <p>
                {description}
            </p>
        </AwardStyle>
    )
}
export default Moviedetail
