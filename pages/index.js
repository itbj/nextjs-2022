import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image'; //2022-01-01 added.

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Happy New Year 2022</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js 2022!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h3>Documentation &rarr;</h3>
            <p>文档</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h3>Learn &rarr;</h3>
            <p>学习</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h3>Examples &rarr;</h3>
            <p>用例</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h3>Deploy &rarr;</h3>
            <p>部署</p>
          </a>

          <a
            href="/tusk/tusk.html"
            className={styles.card}
          >
            <h3>Tusk &rarr;</h3>
            <p>演示</p>
          </a>

          <a
            href="/tiger/a.html"
            className={styles.card}
          >
            <h3>Tiger &rarr;</h3>
            <p>演示</p>
          </a>
          <a
            href="/bulb.html"
            className={styles.card}
          >
            <h3>Bulb &rarr;</h3>
            <p>演示</p>
          </a>
          <a
            href="/loony/index.html"
            className={styles.card}
          >
            <h3>loony &rarr;</h3>
            <p>演示</p>
          </a>
          <a
            href="/dragon/index.html"
            className={styles.card}
          >
            <h3>Dragon &rarr;</h3>
            <p>演示</p>
          </a>
          <a
            href="/long/long.html"
            className={styles.card}
          >
            <h3>Long🐉 &rarr;</h3>
            <p>演示</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/linux.svg" alt="Linux Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
