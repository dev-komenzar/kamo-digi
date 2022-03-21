import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
      <Script src="https://webfont.fontplus.jp/accessor/script/fontplus.js?hQIULW9VvKs%3D&box=eAXUhX4aEKE%3D"></Script>
    </ChakraProvider>
  );
}

export default MyApp;
