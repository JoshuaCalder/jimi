import React, { Component } from 'react';
import Track from './track';
import './track_page.css'

class TrackList extends Component{
	constructor(props){
			super(props);
			this.state = {
					title: props.title,
			};
	}
	
	renderTrackList = () =>{
		let trackList = [];
		console.log(this.props.songList);
		for( let i in this.props.songList){
			let song = this.props.songList[i];
			console.log(song);
			trackList.push(
					<Track 
						track={this.props.songList[i].track}
						imgUrl={ song.track.album.images[0].url }
						key={i}
					/>
				);
			}
		return ( trackList );
	}

	render(){
		return(
			<React.Fragment>
				{this.renderTrackList()}
			</React.Fragment>
		);
	}
}

export default TrackList;
