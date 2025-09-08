import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css' 

import HomePage from './pages/Homepage';
import Register from "./pages/Register";
import Login from './pages/Login';
import MovieDetailsPage from './pages/MovieDetailsPage';

import NavBar from "./components/NavBar"

function App() {
  return (
    <BrowserRouter>
        <div data-theme="synthwave">
          <NavBar />

          <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="login" element={<Login/>} />
            <Route path={`/movieDetails/:movieId`} element=<MovieDetailsPage/> />
          </Routes>
        </div>
    </BrowserRouter>
  )
}

export default App