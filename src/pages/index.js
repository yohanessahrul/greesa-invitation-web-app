import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/home.css'
import { useSearchParams } from 'next/navigation'

export default function Home() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  return (
    <>
      <Head>
        <title>Greesa Birthday Party</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="wrapper">
          <div className='top-decoration'>
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
                <Image width={230} height={230} src='/images/avatar-gica-home.png' />
              </div>
              <h1 className='callname'>Greesa</h1>
              <p className='birthday-text'>Birthday Party 2</p>
            </div>
            <div className='section-mid'>
              <div className='wrapper-image-mid'>
                <Image width={320} height={230} src='/images/home-bing-all-star.png' />
              </div>
              <h2 className='name-mid'>hi, {name}</h2>
            </div>
            <div className='section-bottom'>
              <Link className='button-invitation' href="/first?name=greesa">Lihat Undanganmu :)</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
