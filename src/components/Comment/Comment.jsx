import { ThumbsUp, Trash } from 'phosphor-react'
import styles from './Comment.module.css'

export function Comment () {
  return (
    <div className={styles.comment}>
      <img 
        src="https://github.com/jonasborges93.png" 
        className={styles.avatar}
      />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header className={styles.header}>
            <div className={styles.authorAndTime}>
              <strong>Jonas Borges</strong>
                <time 
                  title='06 de Junho de 2023 às 09:24h' 
                  dateTime='2023-06-06 09:24:00' 
                >
                  Cerca de 1h atrás
                </time>
            </div>

            <button title='Deletar comentário'>
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Devon, parabéns!</p>
        </div>

        <footer className={styles.commentBoxFooter}>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}