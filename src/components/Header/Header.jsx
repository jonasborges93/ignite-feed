import styles from './Header.module.css';

import igniteLogo from '../../assets/ignite-logo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={igniteLogo} alt="Logotipo do Ignite Feed" />
        <strong>Ignite Feed</strong>
      </div>
    </header>
  )
}