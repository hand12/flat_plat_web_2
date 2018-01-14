import React from 'react';
import styles from './main.scss';

import LeftContainer from './left_container';
import PlanFormPanel from '../post_form_panel/post_form_panel';
import ConfirmPanel from '../confirm_panel/confirm_panel';

const Main = () => (
  <div className={ styles.main } >
    <div className={ styles.container } >
			<LeftContainer />
			<RightContainer />
    </div>
  </div>
)

const RightContainer = () => (
	<div className={ styles.right_container} >
		<h1>プランの作成</h1>
		<PlanFormPanel />
		<ConfirmPanel />
	</div>
)

export default Main;
