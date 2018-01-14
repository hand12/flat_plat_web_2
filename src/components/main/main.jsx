import React from 'react';
import styles from './main.scss';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PlanActionCreators from '../../actions/actions'

import LeftContainer from './left_container';
import RightContainer from './right_container';

const Main = () => (
  <div className={ styles.main } >
    <div className={ styles.container } >
			<LeftContainer />
			<RightContainer />
    </div>
  </div>
)

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(PlanActionCreators, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
