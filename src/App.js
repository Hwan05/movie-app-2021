import React from "react";
import PropTypes from "prop-types";


function Food ({name,picture,rating}){
  return (
    <div>
    <h1> I like {name} </h1>
    <h4>{rating}/5.0 </h4>
    <img src = {picture} width = "200" alt={name} />
    </div>
  );
}

Food.propTypes  = { // 인가한 프로퍼티 내가 원하는 형태가 맞는지 확인
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired //rating 값이 정수인지

};


const foodILike = [
  {
  id : 1,
  name : "kimchi",
  image :
  "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  rating :5.0
},
  {
  id : 2,
  name : "Samgyeopsal",
  image :
  "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  rating : 4.9


},
  {
  id : 3,
  name : "Bibibap",
  image :
  "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  rating : 3.5
},
  {
  id : 4,
  name : "Doncasu",
  image :
  "https://kstory365.files.wordpress.com/2015/01/kimchi-01-cabbage.jpg",
  rating : 4.3
}];

function renderFood(dish){
  console.log(dish);
  return <Food key = {dish.id} name ={dish.name} picture = {dish.image}/>;
}
function App() {
  return (<div> {foodILike.map( dish => (
    <Food key = {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating} />))}</div>
);
}

export default App;
