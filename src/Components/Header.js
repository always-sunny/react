import ReactDOM from 'react-dom';
import React from 'react';

class Header extends React.Component{
	render() {
		return (
			<div>
				<h2 className="headerTitle">{this.props.headerTitle}</h2>
				<h2 className="currentSelection">{this.props.currentSelection}</h2>
			</div>
		);
	};
};

export default Header;