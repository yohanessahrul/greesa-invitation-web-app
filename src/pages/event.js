import Head from 'next/head';
import Image from "next/image";
import '../styles/event.css';
import { useSearchParams } from 'next/navigation'

export default function Event() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name')

  const greesaBirthDate = new Date("October 29, 2023 15:00:00").toISOString();

  return (
    <>
      <Head>
        <title>Event</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="wrapper">
          <div className='top-decoration'>
            <div className='left-decoration' style={{ width: '100px', height: '140px' }}>
              <Image width={220} height={150} src='/images/top-balon-left.png' alt='heheh' />
            </div>
            <div className='right-decoration' style={{ width: '100px', height: '140px' }}>
              <Image width={220} height={150} src='/images/top-balon-left.png'  alt='haha' />
            </div>
          </div>
          <div className='section'>
            <div className='section-top'>
              <div className='top-leaf-right'>
                <Image width={100} height={150} src='/images/top-leaf-right.png'  alt='hihi' />
              </div>
              <div className='bottom-leaf-left'>
                <Image width={150} height={150} src='/images/down-leaf-left.png'  alt='hoho' />
              </div>
              &nbsp;
              <h1 className='birthday-party-heading'>Birthday</h1>
              <h1 className='birthday-party-heading'>Party</h1>
              &nbsp;
              <p className='birthday-date'>Sunday</p>
              <p className='birthday-date'>October 29, 2023</p>
            </div>
            <div className='section-mid'>
              <div className='countdown'>
                <div className='countdown-item'>
                  <h1>14</h1>
                  <p>hari</p>
                </div>
                <div className='countdown-item'>
                  <h1>15</h1>
                  <p>jam</p>
                </div>
                <div className='countdown-item'>
                  <h1>23</h1>
                  <p>menit</p>
                </div>
              </div>
              <div className='location'>
                <p>Cluster Lisse Blok AM3 No.4</p>
                <p>Perumahan Metland Cibitung</p>
                <p>Kel. Telaga Murni</p>
                <p>Kec. Cikarang Barat</p>
              </div>
              <div className='stack-images-of-gica'>
                <Image width={175} height={200} src='/images/stack-images-gica.png'  alt='cukcuk' />
              </div>
            </div>
            <div className='section-bottom sectio-event'>
              <a target='_blank' className='button-invitation' href={`https://wa.me/6281703631403?text=Hai%20Greesa,%0ASaya%20siap%20hadir%20pada%20acara%20ulang%20tahunmu,%20terimakasih.%0A%0A${name} :)`}>Konfirmasi WA</a>
              <a target='_blank' className='button-invitation' href='https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MGhldWFxaGM3dnBjcGUwcnE1aTd2bWwwMzIgeW9oYW5lc3NhaHJ1bDkyQG0&tmsrc=yohanessahrul92%40gmail.com'>Tandai Kalender</a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}