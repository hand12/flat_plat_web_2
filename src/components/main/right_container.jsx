import React from 'react';
import styles from './right_container.scss';

import { Route, Switch } from 'react-router-dom'

import PlanFormPanel from '../plan_form_panel/plan_form_panel';
import ConfirmPanel from '../confirm_panel/confirm_panel';
import Complete from '../complete/complete';
import Plans from '../plans/plans';
import Request from '../plans/request';

const RightContainer = (props) => (
	<div className={ styles.right_container} >
		<Switch>
			<Route path="/plan/new" component={ () => <PlanFormPanel { ...props }/> } />
			<Route path="/plan/confirm" component={ () => <ConfirmPanel { ...props }/> } />
			<Route path="/plan/complete" component={ () => <Complete { ...props }/> } />
			<Route path="/plan/:id/request" component={ () => <Request { ...props } /> } />
			<Route path="/plans" component={ () => <Plans { ...props }/> } />
		</Switch>
	</div>
)

export default RightContainer;