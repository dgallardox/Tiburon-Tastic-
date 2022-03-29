import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Image from 'next/image'

export default function Home({sharks}) {
  return (
    <div className={styles.container}>
      <Nav home="nav-link active" sharks="nav-link" />
      <div id="doc">
      <h1>Test</h1>
      </div>
    </div>
  )
}