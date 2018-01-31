import React from 'react';
import styles from './matches.scss';

import Plan from './plan';

class Matches extends React.Component {
	render() {
		// const plan = this.props.plans.find( e => e.id == this.props.match.params.id )
		const plan = {
			departure_date: "2017-01-30",
			return_date: "2017-01-31",
			description: "hoge",
			location: {
				lng: 0.11,
				lan: 0.22,
				name: "北海道"
			}
		}
		return (
			<div className={ styles.main }>
				<div className={ styles.selected_plan }>
					<Plan plan={ plan } { ...this.props }/>
				</div>
				<div className={ styles.matches_plans }>
					<div className={ styles.hoge }></div>
					<div className={ styles.hoge }></div>
					<div className={ styles.hoge }></div>
					<div className={ styles.hoge }></div>
					<div className={ styles.hoge }></div>
					<div className={ styles.hoge }></div>
					<div className={ styles.hoge }></div>
					<div className={ styles.hoge }></div>
				</div>
			</div>
		)
	}
}

export default Matches;