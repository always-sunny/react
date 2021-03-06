import ReactDOM from 'react-dom';
import React from 'react';

class Header extends React.Component{
	render() {
		return (

<nav className="navbar navbar-default navbar-fixed-top">
  <div className="container">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
      <a className="navbar-brand" href="/">Project name</a>
    </div>
    <div id="navbar" className="navbar-collapse collapse">
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#">Login</a></li>
        <li><a href="#"><span className="signUp">Sign Up</span></a></li>
      </ul>
    </div>
  </div>
</nav>
		);
	};
};

export default Header;
