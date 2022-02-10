import Head from 'next/head';
import Image from 'next/image';
import {Link, Element} from 'react-scroll';

const Item = ({link, src, width, height, layout}) =>
  <Element name={link}>
    <Image layout={layout} src={src} width={width} height={height} alt="image"/>
  </Element>

const NavItem = ({children, to}) =>
  <Link activeClass="font-semibold" to={to} spy={true} smooth={true} offset={50}
        duration={500}>
    <li className="list-none mt-2 text-sm cursor-pointer">{children}</li>
  </Link>

export default function Home() {
  return (
    <>
      <Head>
        <title>Anna Gvozdeva</title>
        <meta name="description" content="Illustrator️"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className="flex flex-1 flex-col md:flex-row min-h-screen">
        <sidemenu className="bg-white z-10 p-10 md:pt-16 flex flex-row md:flex-col justify-between min-w-full md:min-w-0 md:min-w-auto md:min-h-screen fixed ">
          <div>
            <h3 className="uppercase font-bold">Gvozdeva Anna</h3>
            <nav className="mt-6">
              <NavItem to="graphic">Graphic art</NavItem>
              <NavItem to="digital">Digital</NavItem>
              <NavItem to="vector">Vector</NavItem>
              <NavItem to="painting">Painting</NavItem>
            </nav>
          </div>
          <sign className="w-28 -ml-5 -mb-7"><Image src="/sign.png" width={720} height={928}/></sign>
        </sidemenu>
        <content className="p-10 mt-64 md:pt-10 md:ml-52 pr-0 pt-0">
          <Item link="graphic" src="/2.png" width={2221} height={2686} />
          <Item src="/3.png" width={3508} height={2408} />
          <Item link="digital" src="/1.png" width={2480} height={3508} />
          <Item link="vector" src="/v1.png" width={4000} height={5607} />
          <Item link="painting" src="/p1.png" width={3024} height={4032} />
        </content>

      </main>
    </>
  )
}
