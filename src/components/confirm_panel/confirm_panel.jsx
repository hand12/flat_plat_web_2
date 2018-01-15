import React from 'react';
import styles from './confirm_panel.scss';

import PlanCard from '../common/plan_card/plan_card';

const ConfirmPanel = (props) => (
	<div className={ styles.modal_panel }>
		<PlanCard { ...props }/>
		<Buttons { ...props }/>
	</div>
)

const Buttons = (props) => (
	<div className={ styles.buttons }>
		<button className={ styles.modfy_button } onClick={ () => (props.history.push('/plan/new')) }>修正する</button>
		<button className={ styles.post_button }>投稿する</button>
	</div>
)

export default ConfirmPanel;