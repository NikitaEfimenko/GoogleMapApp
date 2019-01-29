import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './containers/App';

import { rootReducer } from './reducers'
import { createStore } from 'redux'
import { Provider } from 'react-redux'


const store = createStore(rootReducer)
/*
simple logger
store.subscribe(() => console.log(store.getState()))
*/

render(
<Provider store={store}>
	<App />
</Provider>, 
document.getElementById('root'));
