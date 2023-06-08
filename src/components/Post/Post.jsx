import { Comment } from '../Comment/Comment'
import styles from './Post.module.css'

export function Post () {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img 
            src="https://github.com/jonasborges93.png" 
            alt="Foto de Perfil do Jonas"
            className={styles.avatar} 
          />
          <div className={styles.authorInfo}>
            <strong>Jonas Borges</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time 
          title='06 de Junho de 2023 às 09:24h' 
          dateTime='2023-06-06 09:24:00' 
        >
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <a href='#'>jane.design/doctorcare</a>
        <div className={styles.hastags}>
          <a href="#">#novoprojeto</a> {' '}
          <a href="#">#nlw</a> {' '}
          <a href="#">#rocketseat</a> 
        </div>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder='Deixe um comentário'/>
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}