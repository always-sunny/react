import express from 'express';
import data from '../src/testData';

const router = express.Router();


const music = data.music.reduce((obj, music) => {
	obj[music.id] = music;
	return obj;
}, {})


router.get('/music', (req, res) => {
	res.send({
		music: music
	});
});

router.get('/music/:musicId', (req, res) => {
	let muse = music[req.params.musicId];
	muse.description = 'Loreum ojoyello'

	res.send(muse)
});

export default router;