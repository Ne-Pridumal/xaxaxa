import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { SnackbarProvider } from 'notistack';

const queryClient = new QueryClient();

// const apolloClient = new ApolloClient({
//   uri: 'https://s52kjzzv-1337.euw.devtunnels.ms/graphql',
//   cache: new InMemoryCache(),
//   headers: {
//     Authorization:
//       'Bearer b902c47be3c8efc0c3a70a3adc234512be6a9dbf68bd7776e116772d3fabd77a8c9ff49e493df2b1b88a5c3f9df49b9e9736b29fe317337dadf8c66ba8ec3ec1c6f145ac08a2a259edee8d2ad77a401f823db6d1737b33362abf064aac03f71bc601b1b98a3539ba96132d45759b2be747fcab1146640ad05dbf8f4d590f3362',
//   },
// });

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ApolloProvider client={apolloClient}> */}
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider maxSnack={3}>
        <App />
      </SnackbarProvider>
    </QueryClientProvider>
    {/* </ApolloProvider> */}
  </React.StrictMode>,
);
