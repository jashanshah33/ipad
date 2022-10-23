import React from "react";

const AllSongs = () => {

    return(
        <div
        style=
        {{
            display:"flex",
            flexDirection:'column',
            justifyContent:"space-around",
            alignItems:'center',
            width:"100%"
        }}
        >
        <div
           style=
        {{
            display:"flex",
            justifyContent:"space-around",
            width:"100%"
        }}
        >
          <div>
            <img width={140} alt='song poster' src="https://logicalfact.in/wp-content/uploads/2020/12/Sidhu-Moose-wala-Photos-20204-min.jpg" />
            </div> 
           <div>
            <h3 style={{
                textAlign:'center'
            }}>So High</h3>
            <p>sidhu moose wala</p>
           </div>
          
           </div>
           <div
           style={{
            border:"4px solid lightgrey",
            width:'250px',
            position:'relative',
            fontSize:13,
            marginTop:-30
           }}
           >
              <p style={{
            position:'absolute',
            top:-10,
            left:-5,
            
           }}>00:00</p>
           <p style={{
            position:'absolute',
            top:-10,
            right:-6
           }}>03:42</p>
           </div>
         
        </div>
    )
}

export default AllSongs

