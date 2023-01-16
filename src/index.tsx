import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App  />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);


// const rerenderEntireTree = () => {
// 	ReactDOM.render(
// 		<BrowserRouter>
// 			<Provider store={store}>
// 				<App  />
// 			</Provider>
// 		</BrowserRouter>,
// 		document.getElementById('root')
// 	);
// }
// rerenderEntireTree()
//
// store.subscribe(() => {
//
// 	rerenderEntireTree()
// })


