import React, { Component } from 'react';

const TextInput = (props) => {
		return(
			<div className="form-group">
    			<label >{ props.label }</label>
    			<input type={ props.type } name={ props.name } className="form-control" id={ props.id } placeholder={ props.placeHolder } onChange={ props.handleTextChange }/>
  			</div>
		);
}
export default TextInput;
