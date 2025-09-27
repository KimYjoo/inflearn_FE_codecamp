import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { loadDevMessages, loadErrorMessages } from "@apollo/client/dev";
import '../styles/globals.css'
import { HttpLink } from '@apollo/client';

export default function App({ Component, pageProps }) {
  const Client = new ApolloClient({
    link: new HttpLink({
      uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    }),
    cache: new InMemoryCache()
  })
  if (process.env.NODE_ENV !== "production") {
    loadDevMessages();
    loadErrorMessages();
  }
  return(
    <>
      <ApolloProvider client={Client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  )
}
