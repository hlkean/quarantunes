import { ApolloClient, HttpLink, InMemoryCache } from "apollo-boost";
import { loginAnonymous } from "./authentication";
import { Graph_Url } from "./constants";

// url to connect to graphql
const graphql_url = Graph_Url;
const httpLink = new HttpLink({ uri: graphql_url });
const authorizationHeaderLink = loginAnonymous();

// TODO: Initialize an Apollo Client
const client = new ApolloClient({
    link: authorizationHeaderLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

export { client };
