import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Giphy-next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section>
        <h1>Picky Picky Lovers of Giphys.</h1>
        <p>
          Love Giphys? <b>So do we</b>, Use{" "}
          <a href="https://github.com/George-Okumu/Giphy-Next.js">
            Giphy-Next.js Geo-Project
          </a>
          to learn how to intergrate Giphys APi and be proud.
        </p>
      </section>
      
      <section>
        <Link href="/search">
        <a>Search Giphy by classification Name</a>
        </Link>
      </section>
      <footer>
        Created by George Okumu
        <a href="https://github.com/George-Okumu/Giphy-Next.js">Source Code</a>
      </footer>
    </div>
  );
}
