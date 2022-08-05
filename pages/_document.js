import React from 'react'
import {Html, Head, Main, NextScript} from "next/document";

function Document() {
  return (
   <Html>
    <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"    />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
      <meta name="description" content="Welcome to my portfolio" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="og:title" content={"Johnny Wong"} />
    </Head>
    <body>
        <Main/>
        <NextScript/>
    </body>
   </Html>
  )
}

export default Document