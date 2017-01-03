import ReactDOM from 'react-dom';
import React from 'react';
import ContactsList from './ContactsList';
import data from '../testData';


class App extends React.Component {
	
	constructor(props) {
    	super(props);
    	this.state = {contacts: []};
  	}


	componentDidMount(){
		//timers,listeners
		this.setState({
			contacts: data.contacts
		});
	}

	componentWillUnmount(){
		//clean timers, listeners 
	}

	render(){
  		return (
   			<div>
    			<h1>Contacts List</h1>
    			<ContactsList contacts={this.state.contacts}/>
    			
   			</div>
   		)
 	}
}


export default App;