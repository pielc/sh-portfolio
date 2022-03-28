import { Box, Flex, Heading } from "@chakra-ui/react";

export const ShHeading = ({ children }) => {
  return (
    <Flex align="center">
      <Heading as="h2" fontSize="2.5em">
        {children}
      </Heading>
      <Box h="2px" ml="1em" flex="1" bg="black"></Box>
    </Flex>
  );
};
