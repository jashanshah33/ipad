import React from "react";

const Settings = () => {

    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            flexDirection:"column",
            position:'relative',
            width:"100%"
        }}>
           <img style={{marginTop:-40}} width={100} alt='Setting' src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Settings_app_icon.png/640px-Windows_Settings_app_icon.png" />
           <h2 style={{position:'absolute', top:150}}>Settings</h2>

        </div>
    )
}

export default Settings

