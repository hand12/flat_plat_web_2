import React from 'react';
import styles from './post_form_panel.scss';

import CalendarField from '../calendar/calendar';

const PlanFormPanel = () => (
	<div className={ styles.modal_panel }>
		<LocationField />
		<CalendarField />
		<DescriptionField />
		<Buttons />
	</div>
)

const LocationField = () => (
	<div className={ styles.input_container }>
		<label htmlFor="location">行き先</label>
		<input id="location" placeholder="北海道旭川市"/>
	</div>
)

const DescriptionField = () => (
	<div className={ styles.input_container }>
		<label htmlFor="description">どんな旅にしたいですか？</label>
		<textarea id="description" placeholder="美味しいものをたくさん食べる旅にしたいです！" rows="5"/>
	</div>
)

const Buttons = () => (
	<div className={ styles.buttons }>
		<button className={ styles.post_button }>投稿する</button>
	</div>
)

export default PlanFormPanel;