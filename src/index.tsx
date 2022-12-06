import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {RootStateType, state, subscribe} from "./redux/state";


const rerenderEntireTree = (state: RootStateType) => {
	ReactDOM.render(<App {...state} />,
		document.getElementById('root')
	);
}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)