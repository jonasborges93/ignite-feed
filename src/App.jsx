import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Post } from "./components/Post/Post";

import './global.css';
import styles from './App.module.css'

function App() {
  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <div className={styles.container}>
          <Sidebar />
          <main>
            <Post />
            <Post />
          </main>
        </div>
      </section>
    </>
      
  )
}

export default App
