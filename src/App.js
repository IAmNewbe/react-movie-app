
import './App.css';
import { getMovieList } from "./Api"
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const baseUrl = process.env.REACT_APP_BASEIMGURL
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])
  
  console.log(popularMovies);
  return (
    <div className='container'>
      {popularMovies.map((movie, index) => {
        return (
          <div className="App" key={index}>
            <header className="App-header">
            <h1>Movie</h1>
            <article class="card">
              <div class="temporary_text">
                  <img src={`${baseUrl}/${movie.poster_path}`}/>
              </div>
              <div class="card_content">
                  <span class="card_title">{movie.title}</span>
                      <span class="card_subtitle">
                        <div className='Movie-date'>Date : {movie.release_date}</div>
                        <div className='Movie-rate'>rate : {movie.vote_average}</div>
                      </span>
                      <p class="card_description">{movie.overview}</p>
              </div>
            </article>
          </header>
        </div>
        )
      })}
    </div>
  );
}

export default App;
