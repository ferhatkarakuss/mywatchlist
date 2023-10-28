import React, { useState } from "react";
import ResultCart from "./ResultCart";

const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  function onChange(e) {
    setQuery(e.target.value);

    fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setResults(data.results);
        } else {
          setResults([]);
        }
      });
  }

  return (
    <div className="add-page ">
      <div className="  ">
        <div className="add-content w-full lg:w-3/4  ">
          <img
            className="h-3/4 w-full "
            src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/9ZyAUZrfccsjtDwYgc7yvOBnqM9.jpg"
          />
          <div className="titles text-lg  pb-20 left-5 right-5 lg:text-2xl">
            <h2 className="">Welcome.</h2>
            <h2 className="">
              Millions of movies, TV shows and people to discover. Explore
              now...
            </h2>
          </div>
          <div className="input-wrapper">
            <input
              className="bg-gray-200 mb-24 "
              type="text"
              value={query}
              onChange={onChange}
              placeholder="Search Movie, Tv show or person..."
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.id} className="lg:mb-12">
                  <ResultCart movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Add;
