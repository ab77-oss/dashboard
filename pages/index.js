import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from './components/Content'
import Header from './components/Header'
import LeftNavbar from './components/LeftNavbar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/pro.ico" />
      </Head>
    <h2 >Exemple ERP</h2>
      <LeftNavbar />
      <Header />
      <Content />
    </div>
  )
}
