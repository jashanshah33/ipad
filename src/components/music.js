import React from "react";

const Music = (props) => {
    const{showTarget} = props

    return(
        <div className="text">
        <div  className="left-Screen">
        <h2>Music</h2>
        {showTarget===1 || showTarget===4?
        <div className="MenuTargets">
         All Songs
         <i style={{ marginLeft:35}} class="fa-solid fa-angle-right"></i>             </div>
         :
         <div className="unTarget">All Songs</div>
         }

        {showTarget===2?
        <div className="MenuTargets">
         Artists
         <i style={{ marginLeft:58}} class="fa-solid fa-angle-right"></i>             </div>
         :
         <div className="unTarget" >Artists</div>
         } {showTarget===3?
            <div className="MenuTargets">
            Albums
             <i style={{ marginLeft:50}} class="fa-solid fa-angle-right"></i>             </div>
             :
             <div className="unTarget" >Albums</div>
             } 
               </div>
               
               <div className="right-screen">
                
                </div >  

    </div>
    )
}

export default Music