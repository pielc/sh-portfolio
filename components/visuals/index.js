import {
  Box,
  Circle,
  Grid,
  GridItem,
  Flex,
  Text,
  Center,
} from "@chakra-ui/react";

export function ShBox({ title, children }) {
  return (
    <Center>
      <Grid
        marginBottom="1em"
        templateColumns="repeat(1, 1fr)"
        w="100%"
        maxW="60em"
      >
        <GridItem>
          <Flex
            pl="4px"
            pr="46px"
            borderTopRadius="lg"
            h="1.3em"
            bgColor="shgrey.900"
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
              {title && (
                <Text color="shgrey.300" fontSize="0.8em">
                  {title}
                </Text>
              )}
            </Center>
          </Flex>
        </GridItem>

        <GridItem>
          <Box
            bgColor="shgrey.200"
            borderWidth="1px"
            borderBottomRadius="lg"
            borderColor="shgrey.900"
            p="2"
          >
            {children}
          </Box>
        </GridItem>
      </Grid>
    </Center>
  );
}

export function lsLine(
  perm,
  user,
  size,
  type,
  name,
  folder = false,
  title = false
) {
  return (
    <Grid w="41ch" justifyItems="start" templateColumns="repeat(7, 1fr)">
      <GridItem w="10ch" h="1.5em">
        <Text>{perm}</Text>
      </GridItem>
      <GridItem display={{ base: "none", xl: "block" }} w="11ch" h="1.5em">
        <Text align="end">{user}</Text>
      </GridItem>
      <GridItem w="6ch" h="1.5em">
        <Text align="end">{size}</Text>
      </GridItem>
      <GridItem w="2ch" h="1.5em"></GridItem>
      <GridItem w="7ch" h="1.5em">
        {" "}
        {title ? (
          <Text>{type}</Text>
        ) : (
          <Text color={chooseTypeColor(folder)} style={{ fontWeight: "bold" }}>
            {type}
          </Text>
        )}{" "}
      </GridItem>
      <GridItem w="1ch" h="1.5em"></GridItem>
      <GridItem w="16ch" h="1.5em">
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

export function highlight(text) {
  return (
    <Text as="span" color="shgreen.500" style={{ fontWeight: "bold" }}>
      {text}
    </Text>
  );
}

function chooseTypeColor(folder) {
  if (!folder) return "shgreen.500";
  return "#000000";
}

export const ShButton = ({ text, width, link, char = "-" }) => {
  return (
    <Grid
      color="shgreen.500"
      style={{ fontWeight: "bold" }}
      as="a"
      target="_blank"
      href={link}
      marginBottom="1em"
      marginLeft="1em"
      w={sizedW(8)}
      templateColumns={sizedRepeat(width)}
    >
      {fullLine(width, char)}
      {textLine(width, char, text)}
      {fullLine(width, char)}
    </Grid>
  );
};

function sizedRepeat(size) {
  return "repeat(" + size + ",1fr)";
}

function sizedW(size) {
  return size + "ch";
}

function fullLine(width, char) {
  var lines = [];
  for (let i = 0; i < width; i++) {
    lines.push(
      <GridItem key={i + "-char-grid"} h="1em" w="1ch">
        {char}
      </GridItem>
    );
  }
  return lines;
}

function textLine(width, char, text) {
  var lines = [];
  lines.push(
    <GridItem key="firstchar-grid" h="1em" w="1ch">
      |
    </GridItem>
  );
  lines.push(
    <GridItem key="text-grid" h="1em" colSpan={width - 2}>
      <Center>
        <Text>{text}</Text>
      </Center>
    </GridItem>
  );
  lines.push(
    <GridItem key="lastchar-grid" h="1em" w="1ch">
      |
    </GridItem>
  );
  return lines;
}
