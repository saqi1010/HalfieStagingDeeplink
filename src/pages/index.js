import Head from 'next/head';
import styles from './Home.module.css';
export default function Home() {
    const apiUrl = process.env.NEXT_PUBLIC_STAGGING_BASE_URL;
        console.warn("======>>",apiUrl);
  return (
    <div className={styles.container}>
      <Head>
        <title>Welcome To Halfie</title>
        <meta name="description" content="This is a dummy webpage created with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
        Welcome To Halfie
        </h1>
        <p className={styles.description}>
          Coming soon........
        </p>
      </main>
    </div>
  );
}
