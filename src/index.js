import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

let contacts = [{
	id: 1,
	name: 'Ryan',
	phone: '916 206 4207'
},
	{
	id: 2,
	name: 'Dane',
	phone: '916 716 5031'
},
	{
	id: 3,
	name: 'Colin',
	phone: '916 742 0423'
},
	{
	id: 4,
	name: 'Tommy',
	phone: '916 741 9086'
}
];



ReactDOM.render(
	<App contacts={contacts} />,
	document.getElementById('root')
);﻿
