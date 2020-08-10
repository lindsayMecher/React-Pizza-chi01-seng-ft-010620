import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import pizzaReducer from './reducers/index';

const reduxStore = createStore(
    pizzaReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={reduxStore} >
        <App />
    </Provider>,
    document.getElementById('root')
);
