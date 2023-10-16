import Head from 'next/head';
import Image from "next/image";
import Link from 'next/link';
import '../styles/first.css';
import { useSearchParams } from 'next/navigation'
import 'animate.css'

export default function First() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  return (
    <>
      <Head>
        <title>Greesa</title>
        <meta name="description" content="Undangan ulang tahun bagi temam, sodara, dan orang-orang di sekeliling Greesa." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/images/image-share.jpeg"/>
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <main>
        <div className="wrapper">
          <div className='top-decoration animate__animated animate__pulse animate__infinite'>
            <div className='left-decoration' style={{ width: '100px', height: '140px' }}>
              <Image width={220} height={150} src='/images/top-balon-left.png' />
            </div>
            <div className='right-decoration' style={{ width: '100px', height: '140px' }}>
              <Image width={220} height={150} src='/images/top-balon-left.png' />
            </div>
          </div>
          <div className='section'>
            <div className='section-top'>
              <div className='leaf-left animate__animated animate__bounceInLeft'>
                <Image width={170} height={150} src='/images/leaf-left-first-page.png' />
              </div>
              <h1 className='callname animate__animated animate__bounce animate__infinite'>Greesa</h1>
              <h2 className='fullname animate__animated animate__slideInUp'>Anna Greesa Liora</h2>
              <h2 className='is-turning animate__animated animate__rubberBand'>is turning 2</h2>
              <h2 className='birth-date animate__animated animate__rubberBand'>October 23, 2023</h2>
            </div>
            <div className='section-mid'>
              <div className='leaf-right'>
                <Image className='animate__animated animate__bounceInRight' width={170} height={150} src='/images/leaf-right-first-page.png' />
              </div>
              <div className='wrapper-image'>
                <Image className='animate__animated animate__swing' width={450} height={450} src='/images/gica-tiduran.png' />
              </div>
            </div>
            <div className='section-bottom decrement-top-margin-50'>
              <Link className='button-invitation animate__animated animate__heartBeat animate__infinite' href={`/event?name=${name}`}>Lihat Detail Acara</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
