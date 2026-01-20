import { ApolloProvider } from "@apollo/client/react";
import { Stack } from "expo-router";
import { client } from "../shared/api/api";

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false }} />
    </ApolloProvider>
  );
}
