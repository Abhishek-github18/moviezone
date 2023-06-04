import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navigation from "./component/Navigation/Navigation";
import Search from "./component/pages/search/Search";
import Header from "./component/Header/Header";
import Recommend from "./component/pages/Recommend Section/Recommend";
import Crud from "./component/pages/Crud Operation/Crud";
import MovieDetail from "./component/MovieDetail/MovieDetail";
import Genre from "./component/pages/Genre/Genre";
import Cast from "./component/pages/Cast/Cast";

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Search />} exact />
          <Route path="/recommend" element={<Recommend />} />
          <Route path="/recommend/genre" element={<Genre />} />
          <Route path="/recommend/cast" element={<Cast />} />
          <Route path="/crud" element={<Crud />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
        <Navigation />
      </Router>
    </div>
  );
}

export default App;
