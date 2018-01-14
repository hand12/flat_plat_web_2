import React from 'react';
import styles from './right_container.scss';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import PlanFormPanel from '../post_form_panel/post_form_panel';
import ConfirmPanel from '../confirm_panel/confirm_panel';
import Plans from '../plans/plans';
import Request from '../plans/request';

const RightContainer = () => (
		<div className={ styles.right_container} >
			<h1>プランの作成</h1>
			<Router>
				<Switch>
					<Route path="/plan/new" component={ PlanFormPanel } />
					<Route path="/plan/confirm" component={ ConfirmPanel } />
					<Route path="/plan/:id/request" component={ Request } />
					<Route path="/plans" component={ Plans } />
				</Switch>
			</Router>
		</div>
)

export default RightContainer;