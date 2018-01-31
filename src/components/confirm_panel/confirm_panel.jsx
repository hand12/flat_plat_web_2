import React from 'react';
import styles from './confirm_panel.scss';

import PlanCard from '../common/plan_card/plan_card';

const ConfirmPanel = (props) => (
	<div className={ styles.modal_panel }>
		<PlanCard { ...props } plan={ props.form.plan }/>
		<Buttons { ...props }/>
	</div>
)

class Buttons extends React.Component {
	postPlan = () => {
		var formData = new FormData()
		formData.append("plan[departure_date]", this.props.form.plan.departure_date)
		formData.append("plan[return_date]", this.props.form.plan.return_date)
		formData.append("plan[description]", this.props.form.plan.description)
		formData.append("location[name]", this.props.form.plan.location.name)
		formData.append("location[latitude]", this.props.form.plan.location.lat)
		formData.append("location[longitude]", this.props.form.plan.location.lng)

		const HOST = "http://localhost:3005/"
		fetch(HOST + "plans", {
			method: "POST",
			body: formData,
			mode: "no-cors"
		})
		.then((response) => {
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.then(() => {
			console.log("投稿完了")
		})
		.catch((err) => {
			// alert(err)
			console.log(err) //なぜかerrでる
		})

		this.props.history.push('/plan/complete')
	}
	render() {
		return (
			<div className={ styles.buttons }>
				<button className={ styles.modfy_button } onClick={ () => (this.props.history.push('/plan/new')) }>修正する</button>
				<button className={ styles.post_button } onClick={ this.postPlan }>投稿する</button>
			</div>
		)
	}
}

export default ConfirmPanel;