import React from 'react';

import Plan from './plan';

const Plans = (props) => (
	<div>
		<Plan { ...props } />
		<Plan { ...props } />
		<Plan { ...props } />
		<Plan { ...props } />
	</div>
)

export default Plans;