import React from 'react'
import { useParams } from 'react-router'
import useApi from '../customHook/useApi';
import './SingleMovie.css';

export default function Singlemovie() {
    const { movieid } = useParams();
    const singleMovie = useApi(`${process.env.REACT_APP_API}/3/movie/${movieid}?api_key=${process.env.REACT_APP_KEY}&language=en-US`);
    const movieCast = useApi(`${process.env.REACT_APP_API}/3/movie/${movieid}/credits?api_key=${process.env.REACT_APP_KEY}&language=en-US`);

    return (
        <main className="single-movie-page">
            {singleMovie && Object.keys(singleMovie).length > 0 && (
                <>
                    <section
                        className="single-movie-bg"
                        style={{
                            backgroundImage: singleMovie.backdrop_path
                                ? `linear-gradient(90deg, rgba(10, 12, 16, 0.96) 0%, rgba(10, 12, 16, 0.78) 55%, rgba(10, 12, 16, 0.42) 100%), url(${process.env.REACT_APP_POSTERPATH + singleMovie.backdrop_path})`
                                : undefined,
                        }}
                    >
                        <div className="container single-movie-hero">
                            <div className="row align-items-center g-4 g-lg-5">
                                <div className="col-8 col-sm-6 col-lg-4 col-xl-3 mx-auto mx-lg-0">
                                    {singleMovie.poster_path ? (
                                        <img
                                            src={process.env.REACT_APP_POSTERPATH + singleMovie.poster_path}
                                            className="single-movie-poster"
                                            alt={`${singleMovie.title || singleMovie.original_title} poster`}
                                        />
                                    ) : (
                                        <div className="single-movie-poster poster-placeholder">
                                            Poster unavailable
                                        </div>
                                    )}
                                </div>
                                <div className="col-lg-8 col-xl-9">
                                    <p className="single-movie-eyebrow">Movie details</p>
                                    <h1 className="single-movie-title">
                                        {singleMovie.title || singleMovie.original_title}
                                    </h1>
                                    <div className="single-movie-meta">
                                        {singleMovie.release_date && (
                                            <span>{new Date(singleMovie.release_date).getFullYear()}</span>
                                        )}
                                        {singleMovie.runtime > 0 && (
                                            <span>{Math.floor(singleMovie.runtime / 60)}h {singleMovie.runtime % 60}m</span>
                                        )}
                                        {singleMovie.vote_average > 0 && (
                                            <span className="single-movie-rating">
                                                ★ {singleMovie.vote_average.toFixed(1)} / 10
                                            </span>
                                        )}
                                    </div>
                                    {singleMovie.genres?.length > 0 && (
                                        <div className="single-movie-genres">
                                            {singleMovie.genres.map(genre => (
                                                <span className="single-movie-genre" key={genre.id}>
                                                    {genre.name}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                    <h2 className="single-movie-overview-title">Overview</h2>
                                    <p className="single-movie-overview">
                                        {singleMovie.overview || 'No overview is available for this movie yet.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {movieCast.cast?.length > 0 && (
                        <section className="container single-movie-cast">
                            <h2 className="single-movie-section-title">Top billed cast</h2>
                            <div className="row g-3 g-md-4">
                                {movieCast.cast.slice(0, 12).map(value => (
                                    <div className="col-6 col-sm-4 col-md-3 col-lg-2" key={value.id}>
                                        <article className="cast-card">
                                            {value.profile_path ? (
                                                <img
                                                    src={process.env.REACT_APP_POSTERPATH + value.profile_path}
                                                    className="cast-card-image"
                                                    alt={value.name}
                                                    loading="lazy"
                                                />
                                            ) : (
                                                <div className="cast-card-image cast-card-placeholder" aria-label={`No photo available for ${value.name}`}>
                                                    {value.name?.charAt(0) || '?'}
                                                </div>
                                            )}
                                            <h3 className="cast-card-name">{value.name}</h3>
                                            {value.character && (
                                                <p className="cast-card-character">{value.character}</p>
                                            )}
                                        </article>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}
                </>
            )}
        </main>
    )
}
