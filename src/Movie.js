import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";



function Movie({id,year,title,summary,poster,genres}){
  return (
    <div className = "movie">
     <div className = "movie-data">

         <img src = {poster} alt = {title} title = {title} />
         <h4 className = "movie-title"> {title} </h4>
         <h5 className = "movie-year"> {year} </h5>
         <ul className = "genres">
           {genres.map((genres, index) => ( <li key={index} className = "genres-on"> {genres}</li>
         ))}
         <p className = "movie-summary"> {summary} </p>

         </ul>
     </div>
    </div>
  );
}

// 외부 Api에서 가져온 prop가 자신이 원하는 값이 맞는지 확인
Movie.propTypes = {

  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired,
  genres : PropTypes.arrayOf(PropTypes.string).isRequired //배열





};


export default Movie;
