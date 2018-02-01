import React from 'react';
import { Link } from 'react-router-dom'

import styles from './plan.scss';
import formatter from '../common/plan_card/date_formatter'
import { HOST } from '../../api_hosts'

const Plan = (props) => (
	<Link to= { props.link }>
		<div className={ styles.modal_panel }>
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
						<span className={ styles.location }>{ props.plan.location.name }</span>
						<span className={ styles.date }>
							{ formatter(new Date(props.plan.departure_date)) } 〜
							{ formatter(new Date(props.plan.return_date)) }
						</span>
					</div>
					<div className={ styles.description }>
						{ props.plan.description }
					</div>
					<div className={ styles.bottom }>
						投稿日 { props.plan.created_at }
					</div>
				</div>
			</div>
		</div>
	</Link>
)

export default Plan;