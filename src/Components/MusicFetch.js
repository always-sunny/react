import React from 'react';


class MusicFetch extends React.Component {
	render() {
		return (

			<div className="MusicFetch">

                <div className="music-description">{this.props.description}</div>
                {/* <div className="home-link link" onClick={this.props.musicListClick}>Return</div> */}

			</div>
		);
	}
}
export default MusicFetch;
