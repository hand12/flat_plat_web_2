import React from 'react';
import styles from './main.scss';

import LeftContainer from './left_container';
import RightContainer from './right_container';

const Main = () => (
  <div className={ styles.main } >
    <div className={ styles.container } >
			<LeftContainer />
			<RightContainer />
    </div>
  </div>
)

export default Main;
