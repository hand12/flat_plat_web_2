import React from 'react';
import styles from './post_form_panel.scss';

import CalendarField from '../calendar/calendar';

class PlanFormPanel extends React.Component {
	render() {
		return (
			<div className={ styles.modal_panel }>
				{ console.log(this.props) }
				<LocationField { ...this.props }/>
				<CalendarField { ...this.props }/>
				<DescriptionField { ...this.props }/>
				<Buttons { ...this.props }/>
			</div>
		)
	}
}

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

const Buttons = (props) => (
	<div className={ styles.buttons }>
		<button className={ styles.post_button } onClick={ () => (props.history.push('/plan/confirm')) }>投稿する</button>
	</div>
)

export default PlanFormPanel;