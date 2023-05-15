import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LensProvider } from '@lens-protocol/react-web';
import  client  from '../utils/wagmi';
import { WagmiConfig } from 'wagmi';
import lensConfig  from '../utils/LenseConfig';

export default function App({ Component, pageProps }: AppProps) {
  return(
    <WagmiConfig client={client}>
    <LensProvider config={lensConfig}>
      <Component {...pageProps} />
    </LensProvider>
  </WagmiConfig>
  );
}
