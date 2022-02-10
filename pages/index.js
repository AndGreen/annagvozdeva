import Head from 'next/head';
import Image from 'next/image';
import sign from '../public/img/sign.png';
import { artGroups } from '../common/data';
import { Link, Element } from 'react-scroll';

const ArtGroup = ({ name, children }) => <Element name={name}>{children}</Element>;

const Art = ({ src, width, height, layout }) =>
    <Image layout={layout} src={src} width={width} height={height} alt='image' />

const NavItem = ({ children, to }) =>
  <Link activeClass='font-semibold' to={to} spy={true} smooth={true} offset={50}
        duration={500}>
    <li className='list-none mt-2 text-sm cursor-pointer'>{children}</li>
  </Link>;

export default function Home() {
  return (
    <>
      <Head>
        <title>Anna Gvozdeva</title>
        <meta name='description' content='Illustrator️' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-1 flex-col md:flex-row min-h-screen'>
        <sidemenu
          className='bg-white z-10 p-10 md:pt-16 flex flex-row md:flex-col justify-between min-w-full md:min-w-0 md:min-w-auto md:min-h-screen fixed '>
          <div>
            <h3 className='uppercase font-bold'>Gvozdeva Anna</h3>
            <nav className='mt-6'>
              {artGroups.map((i, k) => <NavItem key={k} to={i.name}>{i.title}</NavItem>)}
            </nav>
          </div>
          <sign className='w-28 -ml-5 -mb-7'><Image src={sign} alt="sign"/></sign>
        </sidemenu>
        <content className='p-10 mt-64 md:mt-0 md:pt-0 md:ml-52 pr-0 pt-0'>
          {artGroups.map((i, k) =>
            <ArtGroup key={`group-${k}`} name={i.name}>
              {i.arts.map((art, artId) =>
                <Art key={`group-${k}-${artId}`} {...art} />
              )}
            </ArtGroup>
          )}
          {/*<ArtGroup name={artGroups[0].name}>*/}
          {/*  <Art link='graphic' src='/2.png' width={2221} height={2686} />*/}
          {/*</ArtGroup>*/}
          {/*<Art src='/3.png' width={3508} height={2408} />*/}
          {/*<Art link='digital' src='/1.png' width={2480} height={3508} />*/}
          {/*<Art link='vector' src='/v1.png' width={4000} height={5607} />*/}
          {/*<Art link='painting' src='/p1.png' width={3024} height={4032} />*/}
        </content>

      </main>
    </>
  );
}
