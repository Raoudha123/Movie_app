import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies}) => {
  return (
    <div className='movie-list'>
        {
            movies.map(el=>
                <MovieCard key={el.id}  movie={el} />
                )
        }
    </div>
  )
}

export default MovieList