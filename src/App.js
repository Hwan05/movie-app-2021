import React from "react";

class App extends React.Component {

  state = {
    isLoading: true,
    movies : []
  }; // 기본 loading true


// component first start
  componentDidMount() {
    // loading 6초 설정
    setTimeout(() => {
      this.setState({isLoading: false});
    }, 6000);


  }

  render(){
    // this.state object 할당
    const { isLoading } = this.state;
    return(
      <div> {isLoading ? "Loading..." : "We are ready"}
      </div>
    );
  }
}

export default App;
