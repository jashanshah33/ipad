import { render } from "@testing-library/react";
import React from "react";
import Menu from "./menu";

class App extends React.Component {

    constructor(){
      super()
      this.state={
        menu:[
          {cover: "Cover Flow"},
          {music: "Music"},
          {games: "Games"},
          {setting: "Setting"}
        ] 
      }
    }

  render(){

    const{menu} = this.state
  return (
    <div className="App">
      <div className="screen">
        <div className="left-Screen">
          <div className="innerText">
        <h3>iPod.js</h3>
      {
        menu.map( (d) => {
          return <Menu 
          menu={d}
          />
        })
      }
      </div>

        </div>
        <div className="right-screen"></div>
      </div>
      <div className="controllers">
        <button className="top">MENU</button>
        <button className="left">
        <i class="fa-solid fa-backward-fast"></i>
        </button>
        <div className="enter"></div>
        <button className="right">
        <i class="fa-solid fa-forward-fast"></i>
        </button>
        <button className="bottom">
        <i style={{marginRight:2}} class="fa-solid fa-play"></i>      
        <i class="fa-solid fa-pause"></i>
         {/* <img src="https://cdn-icons-png.flaticon.com/512/5725/5725942.png" /> */}
        </button>
      </div>
    </div>
  );
  }
}

export default App;
