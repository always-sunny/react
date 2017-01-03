import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import data from './testdata';
console.log(data)




ReactDOM.render(
	<App contacts={data.contacts} />,
	document.getElementById('root')
);﻿
