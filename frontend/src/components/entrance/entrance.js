import React, { Component } from 'react';
import './entrance.css';

class Entrance extends Component{
	constructor(props){
		super(props);
	}

	render(){
		return(
			<div className="entrance-body">
				<h2>Welcome to Jimi! To get started sign into your spotify account</h2>
				<div className="fluid">
					<a href="http://localhost:8000/login"><button type="button" className="btn btn-success">Enter</button></a>
				</div>
			</div>
		);
	}
}

export default Entrance;
