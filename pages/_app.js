import { ChakraProvider, extendTheme, Box } from "@chakra-ui/react";
import "@fontsource/sora";

const theme = extendTheme({
  fonts: {
    heading: "Sora, sans-serif",
    body: "Sora, sans-serif",
  },
});

function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Box px={{ base: "0.5em", lg: "15em" }}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  );
}

export default App;
