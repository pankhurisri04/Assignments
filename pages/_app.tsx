import { AppProps } from 'next/app';
import { ApolloProvider } from "@apollo/client";
import client from '../src/utils/apolloConfig';

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
