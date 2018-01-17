import React from 'react';
import styles from './right_container.scss';

import { Route, Switch } from 'react-router-dom'

import PlanFormPanel from '../plan_form_panel/plan_form_panel';
import ConfirmPanel from '../confirm_panel/confirm_panel';
import Plans from '../plans/plans';
import Request from '../plans/request';

const RightContainer = (props) => (
	<div className={ styles.right_container} >
		<h1>プランの作成</h1>
		<Switch>
			<Route path="/plan/new" component={ (props) => <PlanFormPanel { ...props }/> } />
			<Route path="/plan/confirm" component={ ConfirmPanel } />
			<Route path="/plan/:id/request" component={ Request } />
			<Route path="/plans" component={ (props) => <Plans { ...props }/> } />
			<Route path="/" component={ Plans } />
		</Switch>
	</div>
)

export default RightContainer;