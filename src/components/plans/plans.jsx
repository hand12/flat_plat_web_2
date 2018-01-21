import React from 'react';
import styles from './plans.scss';

import Plan from './plan';

const Plans = (props) => (
	<div className={ styles.plans }>
		<Plan { ...props } />
		<Plan { ...props } />
		<Plan { ...props } />
		<Plan { ...props } />
	</div>
)

export default Plans;