import React, { Component } from 'react';
import './track_page.css'
class CurrentTrack extends Component{
	constructor(props){
			super(props);
			this.state = {
					title: props.title,
					artist: props.artist,
					album: props.album,
					albumCover: props.albumCover,
		};
	}

	render(){
		return(
			<React.Fragment>
				<div className='container'>
					<img className='album-img' alt='null' src={ this.props.albumCover } />
						<div className='center-track'>
							<h5>{ this.props.title }</h5>
							<h6> { this.props.artist }</h6>
							<h6>{ this.props.album }</h6>
						</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CurrentTrack;
