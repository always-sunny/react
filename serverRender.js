//fetch data from API
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/Components/App';

import config from './config';
import axios from 'axios';


const serverRender = () =>
	axios.get(`${config.serverUrl}/api/music`)
		.then(resp => {
			// console.log(resp);
			return { 
				initialMarkup: ReactDOMServer.renderToString(
				<App initialMusic={resp.data.music} />
				),
				initialData: resp.data
			};
		});

export default serverRender;