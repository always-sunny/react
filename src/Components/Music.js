import ReactDOM from 'react-dom';
import React from 'react';

class Music extends React.Component {

	render() {
		return(

			<div className="Music">
				<div className="songName">
					{this.props.music.id} - {this.props.music.song}
				</div>

				<div className="artistName">
					{this.props.music.artist}
				</div>

				<div className="albumName">
					{this.props.music.album}
				</div>

		</div>
		)
	}
}
	

export default Music;
