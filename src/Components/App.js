import ReactDOM from 'react-dom';
import React from 'react';
import MusicList from './MusicList';
import axios from 'axios';
import Header from './Header';
import data from '../testData';

class App extends React.Component {
	
	constructor(props) {
    	super(props);
    	this.state = {
    		music: this.props.initialMusic,
    		headerTitle: "THE DAILY VIBE"
    	};
  	}


	componentDidMount(){
    
		axios.get('/api/music')
			.then(resp => {
				this.setState({
          music: resp.data.music
        });
			})
			.catch(console.error)
		//timers,listeners
		// this.setState({
		// 			music: data.music
		// 		});
	}

	componentWillUnmount(){
		//clean timers, listeners 
	}

	render(){
  		return (
   			<div className="App">
   				
   				<div className="Header">
    				<Header headerTitle={this.state.headerTitle}/>
    			</div>	
    			
    			<div className="Main">
					<MusicList music={this.state.music}/>
    			</div>
    			
   				<div className="Footer">
   					...
   				</div>

   			</div>
   		)
 	}
}


export default App;