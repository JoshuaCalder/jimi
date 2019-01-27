import React, { Component } from 'react';
import CurrentTrack from './current_track';
import TrackList from './track_list';
import { response } from './response2';

class TrackPage extends Component{
	constructor(props){
			super(props);
			this.state = {
					userName: null,
					userId: null,
					partyId: null,
		};
	}

	render(){
	
		//let currentTrack = this.props.trackList[0];
		if( this.props.songList  === undefined )
				this.props.getTracks(this.props.partyCode);

		return(
			<div className="track-page">
				<div className="top-info">
					<p className="first">You are in:</p>
					<p className="second">{ this.props.partyName }</p>
					<p className="third">#{ this.props.partyCode }</p>
				</div>
				<div>
					<header className="currently-playing"> Currently Playing </header>
				</div>
				<CurrentTrack
					title={ "Heart Don't Stand a Chance" }
					album={ "Malibu" }
					artist={ "Anderson .Paak" }
					albumCover={ "https://cdn.shopify.com/s/files/1/0809/6147/products/AP_Malibu_Cover_Flat_APPROVED_Web_28NOV15.jpg?v=1450905558" }
					/>
				<hr/>
				<TrackList
					songList={ this.props.trackList }
					/>
			</div>
		);
	}
}

export default TrackPage;
