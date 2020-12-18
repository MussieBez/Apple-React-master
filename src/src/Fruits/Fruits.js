import React from 'react';
import './Fruits.css';


function Fruits() {
	return (
		<div className="fruits-wrapper">
			<h1>React Practice</h1>
			<h2> Healthy fruits </h2>
			<div className="fruits-menu">Fruits menu</div>
			<ul id="listOfFruits">
				<li id="one" className="red"> Apple </li>
				<li className="yellow"> Mango </li>
				<li className="red"> Peach </li>
				<li id="four" className="green"> Kiwi </li>
				<li id="five" className="orange"> <p>Papaya</p> </li>
				<li id="six" className="green"> Avocado </li>
				<li id="seven" className="yellow"> Lemon </li>
				<li id="eight" className="red"></li>
			</ul>
		</div>		
	);
}

export default Fruits;