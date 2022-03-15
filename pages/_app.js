import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/sora"

const theme = extendTheme({
  fonts: {
    heading: "Sora, sans-serif",
    body: "Sora, sans-serif" 
  }
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
