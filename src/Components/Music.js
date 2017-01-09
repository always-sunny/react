import ReactDOM from 'react-dom';
import React from 'react';


const Music = ({music}) => 	

	 <div className="Music">
		<div className="songName">
			{music.id} - {music.song}
		</div>

		<div className="artistName">
			{music.artist}
		</div>

		<div className="albumName">
			{music.album}
		</div>

	</div>


export default Music;
