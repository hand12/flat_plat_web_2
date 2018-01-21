import React from 'react';
import styles from './plans.scss';

import Plan from './plan';

class Plans extends React.Component {
	constructor(props) {
		super(props)
		this.HOST = "http://localhost:3005/"
	}
	componentDidMount = () => {
		fetch(this.HOST + "plans", {
			mode: "no-cors"
		})
		.then((response) => {
			console.log(response)
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
    })
    .then((response) => response.json())
		.then((response) => response.json())
		.then((responseData) => {
			console.log(responseData)
		})
		.catch((err) => {
			// alert(err)
			console.log(err)
		})
		// this.props.setPlans(plans)
	}
	render () {
		return (
			<div className={ styles.plans }>
				<Plan { ...this.props } />
				<Plan { ...this.props } />
				<Plan { ...this.props } />
				<Plan { ...this.props } />
			</div>
		)
	}
}

export default Plans;