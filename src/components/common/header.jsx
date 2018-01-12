import React from 'react';
import styles from './styles/header.scss';

const Header = () => (
  <div className={ styles.header } >
    <div className={ styles.content } >
      <div className={ styles.left } >
        <h1>flat-plat</h1>
      </div>
      <div className={ styles.right } >
        <div className={ styles.buttons } >
          <span className={ styles.button } >
            <div>新規登録</div>
          </span>
          <span className={ styles.button } >
            <div>ログイン</div>
          </span>
        </div>
      </div>
    </div>
  </div>
)

export default Header;
