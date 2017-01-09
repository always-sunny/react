import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


ReactDOM.render(
	<App initialMusic={window.initialData.music}/>,
	document.getElementById('root')
);﻿
