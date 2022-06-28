import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4x86ggl088k01un69i2enq0/master',
  cache: new InMemoryCache()
})