import React from 'react'
import { Link, useParams } from 'react-router-dom';

const Description = ({movies}) => {
    const params= useParams();
    console.log(params)
    console.log(movies)
    const movie = movies.find(el=>el.id==params.id)
  return (
    <div>
       
        <h2  style={{color:"white"}} > {movie.description} </h2>
        <iframe src={movie.trailer} frameborder="0" title='trailer' ></iframe>
        <button>
          <Link to={"/"}>main</Link>
        </button>
    </div>
  )
}

export default Description