import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/Movies";
import Login from "./components/Login";
import MovieDetail from "./components/MovieDetail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie-detail/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
