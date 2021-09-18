import React , { useEffect , useState } from 'react'
import requests from '../../requests';
import axios from '../../axios';
import classes from '../styles/Banner.module.css'
const Banner = () => {
    const [randomMovie , setRandomMovie] = useState([]);
    
    useEffect(()=>{
        const fetchMovie=async()=>{
            const response =await axios.get(requests.fetchNetflixOriginals);
           
             setRandomMovie(response.data.results[
                Math.floor(Math.random()*response.data.results.length)
            ]);
            
            
            
        }
        fetchMovie();
    
    },[])
    return (
       <div>
        <div className={classes.banner}
            style={{
                backgroundSize:'cover',
                backgroundImage:`url(
                    https://image.tmdb.org/t/p/original/${randomMovie?.poster_path}
                )`,
                backgroundPosition:'center center',
            
      
            }}
        >
        <div className={classes.banner_content}>
            <h1 className={classes.banner_title}>{randomMovie?.title || randomMovie?.original_name}</h1>
           
            <div className={classes.banner_button}>
                <button>Play</button>
                <button>My List</button>
            </div>
            <h1 className={classes.description}>{randomMovie.overview}</h1>
            
        </div>
        </div>
       </div> 
    )
}

export default Banner
