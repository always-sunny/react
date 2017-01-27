//fetch data from API
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/Components/App';

import config from './config';
import axios from 'axios';


const getApiUrl = (musicId) => {
	if (musicId) {
		console.log(`${config.serverUrl}/api/music/${musicId}`);
		return `${config.serverUrl}/api/music/${musicId}`;
	}
	console.log(`${config.serverUrl}/api/music`);
	return `${config.serverUrl}/api/music`;
};


const getInitialData = (musicId, apiData) => {
	if (musicId){

		return {
			currentMusicId: apiData.id,
			music: {
				[apiData.id]: apiData
			}

		};
	}
	return {
		music: apiData.music
	}
};

const serverRender = (musicId) =>
	axios.get(getApiUrl(musicId))
		.then(resp => {
			const initialData = getInitialData(musicId, resp.data);
			return {
				initialMarkup: ReactDOMServer.renderToString(
				<App initialData={initialData} />
				),
				initialData
			};
		});

export default serverRender;
