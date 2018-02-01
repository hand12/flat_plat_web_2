import React from 'react';
import styles from './right_container.scss';

import { Route, Switch } from 'react-router-dom'

import PlanFormPanel from '../plan_form_panel/plan_form_panel';
import ConfirmPanel from '../confirm_panel/confirm_panel';
import Complete from '../complete/complete';
import Plans from '../plans/plans';
import Request from '../plans/request';
import Matches from '../plans/matches'

const RightContainer = (props) => (
	<div className={ styles.right_container} >
		<Switch>
			<Route exact path="/plan/new" component={ () => <PlanFormPanel { ...props }/> } />
			<Route exact path="/plan/confirm" component={ () => <ConfirmPanel { ...props }/> } />
			<Route exact path="/plan/complete" component={ () => <Complete { ...props }/> } />
			<Route exact path="/users/:user_id/plans/:plan_id/requests/:id" component={ () => <Request { ...props } /> } />
			<Route exact path="/users/:user_id/plans/:id/matches" component={ ({ match }) => <Matches { ...props } match={ match } /> } />
			<Route exact path="/users/:user_id/plans" component={ () => <Plans { ...props }/> } />
		</Switch>
	</div>
)

export default RightContainer;