import React from 'react'
import StarRating from './StarRating'

const Search = ({text,handleChange,rating,handleRating}) => {
  return (
    <div className='header-container'>
        <div className='search-container'>
<h1>Our movie app</h1>
<form action="">
    <input type="text" value={text} onChange={handleChange} />
</form>
    <StarRating rating={rating} handleRating={handleRating} />
        </div>
    </div>
  )
}

export default Search