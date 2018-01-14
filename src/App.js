import React, { Component } from 'react';
import { Provider } from 'react-redux'

import configureStore from './configureStore'

import Header from "./components/common/header";
import Main from "./components/main/main";
import styles from './App.scss';

const store = configureStore()

class App extends Component {
  render() {
    return (
			<Provider store={ store }>
				<div className={ styles.App } >
					<Header />
					<Main />
				</div>
			</Provider>
    );
  }
}

export default App;
