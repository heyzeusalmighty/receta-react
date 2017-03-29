// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import './index.css';
//
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import router from './router';
import Bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <Provider store={store}>{router}</Provider>,
    document.getElementById('root')
);
