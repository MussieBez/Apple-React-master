import React from 'react';
import ReactDOM from 'react-dom';
import Hikima from './App.js';
import Hello from './Hello/Hello.js';

import './index.css';
import * as serviceWorker from './serviceWorker';

import Fruits from './Fruits/Fruits.js';

import logo from './logo.svg';
import './App.css'; 


ReactDOM.render( <Fruits />
	, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
