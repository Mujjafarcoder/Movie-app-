


import React from 'react';
import { Link } from 'react-router';
import './Showmovies.css';

export default function Showmovies({ heading, data }) {
  const movies = data?.results;

  return (
    <main className="movie-list-page">
      <div className="container movie-list-container">
        <header className="movie-list-heading">
          <p className="movie-list-kicker">Discover something great</p>
          <h1>{heading}</h1>
          <p className="movie-list-subtitle">
            Find your next favorite movie.
          </p>
        </header>

        {!movies ? (
          <p className="movie-list-message" role="status">Loading movies…</p>
        ) : movies.length === 0 ? (
          <p className="movie-list-message">No movies found. Try another search.</p>
        ) : (
          <div className="row g-3 g-md-4">
            {movies.map(movie => {
              const title = movie.title || movie.name || 'Untitled movie';
              const releaseYear = movie.release_date
                ? new Date(movie.release_date).getFullYear()
                : null;

              return (
                <div className="col-6 col-md-4 col-lg-3" key={movie.id}>
                  <article className="movie-card">
                    <Link
                      to={`/singlemovie/${movie.id}`}
                      className="movie-card-poster-link"
                      aria-label={`View details for ${title}`}
                    >
                      {movie.poster_path ? (
                        <img
                          src={process.env.REACT_APP_POSTERPATH + movie.poster_path}
                          className="movie-card-poster"
                          alt={`${title} poster`}
                          loading="lazy"
                        />
                      ) : (
                        <div className="movie-card-poster movie-card-poster-placeholder">
                          <span>Poster unavailable</span>
                        </div>
                      )}
                      {movie.vote_average > 0 && (
                        <span className="movie-card-rating">
                          ★ {movie.vote_average.toFixed(1)}
                        </span>
                      )}
                    </Link>
                    <div className="movie-card-content">
                      <h2 className="movie-card-title">{title}</h2>
                      <div className="movie-card-details">
                        <span>{releaseYear || 'Release date unavailable'}</span>
                        <Link to={`/singlemovie/${movie.id}`} className="movie-card-link">
                          Details <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
