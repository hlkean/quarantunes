
import React, { Component } from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import { StitchAuthProvider } from "./components/stitchAuth";
import Welcome from "./pages/welcome";

class App extends Component{
  render(){
    return(
      <StitchAuthProvider>
        <div className="App">
            <Welcome />
        </div>
      </StitchAuthProvider>
    );
  }
}

export default hot(module)(App);