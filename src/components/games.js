import React from "react";

const Games = (props) => {

    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            position:'relative',
            width:"100%"
        }}>
           <img style={{marginTop:-40}} width={170} src="https://target.scene7.com/is/image/Target/GUEST_6458d1c6-b538-4bde-ae65-694a01c6515a?fmt=webp&wid=250&hei=250&qlt=80" />
           <h2 style={{position:'absolute', top:150}}>Games</h2>

        </div>
    )
}

export default Games