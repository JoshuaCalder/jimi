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
			trackList.push(
					<Track 
						track={this.props.songList[i].track}
						albumCover={ "https://img1-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21976/large_thumb_stage.jpg" }
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
