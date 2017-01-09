import ReactDOM from 'react-dom';
import React from 'react';
import Music from './Music';

class MusicList extends React.Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		search: "",
			
	// 	};
	// }


	// updateSearch(event) {
	// 	this.setState({search: event.target.value.substr(0,33)});
	// }

	// addContact(event) {
	// 	event.preventDefault();
	// 	let name = this.refs.name.value;
	// 	let phone = this.refs.phone.value;
	// 	let id = Math.floor((Math.random() * 100) + 1);
	// 	this.setState({
	// 		contacts: this.state.contacts.concat({id, name, phone})
	// 	})
	// 	this.refs.name.value = '';
	// 	this.refs.phone.value = '';

	// }

	
	render(){
		
		
		// let filteredMusic = this.props.music.filter(
		// 		(music) => {
		// 			return music.song.toLowerCase().indexOf(this.state.props.toLowerCase()) !== -1;
		// 		}
		// 	);
  		return (

  			
	  			// <input type="text" 
	  			// 	placeholder="Search"
	   		// 		value={this.state.search}
	   		// 		onChange={this.updateSearch.bind(this)}	
	   		// 	/>
	   			
	   		// 	<form onSubmit={this.addContact.bind(this)}>
	   		// 		<input type="text" ref="name" />
	   		// 		<input type="text" ref="phone" />
	   		// 		<button type="submit"> Add New Contact </button>
	   		// 	</form>

	   			<div>
	   				{this.props.music.slice(0, this.props.length).map((music) => {
	   					return <Music music={music} key={music.id} />
	   				})
	   				
	   				}
	   			</div>
   			
   		)
 	}
}

export default MusicList;
