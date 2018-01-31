import React from 'react';
import styles from './plans.scss';

import Plan from './plan';

const Plans = (props) => (
	<div className={ styles.plans }>
		{ props.plans.map((plan) => {
			return <Plan { ...props } plan={ plan } key={ plan.id } isCurrentUser={ true } />
		})}
	</div>
)

export default Plans;