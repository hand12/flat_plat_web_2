import React from 'react';
import styles from './complete.scss';

import PlanCard from '../common/plan_card/plan_card';

const Complete = (props) => (
	<div className={ styles.modal_panel }>
		<h1>投稿が完了しました</h1>
		<p>リクエストが来るのを待ちましょう</p>
	</div>
)

export default Complete;