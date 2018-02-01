import React from 'react';
import styles from './plans.scss';

import Plan from './plan';

const Plans = (props) => (
	<div className={ styles.plans }>
		{ props.plans.map((plan) => {
			return <Plan { ...props } plan={ plan } key={ plan.id } link={ `/users/1/plans/${plan.id}/matches` } />
		})}
	</div>
)

export default Plans;