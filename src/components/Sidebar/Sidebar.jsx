import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';

export function Sidebar () {
  return(
    <aside className={styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=50" 
        className={styles.cover} 
      />

      <div className={styles.profile}>
        <img 
          src="https://github.com/jonasborges93.png" 
          alt="Foto do Jonas Borges"
          className={styles.avatar} 
        />
        <strong>Jonas Borges</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>

    </aside>
  )
}