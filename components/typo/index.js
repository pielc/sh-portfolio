import { Box, Flex, Heading } from "@chakra-ui/react";

export const ShHeading = ({ children }) => {
  return (
    <Flex align="center">
      <Heading as="h2" fontSize={{ base: "2.5em", md: "4em", lg: "5em" }}>
        {children}
      </Heading>
      <Box h="2px" ml="1em" flex="1" bg="black"></Box>
    </Flex>
  );
};
