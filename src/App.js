import React, { Component } from 'react';
import Header from "./components/common/header";
import Main from "./components/common/main";
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={ styles.App } >
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
