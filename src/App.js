import logo from './logo.svg';
import './App.css';
import { moviesData } from './data';
import { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Search from './components/Search';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [textSearch, setTextSearch] = useState("")
  const [rating, setRating] = useState(1)
  const handleRating = (x)=> setRating(x)
const handleChange = (e) => setTextSearch(e.target.value)
  const handleAdd = (newMovie) => setMovies([...movies,newMovie])
  return (
    <div className="App">
      <Search rating={rating} handleRating={handleRating} text={textSearch} handleChange={handleChange} />
      <AddMovie add={handleAdd}   />
      <MovieList movies={movies.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase())
        && el.rating >= rating
        )}  />
    </div>
  );
}

export default App;
