import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy-next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>This is my giphy application meant for SEO(Search Engine Optimization)</h1>
      </section>
    </div>
  )
}
