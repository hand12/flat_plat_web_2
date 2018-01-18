import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'



import configureStore from './configureStore'

const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <Router>
      <App />
    </Router>
  </Provider>, document.getElementById('root')
);
registerServiceWorker();
