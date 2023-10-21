import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta property="og:image" itemprop="image" content="/images/image-shares.jpg"/>
        <meta property="og:image:type" content="image/jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Gluten:wght@500&family=Grandstander:wght@200&family=Luckiest+Guy&family=Pangolin&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <audio autoPlay loop>
          <source src="/audios/funny-happy-birthday.mp3" type="audio/mp3"/>
        </audio>
        {/* <iframe src="/audios/funny-happy-birthday.mp3" allow="autoplay" style={{display:"none"}} id="iframeAudio">
        </iframe>  */}
      </body>
    </Html>
  )
}
