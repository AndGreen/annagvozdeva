import Head from 'next/head'
import Image from 'next/image'

const Item = ({src, width, height}) => <div><Image src={src} width={width} height={height}/></div>
const NavItem = ({children}) => <li className="list-none mt-2 text-sm">{children}</li>

export default function Home() {
  return (
    <div>
      <Head>
        <title>Anna Gvozdeva</title>
        <meta name="description" content="Illustrator️"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-1 flex-row min-h-screen">
        <sidemenu className="p-10 pt-16 flex flex-col justify-between min-h-screen fixed">
          <div>
            <h3 className="uppercase font-bold">Gvozdeva Anna</h3>
            <nav className="mt-6">
              <NavItem>Graphic art</NavItem>
              <NavItem>Digital</NavItem>
              <NavItem>Vector</NavItem>
              <NavItem>Painting</NavItem>
            </nav>
          </div>
          <sign className="w-28 -ml-5 -mb-7"><Image src="/sign.png" width={720} height={928}/></sign>
        </sidemenu>
        <content className="p-10 ml-52 pr-0 pt-0">
          <Item src="/2.png" width={2221} height={2686} alt="man"/>
          <Item src="/3.png" width={3508} height={2408} alt="man2"/>
        </content>

      </main>
    </div>
  )
}
