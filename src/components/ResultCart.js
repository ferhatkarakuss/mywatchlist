import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ResultCart = ({ movie }) => {
  const { watchlist, watched, addMovieToWatchlist, addMovieToWatched } =
    useContext(GlobalContext);

  const storedMovieWatched = watched.find((o) => o.id === movie.id);
  const storedMovie = watchlist.find((o) => o.id === movie.id)
    ? true
    : !!storedMovieWatched;
  return (
    <div className="result-card  h-20 ">
      <div className="poster-wrapper ">
        {movie.poster_path ? (
          <img
            className="h-24 w-20 lg:h-[150px] lg:w-[120px] "
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
      </div>

      <div className="info">
        <div className="header pl-1 lg:pl-4">
          <h3 className="title text-[13px] lg:text-xl first-letter:">
            {movie.title}
          </h3>
          <h4 className="release-date text-[13px] lg:text-xl font-bold">
            {movie.release_date ? movie.release_date.substring(0, 4) : "-"}
          </h4>
          <h4 className="release-date text-[13px] lg:text-xl font-bold">
            IMDB: <b>{movie.vote_average ? movie.vote_average : "-"}</b>
          </h4>
        </div>

        <div className="controls h-12 w-2 text-sm mr-24 pr-8 ml-auto lg:w-60 lg:mr-0 lg:h-36  ">
          <button
            className="btn mr-1 lg:mr-4"
            disabled={storedMovie}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Watchlist
          </button>
          <button
            className="btn "
            disabled={storedMovieWatched}
            onClick={() => addMovieToWatched(movie)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCart;
