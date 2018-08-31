import React from "react";
import ReactDOM from "react-dom";
import App from './Components/App';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './reducers/rootReducer';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../node_modules/bootstrap/dist/js/bootstrap.min.js';

const store = createStore(
	rootReducer,
  {}, 
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

ReactDOM.render(
	<Provider store = {store}>
		<App />
	</Provider>
	
	, document.getElementById("app")
);