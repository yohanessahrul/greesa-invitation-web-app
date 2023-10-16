import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/home.css'
import { useSearchParams } from 'next/navigation'
import 'animate.css'

export default function Home() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')
  
  return (
    <>
      <Head>
        <title>Greesa Birthday Party</title>
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
              <Image width={220} height={150} src='/images/top-balon-left.png' />
            </div>
            <div className='right-decoration' style={{ width: '100px', height: '140px' }}>
              <Image width={220} height={150} src='/images/top-balon-left.png' />
            </div>
          </div>
          <div className='section'>
            <div className='section-top'>
              <p className='label-top'>You're invited !</p>
              <div className='avatar-top'>
                <Image className='animate__animated animate__fadeInDown' width={230} height={230} src='/images/avatar-gica-home.png' />
              </div>
              <h1 className='callname animate__animated animate__bounce animate__infinite'>Greesa</h1>
              <p className='birthday-text animate__animated animate__slideInDown'>Birthday Party 2</p>
            </div>
            <div className='section-mid'>
              <div className='wrapper-image-mid'>
                <Image width={320} height={230} src='/images/home-bing-all-star.png' />
              </div>
              <h2 className='name-mid'>hi, {name}</h2>
            </div>
            <div className='section-bottom'>
              <Link className='button-invitation animate__animated animate__heartBeat animate__infinite' href={`/first?name=${name}`}>Lihat Undanganmu :)</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
