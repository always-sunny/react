//fetch data from API
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/Components/App';

import config from './config';
import axios from 'axios';


const serverRender = () =>
	axios.get('http://localhost:8888/api/music')
		.then(resp => {
			return { 
				initialMarkup: ReactDOMServer.renderToString(
				<App initialMusic={resp.data.music} />
				),
				initialData: resp.data
			};
		});

export default serverRender;