import React from 'react';

const Track = (props) => {
	return(
		<div className="container">
			<hr />
			<div className="row track">
				<div className="col">
					<img className="img-cirlce" alt="null" src={ props.albumCover } />
				</div>
				<div className="col-6">
					<h5>{ props.track.name }</h5>
					<h6 className="album-spacing">{ props.track.album.name }</h6>
					<h6 className="artist-spacing">{ props.track.album.artists[0].name}</h6>
				</div>
				<div className="col">
					...
				</div>
			</div>
		</div>
	);
}

export default Track;
