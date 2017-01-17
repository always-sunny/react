import ReactDOM from 'react-dom';
import React from 'react';
import Music from './Music';

class MusicList extends React.Component {
	
	render(){

  		return (

	   			<div>
	   				{Object.keys(this.props.music).map((musicId) => {
	   					// console.log(musicId, this.props.music[musicId]);
	   					return <Music 
	   						music={this.props.music[musicId]} 
	   						key={musicId} 
	   						onClick={this.props.onMusicClick}
	   						/>
	   				}
	   				)
	   				
	   				}
	   			</div>
   			
   		);
 	}
}


export default MusicList;
