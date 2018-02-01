import React, { Component } from 'react';

import * as ActionCreators from './actions/actions'
import * as FetchPlanActionCreators from './actions/fetch/plan'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import Header from "./components/common/header";
import Main from "./components/main/main";
import styles from './App.scss';


class App extends Component {
  render() {
    return (
			<div className={ styles.App }>
				<Header />
				<Main { ...this.props } />
			</div>
    );
  }
}

const mapStateToProps = (state) => {
	return {
		fetch: state.fetch,
		plans: state.plans.plans,
		form: state.form
	}
}

const mapDispatchToProps = (dispatch) => {
	// return bindActionCreators(ActionCreators, dispatch)
	return bindActionCreators(Object.assign({}, ActionCreators, FetchPlanActionCreators), dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
