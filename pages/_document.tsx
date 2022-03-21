import Document, { Head, Html, Main, NextScript } from 'next/document';
import React, { VFC } from 'react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {process.env.NODE_ENV == 'development' ? (
            <meta name="robots" content="noindex" />
          ) : null}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;600&display=swap"
            rel="stylesheet"
          ></link>
          {process.env.NODE_ENV === 'production' ? <FontProd /> : <FontDev />}
        </Head>
        <body>
          <Main />
          {/* Here we will mount our modal portal */}
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

const FontProd: VFC = () => {
  return (
    <script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?hQIULW9VvKs%3D&box=eAXUhX4aEKE%3D"></script>
  );
};
const FontDev: VFC = () => {
  return (
    <link
      href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700&family=Noto+Serif+JP:wght@200;300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
  );
};
