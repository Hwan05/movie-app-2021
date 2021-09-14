import React from "react";
import PropTypes from "prop-types";



function Movie({id,year,title,summary,poster}){
  return ( <div>


    <h4> {title} }</h4>



    </div>
  );
}

// 외부 Api에서 가져온 prop가 자신이 원하는 값이 맞는지 확인
Movie.propTypes = {

  id : PropTypes.number.isRequired,
  year : PropTypes.number.isRequired,
  title : PropTypes.string.isRequired,
  summary : PropTypes.string.isRequired,
  poster : PropTypes.string.isRequired




}


export default Movie;
