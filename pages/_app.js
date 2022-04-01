import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout.jsx';

function MyApp({ Component, pageProps }) {
  return(
    <>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  )
}

export default MyApp
