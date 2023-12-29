import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "./Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsynMovies, fetchAsynShows } from "../../features/movies/movieSlice";


function Header() {
  const [term, setTerm] = useState("");
const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();

    if (term === "") return alert("Please enter Search term")
    dispatch(fetchAsynShows(term))
    dispatch(fetchAsynMovies(term))


    console.log(term);
  }
  return (
    <div className="header">
      <div >
        {" "}
        <Link to="/"> <div className="logo">MovieXpot  </div></Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button>
           
            <i className="fa fa-Search"> Search </i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}

export default Header;
