import React, { Component } from 'react';
import CurrentTrack from './current_track';
import TrackList from './track_list';
import { response } from './response';

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
		return(
			<div className="track-page">
				<div> 
					<header> Currently Playing </header>
				</div>
				<CurrentTrack 
					title={ "Heart Dont Stand a Chance" }
					album={ "Malibu" }
					artist={ "Anderson Paak." }
					albumCover={ "https://cdn.shopify.com/s/files/1/0809/6147/products/AP_Malibu_Cover_Flat_APPROVED_Web_28NOV15.jpg?v=1450905558" }
					/>
				<hr/>
				<TrackList 
					songList={ response.items }
					/>
			</div>
		);
	}
}

export default TrackPage;
