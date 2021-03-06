import Head from 'next/head';
import Image from 'next/image';
import sign from '../public/img/sign.png';
import { artGroups } from '../common/data';
import { Link, Element } from 'react-scroll';
import { useWindowDimensions } from '../common/hooks';

const ArtGroup = ({ name, children }) => <Element name={name}>{children}</Element>;

const Art = ({ src, width, height, layout }) =>
  <div className='flex flex-col items-center'><Image layout={layout} src={src} alt='image' /></div>;

const NavItem = ({ children, to }) => {
  const { width: windowWidth } = useWindowDimensions();
  const isMobile = windowWidth <= 768;
  const mobileHeaderOffeset = 235;

  return <Link activeClass='font-semibold' to={to} spy={true} smooth={true} offset={isMobile ? -mobileHeaderOffeset : 0}
               duration={500}>
    <li className='list-none mt-2 text-sm cursor-pointer'>{children}</li>
  </Link>;
};


export default function Home() {
  return (
    <>
      <Head>
        <title>Anna Gvozdeva</title>
        <meta name='description' content='Illustrator️' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex flex-1 flex-col md:flex-row min-h-screen'>
        <sidemenu
          className='bg-white z-10 p-10 md:pt-16 flex flex-row md:flex-col justify-between min-w-full md:min-w-0 md:min-w-auto md:min-h-screen fixed '>
          <div>
            <h3 className='uppercase font-bold'>Anna Gvozdeva</h3>
            <nav className='mt-6'>
              {artGroups.map((i, k) => <NavItem key={k} to={i.name}>{i.title}</NavItem>)}
            </nav>
          </div>
          <sign className='w-28 -ml-5 -mb-7'><Image src={sign} alt='sign' /></sign>
        </sidemenu>
        <content className='justify-center p-10 mt-64 md:mt-0 md:pt-0 md:ml-52 pr-0 pt-0'>
          {artGroups.map((i, k) =>
            <ArtGroup key={`group-${k}`} name={i.name}>
              {i.arts.map((art, artId) =>
                <Art key={`group-${k}-${artId}`} src={art} />,
              )}
            </ArtGroup>,
          )}
        </content>

      </main>
    </>
  );
}
