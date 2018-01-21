import React from 'react';
import styles from './plan_card.scss';

import dateToString from './date_formatter';

class PlanCard extends React.Component {
	render () {
		return (
			<div className={ styles.card } id="js-card">
				<div className={ styles.image }>
					<img src="https://pbs.twimg.com/profile_images/919957605002264577/3v0U4Nem.jpg" />
				</div>
				<div className={ styles.location }>
					<h2>行き先</h2>
					<p>{ this.props.plan.location.name }</p>
				</div>
				<div className={ styles.date }>
					<h2>日程</h2>
					<div className={ styles.dates }>
						<div className={ styles.departure }>
							出発: { dateToString(this.props.plan.departure_date) }
						</div>
						<div className={ styles.return }>
							帰宅: { dateToString(this.props.plan.return_date) }
						</div>
					</div>
				</div>
				<div className={ styles.description_item }>
					<h2>どんな旅にしたいですか？</h2>
					<p>{ this.props.plan.description }</p>
				</div>
			</div>
		)
	}
}

export default PlanCard;