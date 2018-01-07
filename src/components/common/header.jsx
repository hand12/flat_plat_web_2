import React from 'react';
import styles from './css/header.css';
// import { StyleSheet, css } from 'aphrodite';

const Header = () => (
  <div className={ styles.headerhoge } >
    { console.log(styles) }
    <div id="left-box">
      <h1>flat-plat</h1>
    </div>
    <div id="right-box">
      <div className="buttons">
        <span>新規登録</span>
        <span>ログイン</span>
      </div>
    </div>
  </div>
)

export default Header;
