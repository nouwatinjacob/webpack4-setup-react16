import React from "react";
import ReactDOM from "react-dom";

class Index extends React.Component {
  render() {
    let myStyle = {
      fontSize: 50,
      color: red
    }
    return (
      <div>
       Hello React!
        <h1 style={myStyle}>{1+1}</h1>    
      </div>
    );
  }
}

ReactDOM.render(<Index />, document.getElementById("index"));