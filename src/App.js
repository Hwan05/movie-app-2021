import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count : 0
  };

// render stat 값을 setState을 통페이지가 refresh 되고 render function가 다시 호출
// 직접 state object를 호출하는것은 좋지 않다.
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  }; // 현재 state를 효율적으로 가져오는 방법
  minus = () => {
    this.setState({count: this.state.count - 1});
  };

  componentDidMount(){ // Component first render
    console.log("Component rendered");
  }

  componentDidUpdate() { // Component update, Rerender
    console.log("Component update");
  }

  componentWillUnmount() { // render finish
    console.log("Goodbye");
  }



  render(){
    console.log("I'm rendering");
    return (
      <div>

      <h1> the number is : {this.state.count} </h1>
      <button onClick={this.add}>Add </button>
      <button onClick={this.minus}>Minus </button>


      </div>
    );
  }

}

export default App;
