import React, { Component } from 'react';
import './Pokecard.css';

const ImgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`;

class Pokecard extends Component {
	render() {
		let imgSrc = `${ImgURL}${this.props.id}.png`;
		let props = this.props;
		return (
			<div className="Pokecard">
				<h1 className="Pokecard-title">{props.name}</h1>
				<img src={imgSrc} alt={props.name} />
				<div className="Pokecard-content">Type: {props.type}</div>
				<div className="Pokecard-content">EXP: {props.exp}</div>
			</div>
		);
	}
}

export default Pokecard;
