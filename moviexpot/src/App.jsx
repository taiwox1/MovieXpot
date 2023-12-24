import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import PageNotFound from "./components/PageNotFound/pageNotFound";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <div className="app">

      <Router>
        <Header></Header>
        <div className="container">

        
        <Routes>
          <Route path="/" exact Component={Home} />

          <Route path="/movie/:imdbID" Component={MovieDetail} />
          <Route path="*"  Component={PageNotFound} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
