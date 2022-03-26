import {
  Box,
  Circle,
  Grid,
  GridItem,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";

export const ShBox = ({ children }) => {
  return (
    <Center>
    <Grid marginBottom="1em" templateColumns="repeat(1, 1fr)" minW="400px" maxW="600px">
      <GridItem>
      <Flex
        pl="4px"
        pr="46px"
        borderTopRadius="lg"
        h="1.3em"
        bgColor="#404040"
      >
        <Center w="14px">
          <Circle size="10px" bg="gray"></Circle>
        </Center>
        <Center w="14px">
          <Circle size="10px" bg="gray"></Circle>
        </Center>
        <Center w="14px">
          <Circle size="10px" bg="gray"></Circle>
        </Center>
        <Center flex="1">
          <Text color="#DDDDDD" fontSize="0.8em">
            hello
          </Text>
        </Center>
      </Flex>
      </GridItem>

      <GridItem>
      <Box
        bgColor="#ededed"
        borderWidth="1px"
        borderBottomRadius="lg"
        borderColor="#404040"
        p="2"
      >
        {children}
      </Box>
      </GridItem>
    </Grid>
    </Center>
  );
};

export function lsLine(perm, user, size, type, name, folder = false, title = false) {
  return (
    <Grid w="390px" templateColumns="repeat(7, 1fr)">
      <GridItem w="80px" h="1.5em">
        <Text>{perm}</Text>
      </GridItem>
      <GridItem w="85px" h="1.5em">
        <Text align="end">{user}</Text>
      </GridItem>
      <GridItem w="45px" h="1.5em">
        <Text align="end">{size}</Text>
      </GridItem>
      <GridItem w="10px" h="1.5em"></GridItem>
      <GridItem w="50px" h="1.5em">
        {" "}
        {title ? (
          <Text>{type}</Text>
        ) : (
          <Text color={chooseTypeColor(folder)} style={{ fontWeight: "bold" }}>
            {type}
          </Text>
        )}{" "}
      </GridItem>
      <GridItem w="10px" h="1.5em"></GridItem>
      <GridItem w="120px" h="1.5em">
        {" "}
        {folder ? (
          <Text style={{ fontWeight: "bold" }}>{name}</Text>
        ) : (
          <Text>{name}</Text>
        )}{" "}
      </GridItem>
    </Grid>
  );
}

function chooseTypeColor(folder) {
  if (!folder) return "#03ad5d";
  return "#000000";
}

{
  /* <Grid w="470px"  bgColor="gray"  templateColumns='repeat(7, 1fr)'>
  <GridItem bgColor="red" w="80px" h="1.5em"><Text>drwxr-xr-x</Text></GridItem>
  <GridItem bgColor="green" w="85px" h="1.5em"><Text align="end">5 plc plc</Text></GridItem>
  <GridItem bgColor="pink"  w="45px" h="1.5em"><Text align="end">4.0K</Text></GridItem>
  <GridItem bgColor="purple"  w="10px" h="1.5em"></GridItem>
  <GridItem bgColor="blue"  w="80px" h="1.5em"><Text>Kubernetes</Text></GridItem>
  <GridItem bgColor="purple"  w="10px" h="1.5em"></GridItem>
  <GridItem bgColor="orange"  w="160px" h="1.5em"><Text>hello_world.cpp</Text></GridItem>
</Grid> */
}

