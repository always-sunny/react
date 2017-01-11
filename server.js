import config from './config';
import apiRouter from './api/index';
import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';


const server = express();

server.use(sassMiddleware({ //sassMiddleware is a function
	src: path.join(__dirname, 'sass'), //where to pull the sass files - src directory
	dest: path.join(__dirname, 'public') //where to put the sass - direct to write css
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
	serverRender()
		.then(({initialMarkup, initialData}) => {
			res.render('index', {
		initialMarkup, 
		initialData
		});
	})
		.catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
	console.info('Express listening on port', config.port);
});