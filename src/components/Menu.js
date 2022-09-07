import React from "react";

const Menu = (props) => {

const {showTarget} =props;
    return(
        <div className="text">
            <div  className="left-Screen">
            <h2>iPod.js</h2>
            {showTarget==1?
            <div className="MenuTargets">
             Cover Flow
             <i style={{ marginLeft:30}} class="fa-solid fa-angle-right"></i>             </div>
             :
             <div className="unTarget">Cover Flow</div>
             }

            {showTarget==2?
            <div className="MenuTargets">
             Music
             <i style={{ marginLeft:75}} class="fa-solid fa-angle-right"></i>             </div>
             :
             <div className="unTarget" >Music</div>
             } {showTarget==3?
                <div className="MenuTargets">
                Games
                 <i style={{ marginLeft:69}} class="fa-solid fa-angle-right"></i>             </div>
                 :
                 <div className="unTarget" >Games</div>
                 } {showTarget==4?
                    <div className="MenuTargets">
                     Settings
                     <i style={{ marginLeft:57}} class="fa-solid fa-angle-right"></i>             </div>
                     :
                     <div className="unTarget" >Settings</div>
                     }   
                   </div>
                   
                   <div className="right-screen">
                    
                    </div >  

        </div>
    )
}

export default Menu