import React from 'react';
import styles from './right_container.scss';

import PlanFormPanel from '../post_form_panel/post_form_panel';
import ConfirmPanel from '../confirm_panel/confirm_panel';
import Plans from '../plans/plans';
import Request from '../plans/request';

const RightContainer = () => (
	<div className={ styles.right_container} >
		<h1>プランの作成</h1>
		<PlanFormPanel />
		<ConfirmPanel />
		<Plans />
		<Request />
	</div>
)

export default RightContainer;