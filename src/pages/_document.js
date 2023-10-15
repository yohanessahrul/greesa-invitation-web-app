import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Gluten:wght@500&family=Grandstander:wght@200&family=Luckiest+Guy&family=Pangolin&display=swap" rel="stylesheet"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
        <audio autoPlay src="/images/funny-happy-birthday.mp3" type="audio/mp3"></audio>
      </body>
    </Html>
  )
}
