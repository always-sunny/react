import axios from 'axios';


export const fetchMusic = musicId => {
	return axios.get(`/api/music/${musicId}`)
		.then(resp => resp.data);
}

export const fetchMusicList = () => {
	return axios.get('api/music')
		.then(resp => resp.data.music);
}
