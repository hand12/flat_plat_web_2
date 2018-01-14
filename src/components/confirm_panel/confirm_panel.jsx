import React from 'react';
import styles from './confirm_panel.scss';

const ConfirmPanel = () => (
	<div className={ styles.modal_panel }>
		<Card />
		<Buttons />
	</div>
)

const Card = () => (
	<div className={ styles.card }>
		<div className={ styles.image }>
			<img src="https://pbs.twimg.com/profile_images/919957605002264577/3v0U4Nem.jpg" />
		</div>
		<div className={ styles.location }>
			<h2>行き先</h2>
			<p>北海道旭川市</p>
		</div>
		<div className={ styles.date }>
			<h2>日程</h2>
			<div className={ styles.dates }>
				<div className={ styles.departure }>
					出発: 2018/1/14
				</div>
				<div className={ styles.return }>
					帰宅: 2018/1/16
				</div>
			</div>
		</div>
		<div className={ styles.description_item }>
			<h2>どんな旅にしたいですか？</h2>
			<p>美味しいものをたくさん食べる旅にしたいです!
			<br />
			綺麗な写真もたくさん撮りたいです！</p>
		</div>
	</div>
)

const Buttons = () => (
	<div className={ styles.buttons }>
		<button className={ styles.modfy_button }>修正する</button>
		<button className={ styles.post_button }>投稿する</button>
	</div>
)

export default ConfirmPanel;