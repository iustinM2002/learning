import '@/styles/global.css'
import type { AppProps } from 'next/app';
// provider
import { NavProvider } from 'contexts/NavContext';
import { ApiProvider } from 'contexts/ApiContext';
// query
import { QueryClient,QueryClientProvider,Hydrate } from 'react-query';

const client = new QueryClient();

export default function MyApp({ Component, pageProps }: AppProps) {
  return <QueryClientProvider client={client}><Hydrate state={pageProps.dehydratedState}><ApiProvider><NavProvider><Component {...pageProps} /></NavProvider></ApiProvider></Hydrate></QueryClientProvider>
}
