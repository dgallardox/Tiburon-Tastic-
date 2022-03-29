import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Image from 'next/image'

export default function Home({sharks}) {
  return (
    <div className={styles.container}>
      <Nav home="nav-link active" sharks="nav-link" blog="nav-link"/>
      <div id="doc">
      </div>
    </div>
  )
}