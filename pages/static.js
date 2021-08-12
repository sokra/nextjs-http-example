import Head from 'next/head';
import styles from '../styles/Home.module.css';
import lodash from 'https://cdn.skypack.dev/lodash';

export function getStaticProps() {
  return {
    props: {
      version: lodash.VERSION,
    },
  };
}

export default function Home({ version }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>next.js http import example</title>
        <meta name="description" content="next.js http import example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>client: {lodash.VERSION}</h1>
        <h1 className={styles.title}>static: {version}</h1>
      </main>
    </div>
  );
}
