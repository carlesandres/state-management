import StoreProvider from "@/lib/store-provider";
import { AppProps } from 'next/app';
import '../styles/globals.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <StoreProvider lastUpdate={new Date().getTime()}>
        <Component {...pageProps} />
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
