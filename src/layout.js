import React from "react";
import Menu from "./components/Menu";
import CoverFlow from "./components/coverFlow";
import Music from "./components/music";
import Games from "./components/games";
import Settings from "./components/setting";
import AllSongs from "./components/allsongs";
import Artists from "./components/artist";
import Albums from "./components/albums";


const Layout = (props) => {
  const{ remote,
         menuPage,
         enterButton,
         showTarget, 
         coverFlow,
         menu, 
         music,
         games,
         setting,
         allSongs,
         artists,
         albums} = props
   let component;
   if (menu) {
    component =<Menu 
    showTarget={showTarget}
    />
   }
    else if(coverFlow){
    component= <CoverFlow />
   } 
   else if(music){
    component= <Music 
    showTarget={showTarget}
    />
   }  
   else if(games){
    component= <Games />
   }  
   else if(setting){
    component= <Settings />
   }  
   else if(allSongs){
    component= <AllSongs />
   }
   else if(artists){
    component= <Artists />
   }
   else if(albums){
    component= <Albums />
   }  
    return(
        <div className="layout">
        <div className="screen">
          {component}
      </div>
      <div 
      onMouseEnter={remote} 
      className="controllers">
        <button 
       onClick={menuPage}
        className="top">MENU</button>
        <button className="left">
        <i className="fa-solid fa-backward-fast"></i>
        </button>
        <div
        onClick={enterButton}
        className="enter"></div>
        <button className="right">
        <i className="fa-solid fa-forward-fast"></i>
        </button>
        <button className="bottom">
        <i style={{marginRight:2}} className="fa-solid fa-play"></i>      
        <i className="fa-solid fa-pause"></i>
        </button>
      </div>
        </div>
)
    
}

export default Layout;