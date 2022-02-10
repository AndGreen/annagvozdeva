import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Тьмок! 😘</title>
        <meta name="description" content="Мява ❤️" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-16 py-0 flex flex-1 flex-col justify-center items-center min-h-screen">
        <h1 className="text-5xl font-bold text-center">
          Привет мявочка!
        </h1>

        <p className="text-center mx-0 my-10 leading-normal text-2xl">
          Здесь будет твой сайт. А пока что тьмок 😘
        </p>

      </main>

      {/*<footer className={styles.footer}>*/}
      {/*  <a*/}
      {/*    href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"*/}
      {/*    target="_blank"*/}
      {/*    rel="noopener noreferrer"*/}
      {/*  >*/}
      {/*    Powered by{' '}*/}
      {/*    <span className={styles.logo}>*/}
      {/*      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />*/}
      {/*    </span>*/}
      {/*  </a>*/}
      {/*</footer>*/}
    </div>
  )
}
