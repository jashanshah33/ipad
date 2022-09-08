import React from "react";
import Layout from "./layout";
import ZingTouch from "zingtouch"

class App extends React.Component {

    constructor(){
      super()
      this.state={
        showTarget: -1,
        menu: true,
        coverFlow:false,
        music:false,
        games:false,
        setting:false,
        allSongs:false,
        artists:false,
        albums:false
        
      }
    }

    remote = (e) =>{
      const context=this;
        var distance=0;

        var region=new ZingTouch.Region(e.target)
        region.bind(e.target,'rotate',function(e){
            distance=e.detail.distanceFromOrigin;

            if(distance>0 && distance<=45){
                context.setState({
                  showTarget:1
                 })
              }
            else if(distance>45 && distance<=90){
              context.setState({
                showTarget:2
               })
            }
            else if(distance>90 && distance<=135){
              context.setState({
                showTarget:3
               })
            }  
            else if(distance>135 && distance<=180){
              context.setState({
                showTarget:4
               })
            }
           else if(distance>180 && distance<=225){
              context.setState({
                showTarget:1
               })
            }
          else if(distance>225 && distance<=270){
            context.setState({
              showTarget:2
             })
          }
          else if(distance>270 && distance<=315){
            context.setState({
              showTarget:3
             })
          }  
          else if(distance>315 && distance<=360){
            context.setState({
              showTarget:4
             })
          }     
        })
    }

    menuPage = () => {
      if (this.state.allSongs || this.state.artists || this.state.albums) {
        this.setState({
          menu:false,
          coverFlow:false,
          music:true,
          games:false,
          setting:false,
          allSongs:false,
          artists:false,
          albums:false
         })
      } else{
        this.setState({
          menu:true,
          coverFlow:false,
          music:false,
          games:false,
          setting:false,
          allSongs:false,
          artists:false,
          albums:false
         })
      }
     
    }    

    enterButton = () => {
      const{showTarget} = this.state

      if (this.state.menu) {

        if (showTarget === 1) {
          this.setState({
            menu:false,
            coverFlow:true,
          })
        } else if(showTarget === 2){
          this.setState({
            menu:false,
            music:true
          })
        }
        else if(showTarget === 3){
          this.setState({
            menu:false,
            games:true
          })
        }
        else if(showTarget === 4){
          this.setState({
            menu:false,
            setting:true
          })
      }
    }
     else if(this.state.music){
      if (showTarget === 1) {
        this.setState({
          menu:false,
          coverFlow:false,
          music:false,
          games:false,
          setting:false,
          allSongs:true,
          artists:false,
          albums:false
        })
      }
     else if (showTarget === 2) {
        this.setState({
          menu:false,
          coverFlow:false,
          music:false,
          games:false,
          setting:false,
          allSongs:false,
          artists:true,
          albums:false
        })
      }
     else if (showTarget === 3) {
        this.setState({
          menu:false,
          coverFlow:false,
          music:false,
          games:false,
          setting:false,
          allSongs:false,
          artists:false,
          albums:true
        })
      }
       
      }
   
    
    }

  render(){

  return (
    <div className="App">
      <Layout 
      showTarget={this.state.showTarget}
      menu={this.state.menu}
      coverFlow={this.state.coverFlow}
      music={this.state.music}
      games={this.state.games}
      setting={this.state.setting}
      allSongs={this.state.allSongs}
      artists={this.state.artists}
      albums={this.state.albums}
      remote={this.remote}
      menuPage={this.menuPage}
      enterButton={this.enterButton}

      
      />
    </div>
  );
  }
}

export default App;
