import { useMemo } from "react";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  NormalizedCacheObject
} from "@apollo/client";
import merge from "deep-merge";
import CatsAPI from "./datasources/cats-api";

let apolloClient: ApolloClient<NormalizedCacheObject>;

function createIsomorphLink() {
  if (typeof window === "undefined") {
    const { SchemaLink } = require("@apollo/client/link/schema");

    const schema = require("./schema").default;
    const { apolloServer } = require("pages/api/graphql");

    return new SchemaLink({
      schema,
      context: () => {
        const dataSources = {
          catsAPI: new CatsAPI()
        };

        // Assuming `dataSources` exists as an object map at this point.
        // This is where you'd add other things to your context, too.
        const context = {
          dataSources
        };

        // Here is where we manually call `initialize` for our datasources.
        // WARNING: This isn't technically correct in all scenarios! See below.
        Object.values(dataSources).forEach(dataSource => {
          if (dataSource.initialize) {
            dataSource.initialize({
              context,
              cache: apolloServer.requestOptions.cache
            });
          }
        });

        return context;
      }
    });
  } else {
    return new HttpLink({
      uri: "/api/graphql",
      credentials: "same-origin"
    });
  }
}

function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === "undefined",
    link: createIsomorphLink(),
    cache: new InMemoryCache()
  });
}

export function initializeApollo(
  initialState: NormalizedCacheObject | null = null
) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }
  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return _apolloClient;
  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState: NormalizedCacheObject) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}
