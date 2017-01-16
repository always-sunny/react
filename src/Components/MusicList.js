import ReactDOM from 'react-dom';
import React from 'react';
import Music from './Music';

class MusicList extends React.Component {
	
	render(){

  		return (

	   			<div>
	   				{this.props.music.slice(0, this.props.length).map((music) => {
	   					return <Music 
	   						music={music} 
	   						key={music.id} 
	   						onClick={this.props.onMusicClick}
	   						/>
	   				})
	   				
	   				}
	   			</div>
   			
   		);
 	}
}


export default MusicList;
