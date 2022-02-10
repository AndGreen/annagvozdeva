import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anna Gvozdeva</title>
        <meta name="description" content="Illustrator️" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-1 flex-row min-h-screen">
        <sidemenu className="p-10 flex flex-col justify-between min-h-screen bg-gray-100 fixed">
          <div>
            <h3 className="uppercase">Gvozdeva Anna</h3>
            <nav className="mt-5">
              <li className="list-none">Paper</li>
              <li className="list-none">Painting</li>
              <li className="list-none">Digital</li>
              <li className="list-none">Vector</li>
            </nav>
            </div>
          <sign className="w-28"><Image src="/img/sign.png" width={720} height={928}/></sign>
        </sidemenu>
        <content className="p-10 ml-52">/images</content>

      </main>
    </div>
  )
}
