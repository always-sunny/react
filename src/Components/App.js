import ReactDOM from 'react-dom';
import React from 'react';
import ContactsList from './ContactsList';


class App extends React.Component {

	render(){
  		return (
   			<div>
    			<h1>Contacts List</h1>
    			<ContactsList contacts={this.props.contacts}/>
   			</div>
   		)
 	}
}


export default App;