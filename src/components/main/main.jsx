import React from 'react';
import styles from './main.scss';

import LeftContainer from './left_container';
import RightContainer from './right_container';

const Main = (props) => (
  <div className={ styles.main } >
    <div className={ styles.container } >
      <LeftContainer { ...props } />
      <RightContainer { ...props } />
    </div>
  </div>
)

export default Main;
