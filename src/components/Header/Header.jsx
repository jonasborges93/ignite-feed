import styles from './Header.module.css';

import { Avatar } from '../Avatar/Avatar'


export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Avatar src="https://github.com/jonasborges93.png"/>
        <strong>Ignite Feed</strong>
      </div>
    </header>
  )
}