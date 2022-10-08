import { Html, Head, Main, NextScript } from 'next/document'
import TrackingAnalytics from '../components/trackingAnalytics';

export default function Document() {

  return (
    <Html>
      <Head>
        <link rel='icon' href='/images/icon.png' />
        <TrackingAnalytics />
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script type='text/javascript' src='/typetura.js'/>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}