import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const Client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache()
  })
  return(
    <ApolloProvider client={Client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
