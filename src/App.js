import './App.css';
import { moviesData } from './data';
import { useState } from 'react';
import MovieList from './components/MovieList';
import AddMovie from './components/AddMovie';
import Search from './components/Search';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Description from './components/Description';

function App() {
  const [movies, setMovies] = useState(moviesData)
  const [textSearch, setTextSearch] = useState("")
  const [rating, setRating] = useState(1)
  const handleRating = (x)=> setRating(x)
const handleChange = (e) => setTextSearch(e.target.value)
  const handleAdd = (newMovie) => setMovies([...movies,newMovie])
  return (
    <div className="App">
      <BrowserRouter>
        <Search rating={rating} handleRating={handleRating} text={textSearch} handleChange={handleChange} />
      <Routes>
        <Route path="/movies/:id" element={<Description movies={movies}/>}/>
        <Route index element={<MovieList movies={movies.filter(el=>el.name.toLowerCase().includes(textSearch.toLowerCase())
        && el.rating >= rating
        )}  />} />
      </Routes>
      </BrowserRouter>
      <AddMovie add={handleAdd}   />
      
    </div>
  );
}

export default App;
