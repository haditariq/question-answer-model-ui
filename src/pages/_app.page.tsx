import type { AppProps } from 'next/app';
import axios from "axios";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// provider composer
import { Compose } from '../context/Compose'
// providers
import { LanguageContextProvider } from '../context/LanguageContext'
// global styles
import '../styles/globals.css'; // tailwind css

// set axios defaults
axios.defaults.baseURL = process.env.NEXT_PUBLIC_BASE_URL
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.NEXT_PUBLIC_MODEL_TOKEN}`;

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {

  const providers = [
    LanguageContextProvider
  ]

  return (
    <QueryClientProvider client={queryClient}>
      <Compose providers={providers}>
        <Component {...pageProps} />;
      </Compose>
    </QueryClientProvider>
  )
}

export default MyApp;
