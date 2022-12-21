import React from 'react';
import ReactDOM from 'react-dom';
import App, {RootStateType} from './App';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

const rerenderEntireTree = () => {
	ReactDOM.render(
		<BrowserRouter>
			<Provider store={store}>
				<App  />
			</Provider>
		</BrowserRouter>,
		document.getElementById('root')
	);
}
rerenderEntireTree()

store.subscribe(() => {
	let state = store.getState()
	rerenderEntireTree()
})


