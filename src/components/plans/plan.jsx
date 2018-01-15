import React from 'react';
import styles from './plan.scss';

const Plan = (props) => (
	<div className={ styles.modal_panel } onClick={ () => (props.history.push('/plan/10/request')) }>
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
					<span className={ styles.location }>北海道旭川市</span>
					<span className={ styles.date }>2018/1/13 ~ 2018/1/14</span>
				</div>
				<div className={ styles.description }>
					旭川動物園に行きたいです！あと美味しいものをたくさん食べたいです！！
					<br />
					旭川動物園に行きたいです！あと美味しいものをたくさん食べたいです！！
					<br />
					旭川動物園に行きたいです！あと美味しいものをたくさん食べたいです！！
					<br />
					旭川動物園に行きたいです！あと美味しいものをたくさん食べたいです！！
					<br />
					旭川動物園に行きたいです！あと美味しいものをたくさん食べたいです！！
					<br />
				</div>
				<div className={ styles.bottom }>
					投稿日 2018/1/12 20:25
				</div>
			</div>
		</div>
	</div>
)

export default Plan;