import React from 'react';
import styles from './main.scss';

import PlanFormPanel from '../post_form_panel/post_form_panel';
import ConfirmPanel from '../confirm_panel/confirm_panel';

const Main = () => (
  <div className={ styles.main } >
    <div className={ styles.container } >
			<LeftContainer />
			<RightContainer />
    </div>
  </div>
)

const LeftContainer = () => (
	<div className={ styles.left_container } >
		<div className={ styles.profile_image }>
			<img src="https://pbs.twimg.com/profile_images/919957605002264577/3v0U4Nem.jpg" />
		</div>
		<div className={ styles.profile_introduce }>
			<div className={ styles.name }>
				yusuke yamashita (23)
			</div>
			<div className={ styles.introduce_text }>
				旅先で色々な方と話して見たいです！
				<br />
				カメラも好きです！
			</div>
			<div className={ styles.tags }>
				<span className={ styles.tag }>カメラ</span>
				<span className={ styles.tag }>デザイン</span>
				<span className={ styles.tag }>bake</span>
			</div>
		</div>
		<div className={ styles.bottom_buttons }>
			<span className={ styles.button } ><i className="fa fa-plus-square-o" aria-hidden="true"></i></span>
			<span className={ styles.button } ><i className="fa fa-user-circle-o" aria-hidden="true"></i></span>
			<span className={ styles.button } ><i className="fa fa-comments-o" aria-hidden="true"></i></span>
		</div>
	</div>
)

const RightContainer = () => (
	<div className={ styles.right_container} >
		<h1>プランの作成</h1>
		<PlanFormPanel />
		<ConfirmPanel />
	</div>
)

const Buttons = () => (
	<div className={ styles.buttons }>
		<button className={ styles.post_button }>投稿する</button>
	</div>
)

export default Main;
