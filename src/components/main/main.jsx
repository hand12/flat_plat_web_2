import React from 'react';
import styles from './main.scss';

import LeftContainer from './left_container';
import RightContainer from './right_container';

class Main extends React.Component {
	componentWillMount() {
		this.props.setPlans(this.props.plans)
	}
	render() {
		return (
			<div className={ styles.main } >
				<div className={ styles.container } >
					<LeftContainer { ...this.props } />
					<RightContainer { ...this.props } />
				</div>
			</div>
		)
	}
}

export default Main;
