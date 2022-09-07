import React from "react";
import Menu from "./components/Menu";
import CoverFlow from "./components/coverFlow";
import Music from "./components/music";
import Games from "./components/games";
import Settings from "./components/setting";
import AllSongs from "./components/allsongs";



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
    return(
        <div className="layout">
        <div className="screen">
          {component}
        {/* <div className="left-Screen">
        <div className="innerText">
        <h3>iPod.js</h3>
      
      </div>

        </div>
        <div className="right-screen"></div> */}
      </div>
      <div 
      onMouseEnter={remote} 
      className="controllers">
        <button 
       onClick={menuPage}
        className="top">MENU</button>
        <button className="left">
        <i class="fa-solid fa-backward-fast"></i>
        </button>
        <div
        onClick={enterButton}
        className="enter"></div>
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
)
    
}

export default Layout;