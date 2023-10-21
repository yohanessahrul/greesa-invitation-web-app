import Head from 'next/head';
import Image from "next/image";
import '../styles/event.css';
import { useSearchParams } from 'next/navigation'
import 'animate.css'

export default function Event() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  const greesaBirthDate = new Date("October 29, 2023 15:00:00").toISOString();

  return (
    <>
      <Head>
        <title>Event</title>
        <meta name="description" content="Undangan ulang tahun bagi temam, sodara, dan orang-orang di sekeliling Greesa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" itemprop="image" content="/images/image-shares.jpg"/>
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <main>
        <div className="wrapper">
          <div className='top-decoration animate__animated animate__pulse animate__infinite'>
            <div className='left-decoration' style={{ width: '100px', height: '140px' }}>
              <Image width={220} height={150} src='/images/top-balon-left.png' alt='heheh' />
            </div>
            <div className='right-decoration' style={{ width: '100px', height: '140px' }}>
              <Image width={220} height={150} src='/images/top-balon-left.png'  alt='haha' />
            </div>
          </div>
          <div className='section'>
            <div className='section-top'>
              <div className='top-leaf-right animate__animated animate__bounceInRight'>
                <Image width={100} height={150} src='/images/top-leaf-right.png'  alt='hihi' />
              </div>
              <div className='bottom-leaf-left animate__animated animate__bounceInLeft'>
                <Image width={150} height={150} src='/images/down-leaf-left.png'  alt='hoho' />
              </div>
              &nbsp;
              <h1 className='birthday-party-heading animate__animated animate__bounce animate__infinite'>Birthday</h1>
              <h1 className='birthday-party-heading animate__animated animate__bounce animate__infinite'>Party</h1>
              &nbsp;
              <p className='birthday-date animate__animated animate__wobble'>Sunday</p>
              <p className='birthday-date animate__animated animate__wobble'>October 29, 2023</p>
              <p className='birthday-date animate__animated animate__wobble'>15:00 WIB</p>
            </div>
            <div className='section-mid'>
              <div className='dress-code-floating animation-instant animate__animated animate__tada animate__infinite'>
                <h3>Dress Code</h3>
                <p>White</p>
              </div>
              <div className='location animate__animated animate__backInUp'>
                <p>Cluster Lisse Blok AM3 No.4</p>
                <p>Perumahan Metland Cibitung</p>
                <p>Telaga Murni, Cikarang Barat</p>
              </div>
              <div className='maps animate__animated animate__rubberBand'>
                <a target='_blank' className='button-maps' href='https://maps.app.goo.gl/jSVEijxFmFaPCptz5'>Open Map</a>
              </div>
              <div className='stack-images-of-gica'>
                <Image className='animate__animated animate__flipInY' width={175} height={200} src='/images/stack-images-gica.png'  alt='cukcuk' />
              </div>
            </div>
            <div className='section-bottom'>
              <a target='_blank' className='button-invitation animate__animated animate__heartBeat animate__infinite' href={`https://wa.me/6281703631403?text=Hai%20Greesa,%0ASaya%20siap%20hadir%20pada%20acara%20ulang%20tahunmu,%20terimakasih.%0A%0A${name} :)`}>Konfirmasi WA</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
