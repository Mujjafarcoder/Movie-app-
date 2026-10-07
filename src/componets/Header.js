
import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import "./header.css";

export default function Header() {

  const navigate = useNavigate();
  const [data, setData] = useState("");

  function searchMovie(ev) {
    ev.preventDefault();

    if (data.trim() !== "") {
      navigate(`/searchmovie/${encodeURIComponent(data.trim())}`);
      setData("");
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">

      <div className="container">

        {/* LOGO */}
        <Link
          className="navbar-brand fw-bold text-warning"
          to="/popular"
        >
          🎬 MovieApp
        </Link>


        {/* MOBILE SEARCH */}
        <form
          className="mobile-search"
          onSubmit={searchMovie}
        >
          <input
            className="form-control"
            type="search"
            placeholder="Search..."
            value={data}
            onChange={(e) => setData(e.target.value)}
          />

          <button className="btn btn-warning" type="submit">
            🔍
          </button>
        </form>


        {/* MOBILE MENU BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* MENU */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                to="/popular"
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                to="/upcoming"
              >
                Upcoming
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                to="/toprated"
              >
                Top Rated
              </NavLink>
            </li>

          </ul>


          {/* DESKTOP SEARCH */}
          <form
            className="desktop-search"
            onSubmit={searchMovie}
          >

            <input
              className="form-control me-2"
              type="search"
              placeholder="Search movies..."
              value={data}
              onChange={(e) => setData(e.target.value)}
            />

            <button
              className="btn btn-warning"
              type="submit"
            >
              Search
            </button>

          </form>

        </div>

      </div>

    </nav>
  );
}
