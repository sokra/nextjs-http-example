import Head from 'next/head';
import styles from '../styles/Home.module.css';
import lodash from 'https://cdn.skypack.dev/lodash';
import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    confetti();
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>next.js http import example</title>
        <meta name="description" content="next.js http import example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{lodash.VERSION}</h1>
      </main>
    </div>
  );
}
