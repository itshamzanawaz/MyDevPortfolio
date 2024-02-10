import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api-ap-south-1.hygraph.com/v2/clsg0x5i21tyx01w660t4fgz1/master',
  cache: new InMemoryCache(),
});

export default client;