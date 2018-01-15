import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from './configureStore'

import Header from "./components/common/header";
import Main from "./components/main/main";
import styles from './App.scss';

const store = configureStore()

class App extends Component {
  render() {
    return (
			<Provider store={ store }>
				<Router>
					<div className={ styles.App }>
						<Header />
						<Main />
					</div>
				</Router>
			</Provider>
    );
  }
}

export default App;
