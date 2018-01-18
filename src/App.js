import React, { Component } from 'react';

import * as PlanActionCreators from './actions/actions'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from "./components/common/header";
import Main from "./components/main/main";
import styles from './App.scss';


class App extends Component {
  render() {
    return (
			<div className={ styles.App }>
				<Header />
				<Main />
			</div>
    );
  }
}

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(PlanActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
