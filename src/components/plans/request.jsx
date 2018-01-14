import React from 'react';
import styles from './request.scss';

import PlanCard from '../common/plan_card/plan_card';

const Request = () => (
	<div className={ styles.modal_panel }>
		<div className={ styles.plan_cards }>
			<PlanCard />
			<PlanCard />
			<div className={ styles.arrow }></div>
		</div>
		<Buttons />
	</div>
)

const Buttons = () => (
	<div className={ styles.buttons }>
		<button className={ styles.modfy_button }>戻る</button>
		<button className={ styles.post_button }>申し込む</button>
	</div>
)

export default Request;