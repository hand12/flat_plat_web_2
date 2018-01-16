import React from 'react';
import styles from './main.scss';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'

import * as PlanActionCreators from '../../actions/actions'

import LeftContainer from './left_container';
import RightContainer from './right_container';

console.log(PlanActionCreators.set_plan)

const Main = (props) => (
  <div className={ styles.main } >
    <div className={ styles.container } >
      <LeftContainer { ...props } />
      <RightContainer { ...props } />
    </div>
  </div>
)

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
  return { actions: bindActionCreators(PlanActionCreators, dispatch) }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main))
