import React, { Component } from 'react';
import './App.css';
import Webcam from "react-webcam";

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      imgsrc:'No picture'
    }
  }
  setRef = webcam => {
    this.webcam = webcam;
  };
 
  capture = () => {
    this.setState({
      imgsrc:this.webcam.getScreenshot()
    })
  };
  
  componentDidUpdate(){
    
    console.log(window.location.href+`app/${this.state.imgsrc.substring(24)}`)
  }

  render() {
    const videoConstraints = {
      width: 1280,
      height: 720,
      facingMode:  "environment" 
    };
    return (
      <div className="containerbox">
        <h1>SRASH</h1>
       
        <Webcam 
        audio={false}
        height={350}
        ref={this.setRef}
        screenshotFormat="image/jpeg"
        width={350}
        videoConstraints={videoConstraints}
        />
        <button onClick={this.capture}>Capture photo</button>
        <p>{this.state.imgsrc}</p>
      </div>
      
    );
  }
}


export default App;
