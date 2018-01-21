import React from 'react';
import styles from './plan_form_panel.scss';

import Map from './map.jsx';
import CalendarField from '../calendar/calendar';
import { MY_API_KEY } from '../../.my_api_key';

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

class LocationField extends React.Component {
	constructor(props) {
		super(props)
		this.HOST = "https://maps.googleapis.com/maps/api/geocode/json"
		this.state = {
			location: {
				lat: 35.9514,
				lng: 139.975
			},
			defaultCenter: {
				lat: 35.9514,
				lng: 139.975
			}
		}
	}

	set_pin = (e) => {
		if(e.target.value.length == 0) {
			return 
		}
		const params = new URLSearchParams()
		const address = e.target.value.toString()
		params.set('address', address)
		params.append('key', MY_API_KEY)

		if(address == '') {
			return
		}

		fetch(this.HOST + `?${ params.toString() }`)
		.then((response) => {
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.then((response) => response.json())
		.then((responseData) => {
			if((responseData.status == "ZERO_RESULTS")) {
				console.log(responseData)
				console.log("一件もなかった")
				return
			}
			const location = responseData.results[0].geometry.location
			this.setState({
				location: {
					lat: parseFloat(location.lat),
					lng: parseFloat(location.lng),
				}
			})
		})
	}

	render() {
		return (
			<div className={ styles.input_container }>
				<label htmlFor="location">行き先</label>
				<input id="location" placeholder="北海道旭川市" defaultValue={ this.props.plan.location.name } onChange={ (e) => { this.set_pin(e) } }/>
				<input id="lat" type="hidden" defaultValue={ this.state.location.lat } />
				<input id="lng" type="hidden" defaultValue={ this.state.location.lng } />
				<Map isMarkerShown pin_location = { this.state.location } default_center={ this.state.defaultCenter } />
			</div>
		)
	}
}

const DescriptionField = (props) => (
	<div className={ styles.input_container }>
		<label htmlFor="description">どんな旅にしたいですか？</label>
		<textarea id="description" placeholder="美味しいものをたくさん食べる旅にしたいです！" rows="2"　defaultValue={ props.plan.description }　/>
	</div>
)

class Buttons extends React.Component {
	onSubmit = () => {
		let plan = Object.assign({}, this.props.plan)
		let departure_date = document.getElementById("departure_date").value
		let return_date = document.getElementById("return_date").value

		plan.location.name = document.getElementById("location").value
		plan.location.lat = document.getElementById("lat").value
		plan.location.lng = document.getElementById("lng").value
		plan.description = document.getElementById("description").value
		plan.departure_date = new Date(departure_date)
		plan.return_date = new Date(return_date)

		this.props.setPlan(plan)
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