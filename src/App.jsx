import { Header } from "./components/Header/Header"
import { Sidebar } from "./components/Sidebar/Sidebar";

import './global.css';
import styles from './App.module.css'


function App() {
  return (
    <>
      <Header />

      <section className={styles.wrapper}>
        <Sidebar />
        <main></main>
      </section>
    </>
      
  )
}

export default App
