import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useUserStore } from "../store/auth";

export const authLink = setContext(async (_, { headers }) => {
  const { signIn } = useUserStore.getState();

  if (!signIn.token) {
    return { headers };
  }
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${signIn.token}`,
    },
  };
});

const httpLink = new HttpLink({
  uri: "https://portly-drafty-pondskater.gigalixirapp.com/graphql",
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
