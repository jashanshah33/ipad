import React from "react";

const Menu = (props) => {

    const{cover, music, games, setting} = props.menu

    return(
        <div className="menu-list">
            <p>{cover}</p>
            <p>{music}</p>
            <p>{games}</p>
            <p>{setting}</p>

        </div>
    )
} 

export default Menu