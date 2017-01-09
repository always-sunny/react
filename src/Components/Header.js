import ReactDOM from 'react-dom';
import React from 'react';

class Header extends React.Component{
	render() {
		return (
				<h2 className="headerTitle">{this.props.headerTitle}</h2>

		);
	};
};

export default Header;