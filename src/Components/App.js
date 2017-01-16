import ReactDOM from 'react-dom';
import React from 'react';
import MusicList from './MusicList';
import Header from './Header';



const pushState = (obj, url) => 
  window.history.pushState(obj, '', url);


class App extends React.Component {
	
	constructor(props) {
    	super(props);
    	this.state = {
    		music: this.props.initialMusic,
    		headerTitle: "THE DAILY VIBE"
    	};
  	}

    componentDidMount() {

    }

    componentWillUnmount(){

    }

  fetchMusic(musicId) {
    pushState(
      {currentMusicId: musicId},
      `/music/${musicId}`
      );
  };


	render(){
  		return (
   			<div className="App">
   				
   				<div className="Header">
    				<Header headerTitle={this.state.headerTitle}/>
    			</div>	
    			
    			<div className="Main">
					 <MusicList 
            onMusicClick={this.fetchMusic}
            music={this.state.music}/>
    			</div>
    			
   				<div className="Footer">
   					...
   				</div>

   			</div>
   		)
 	}
}


export default App;