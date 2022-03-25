import {
  Box, Circle,
  Grid,
  GridItem,
  HStack, Text, VStack,
  Image
} from "@chakra-ui/react";

export const ShBox = ({ children }) => {
  return (
    // <Box>
    <VStack marginBottom="1em" align="stretch" spacing="0">
      <Box
        display="flex"
        alignItems="center"
        h="1em"
        bgColor="#404040"
        px="0.3em"
        minW="450px"
        maxW="650px"
        borderTopRadius="lg"
      >
        <HStack spacing="0.3em">
          <Circle size="10px" bg="gray"></Circle>
          <Circle size="10px" bg="gray"></Circle>
          <Circle size="10px" bg="gray"></Circle>
        </HStack>
      </Box>
      <Box
        bgColor="#ededed"
        borderWidth="1px"
        borderBottomRadius="lg"
        borderColor="#404040"
        minW="450px"
        maxW="650px"
        // overflow="hidden"
      >
        <Box p="2">{children}</Box>
      </Box>
    </VStack>
    // </Box>
  );
};

function lsLine(perm, user, size, type, name, folder = false, title = false) {
  return (
    <Grid w="440px" templateColumns="repeat(7, 1fr)">
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
          <Text style={{ fontWeight: "bold" }}>{type}</Text>
        )}{" "}
      </GridItem>
      <GridItem w="10px" h="1.5em"></GridItem>
      <GridItem w="160px" h="1.5em">
        {" "}
        {folder ? (
          <Text color="#03ad5d" style={{ fontWeight: "bold" }}>
            {name}
          </Text>
        ) : (
          <Text>{name}</Text>
        )}{" "}
      </GridItem>
    </Grid>
  );
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

export const Skills = () => {
  return (
    <ShBox>
      <Text
        // fontSize={{ base: "0.8em", md: "1em", xl: "1.2em" }} // TODO: Adapt other sizes to responsive
        fontSize="0.8em"
        fontFamily="JetBrains Mono, sans-serif"
      >
        <Box w="440px" h="1.5em">
          <Text style={{ fontWeight: "bold" }}  marginBottom="0.5em">
            plc@HOME:~/dev/projects/sh-portfolio$ ls -la
          </Text>
        </Box>
        {lsLine("permission", "user", "size", "type", "name", false, true)}
        {lsLine("drwxr-xr-x", "7 plc plc", "121K", ".", "COMMON_USE", true)}
        {lsLine("-rw-r--r--", "1 plc plc", "1.2K", "C++", "hello_world.cpp")}
        {lsLine("-rw-r--r--", "1 plc plc", "408", "CMake", "CMakeLists.txt")}
        {lsLine("-rw-r--r--", "1 plc plc", "1.6K", "Java", "App.java")}
        {lsLine("-r--r--r--", "1 plc plc", "118", "SQL", "dbdump.sql")}
        {lsLine("-rw-r--r--", "1 plc plc", "403", "Git", ".gitignore")}
        {lsLine("-rw-r--r--", "1 plc plc", "208", "Docker", "Dockerfile")}
        {lsLine("-rwxr--r--", "1 plc plc", "403", "Shell", "deploy.sh")}
        {lsLine("drwxr-xr-x", "3 plc plc", "4.0K", ".", "NEW_TOPICS", true)}
        {lsLine("-rwxr--r--", "1 plc plc", "608", "Spring", "Controller.java")}
        {lsLine("-rw-r--r--", "1 plc plc", "40", "JS", "hello.js")}
        {lsLine("-rw-r--r--", "1 plc plc", "227", "React", "index.js")}
        {lsLine("-rw-r--r--", "1 plc plc", "374", "Next ", "_app.js")}
        {lsLine("drwxr-xr-x", "5 plc plc", "8.0K", ".", "FRAMEWORKS", true)}
        {lsLine("-rw-r--r--", "1 plc plc", "428", "GCP", "cloudbuild.yaml")}
        {lsLine("-rw-r--r--", "1 plc plc", "278", "Gitlab", ".gitlab-ci.yml")}
      </Text>
    </ShBox>
  );
};

export const Projects = () => {
  return (
    <div>
      <PortfolioProject/>
      <PluginProject/>
    </div>
  )
}

export const PortfolioProject = () => {
  return (
    <ShBox>
      <Text fontSize="0.8em" fontFamily="JetBrains Mono, sans-serif">
        <Text style={{ fontWeight: "bold" }}  marginBottom="0.5em">
          plc@HOME:~/dev/projects/sh-portfolio$ vim README
        </Text>
        <Text>
          {" "}
          This website is a playground to learn and test Frontend development. <br />
          It has been built with : <br />
          - Next.js <br />
          - Chakra UI <br />
          And deployed thanks to Vercel.com{" "}
        </Text>
        <Text as="span"> You can find the source code on </Text>
        <Text
          as="a"
          href="https://github.com/pielc/sh-portfolio"
          textDecoration="underline"
        >
          github
        </Text>
        <Text>
          ~ <br/> ~ <br/> ~ <br/> ~ <br/>
          &quot;README&quot; 5L, 194C
        </Text>
      </Text>
    </ShBox>
  );
};

export const PluginProject = () => {
  return (
    <ShBox>
      <Text fontSize="0.8em" fontFamily="JetBrains Mono, sans-serif">
        <Text style={{ fontWeight: "bold" }} marginBottom="0.5em">
          plc@HOME:~/dev/projects/vst-plugin$ cat goal.md
        </Text>
        <Text>
          # This project aims to develop a VST plugin allowing to add reverb music effect on top of a MIDI instrument.
        </Text>
        <Box m="2em">
          <Image src="util/cone-BW.svg" alt="WIP" boxSize="4em" />
        </Box>
        <Text>
        Work in progress ..
        </Text>
      </Text>
        
    </ShBox>
  );
};