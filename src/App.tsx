

import {useState,useEffect} from 'react';
import viteLogo from '/vite.svg'
import './App.css'
import api from './api/axiosConfig';
import { Movie, ApiInstance } from './types';

const MovieAPIUrl = import.meta.env.VITE_MOVIEHUB_API_URL;
function App() {
  const [movies, setMovies] = useState<Movie[]>();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
    
      </div>
   
      <p className="read-the-docs">
      URL:{MovieAPIUrl}
       
      </p>
      <p className="read-the-docs">
      {movies && movies.length > 0 && movies[0].genres ? movies[0].genres.join(', ') : ''}
       
      </p>
    </>
  )
}
export default App
