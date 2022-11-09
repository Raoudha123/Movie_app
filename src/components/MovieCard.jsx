import React from 'react'
import { Link } from 'react-router-dom'
import StarRating from './StarRating'

const MovieCard = ({movie}) => {
  return (
          <Link style={{textDecoration:"none"}} to={`/movies/${movie.id}`}>
    <div  className='movie-card' >
        {/* <p> {movie.rating} </p> */}
          <StarRating rating={movie.rating}  />
             <img src={movie.image} alt="" />
             <h3> {movie.name} </h3>
             <p>
                {movie.date}
             </p>
    </div>
          </Link>
  )
}

export default MovieCard