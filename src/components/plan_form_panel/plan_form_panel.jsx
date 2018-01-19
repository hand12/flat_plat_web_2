import React from 'react';
import styles from './plan_form_panel.scss';

import CalendarField from '../calendar/calendar';

class PlanFormPanel extends React.Component {
	render() {
		return (
			<div className={ styles.modal_panel }>
				<LocationField { ...this.props }/>
				<CalendarField { ...this.props }/>
				<DescriptionField { ...this.props }/>
				<Buttons { ...this.props }/>
			</div>
		)
	}
}

const LocationField = (props) => (
	<div className={ styles.input_container }>
		<label htmlFor="location">行き先</label>
		<input id="location" placeholder="北海道旭川市" defaultValue={ props.plan.location } />
	</div>
)

const DescriptionField = (props) => (
	<div className={ styles.input_container }>
		<label htmlFor="description">どんな旅にしたいですか？</label>
		<textarea id="description" placeholder="美味しいものをたくさん食べる旅にしたいです！" rows="5"　defaultValue={ props.plan.description }　/>
	</div>
)

class Buttons extends React.Component {
	onSubmit = () => {
		let plan = Object.assign({}, this.props.plan)
		let departure_date = document.getElementById("departure_date").value
		let return_date = document.getElementById("return_date").value

		plan.location = document.getElementById("location").value
		plan.description = document.getElementById("description").value
		plan.departure_date = new Date(departure_date)
		plan.return_date = new Date(return_date)

		this.props.set_plan(plan)
		this.props.history.push("/plan/confirm")
	}

	render () {
		return (
			<div className={ styles.buttons }>
				<button className={ styles.post_button } onClick={ () => (this.onSubmit()) }>投稿する</button>
			</div>
		)
	}
}

export default PlanFormPanel;