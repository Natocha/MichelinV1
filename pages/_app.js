import '../styles/globals.scss'
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';
import { lightTheme } from '../themes/lightTheme';

function MyApp({ Component, pageProps }) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider theme={lightTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;