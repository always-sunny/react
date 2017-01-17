import React from 'react';


class MusicFetch extends React.Component {
	render() {
		return (
			<div className="MusicFetch">
				{this.props.description}
			</div>
		);
	}
}
export default MusicFetch;