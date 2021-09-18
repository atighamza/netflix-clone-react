import React, { useEffect, useState , useRef} from 'react'
import axios from '../../axios';
import classes from '../styles/Row.module.css'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const base_url = 'https://image.tmdb.org/t/p/original/';


const Row = ({ title, fetchUrl, largeRow, isOriginalCategory }) => {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');
    const reference = useRef();

    const opts = {
        height: '390',
        width: '98%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };
    


    useEffect(() => {
        const fetching = async () => {
            const response = await axios.get(fetchUrl);
            setMovies(response.data.results);

        }
         fetching();
        

    }, [])

    

    const openTrailerHandler = (movie) => {
        if (trailerUrl)
            setTrailerUrl('');
        else {
            movieTrailer(movie.title)
                .then((url) => {
                    /*const urlParams = new URLSearchParams(new URL(url)).search;
                    setTrailerUrl(urlParams.get('v'));*/
                    const newUrl = new URL(url);
                    const urlParams = new URLSearchParams(newUrl.search).get('v');
                    setTrailerUrl(urlParams);
                })
                .catch((error) => console.log(error))
        }
    }
    return (
        <div className={classes.row} >
            <h2>{title}</h2>
            
            <div className={classes.row_posters} ref={reference}>
                
                {movies.map(movie => (
                    <div className={classes.poster} key={movie.id}>
                        <img
                            onClick={() => { openTrailerHandler(movie); console.log('clicked') }}
                            className={classes.row_poster}
                            src={`${base_url}${largeRow ? movie.poster_path : movie.backdrop_path}`}
                            alt={movie.title}
                        />
                        <p>{movie?.title || movie?.original_name}</p>
                    </div>
                ))}
                
            </div>
          
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}

export default Row
