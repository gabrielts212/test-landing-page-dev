import '../styles/globals.css';
import { MsalProvider } from '@azure/msal-react';
import { msalInstance } from '../pages/msalConfig';

function MyApp({ Component, pageProps }) {
  return (
    <MsalProvider instance={msalInstance}>
      <Component {...pageProps} />
    </MsalProvider>
  );
}

export default MyApp;