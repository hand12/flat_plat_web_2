import React from 'react';
import styles from './left_container.scss';

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

export default LeftContainer;