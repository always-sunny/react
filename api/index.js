import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/music', (req, res) => {
	res.send({music: data.music});
});

export default router;