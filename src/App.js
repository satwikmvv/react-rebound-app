import React, { Component } from 'react';
import './App.css';
import Camera from 'react-camera';

class App extends Component {
  constructor(props) {
    super(props);
    this.takePicture = this.takePicture.bind(this);
  }

  takePicture() {
    this.camera.capture()
    .then(blob => {
      console.log(blob);
      this.img.src = URL.createObjectURL(blob);
      this.img.onload = () => { URL.revokeObjectURL(this.src); }
    })
  }

  render() {
    console.log(this);
    return (
      <div className="containerbox">
        <h1>SRASH</h1>
        <div style={style.container}>
          <Camera
            style={style.preview}
            ref={(cam) => {
              this.camera = cam;
            }}
          >
            
          </Camera>
            <button onClick={this.takePicture}>Capture</button>
          <img
            style={style.captureImage}
            alt=''
            ref={(img) => {
              this.img = img;
            }}
          />
        </div>
      </div>
      
    );
  }
}

const style = {
  container: {
    height: '50%' ,
    width:'80%',
    margin: '0 auto'
  },
  preview: {
  },
  captureContainer: {
    display: 'flex',
    justifyContent: 'center',
    bottom: 0,
    width: '100%'
  },
  captureButton: {
    backgroundColor: '#000',
    borderRadius: '50%',
    height: 56,
    width: 56,
    color: '#000',
    margin: 20
  },
  captureImage: {
    width: '100%',
  }
};
export default App;
