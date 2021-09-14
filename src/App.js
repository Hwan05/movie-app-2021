import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";
// axios 외부 API 호출
class App extends React.Component {

  state = {
    isLoading: true,
    movies : []
  }; // 기본 loading true

 // 함수 비동기 awit axios가 끝날때까지 대기
  getmovies = async () =>{
    const {data:{data:{movies}}} = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading : false}); // state > movie에 추출한 movies 내용 저장
  }; // awit이 끝나면 loading으로 저장

// component first start
   componentDidMount() {
     this.getmovies(); // getmovies 호츌
  }

  render(){
    // this.state object 할당
    const { isLoading, movies } = this.state;
    return(
      <section className = "container">
      {isLoading ? (
        <div className ="loader">
          <span className = "loader__text">Loading...</span>
        </div>
      ) : <div className = "movie">
        {movies.map(movie => (
          <Movie
          key = {movie.id}
          id = {movie.id}
          year = {movie.year}
          title = {movie.title}
          summary = {movie.summary}
          poster = {movie.medium_cover_image}
          genres = {movie.genres}
          />
        ))}
      </div>
    }
    </section>
    );
  }
}

export default App;
