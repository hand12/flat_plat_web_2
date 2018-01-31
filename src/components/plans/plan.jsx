import React from 'react';
import styles from './plan.scss';
import formatter from '../common/plan_card/date_formatter'
import { HOST } from '../../api_hosts'

class Plan extends React.Component {
	constructor(props) {
		super(props)
		const plan = this.fetchPlan()
	}
	
	segue = () => {
		if(this.props.isCurrentUser) {
			this.props.history.push(`/users/1/plans/${ this.props.plan.id }/matches_plans`)
		} else {
			this.props.history.push(`/users/1/plans/${ this.props.plan.id }/requests/1`)
		}
	}

	fetchPlan = () => {
		const plan_id = this.props.match.params.plan_id

		fetch(HOST + "plans/" + plan_id, {
			mode: "cors",
		})
		.then((response) => {
			if(!response.ok) {
				throw Error(response.statusText)
			}
			return response
		})
		.then((response) => response.json())
		.then((json) => {
			console.log(json)
		})
		.catch((err) => {
			console.log(err)
		})
	}
	render(){
		return (
			<div className={ styles.modal_panel } onClick={ this.segue }>
				<div className={ styles.plan }>
					<div className={ styles.left_container }>
						<div className={ styles.image }>
							<img src="https://pbs.twimg.com/profile_images/919957605002264577/3v0U4Nem.jpg" />
						</div>
						<div className={ styles.name }>
							yusuke yamashita (23)
						</div>
						<div className={ styles.text }>
							旅先で美味しいものを食べるのが好きです！
							<br />
							インスタ映する写真を取るのも好きです
							<br />
							4行目は表示されない？
							<br />
							ほげほげ
						</div>
					</div>
					<div className={ styles.right_container }>
						<div className={ styles.top}>
							<span className={ styles.location }>{ this.props.plan.location.name }</span>
							<span className={ styles.date }>
								{ formatter(new Date(this.props.plan.departure_date)) } 〜
								{ formatter(new Date(this.props.plan.return_date)) }
							</span>
						</div>
						<div className={ styles.description }>
							{ this.props.plan.description }
						</div>
						<div className={ styles.bottom }>
							投稿日 { this.props.plan.created_at }
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Plan;