import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav'
import Image from 'next/image'

export default function Home({sharks}) {
  return (
    <div className={styles.container}>
      <Nav home="nav-link active" sharks="nav-link" />
      {/* <Image
        alt="shark cover"
        src="https://images.unsplash.com/photo-1586115457457-b3753fe50cf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1688&q=80"
        layout="fill"
        objectFit="cover"
      /> */}
    </div>
  )
}