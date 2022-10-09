import { ApolloClient, InMemoryCache } from "@apollo/client";

/*  initialize apollo client
     1) uri for setting up connection to graphql server
     2) authentication bearer token for accesing graphql github apis
 */

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { authorization: "Bearer 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" },
  cache: new InMemoryCache(),
});

export default client;
