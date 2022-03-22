import { Box, Grid, GridItem, Text } from "@chakra-ui/react";

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

export const Skill = () => {
  return (
    <Box bgColor="#ededed" borderWidth='1px' borderRadius='lg' p="2" minW="450px" maxW="650px" overflow='hidden'>
      {/* <Box h="1em" bgColor="#404040"></Box> */}
      <Text
        // fontSize={{ base: "0.8em", md: "1em", xl: "1.2em" }} // TODO: Adapt other sizes to responsive
        fontSize="0.8em"
        fontFamily="JetBrains Mono, sans-serif"
      >
        <Box w="440px" h="1.5em">
          <Text style={{ fontWeight: "bold" }}>
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
        {lsLine("-rwxr--r--", "1 plc plc", "608", "Spring", "AppController.java")}
        {lsLine("-rw-r--r--", "1 plc plc", "40", "JS", "hello.js")}
        {lsLine("-rw-r--r--", "1 plc plc", "227", "React", "index.js")}
        {lsLine("-rw-r--r--", "1 plc plc", "374", "Next ", "_app.js")}
        {lsLine("drwxr-xr-x", "5 plc plc", "8.0K", ".", "FRAMEWORKS", true)}
        {lsLine("-rw-r--r--", "1 plc plc", "428", "GCP", "cloudbuild.yaml")}
        {lsLine("-rw-r--r--", "1 plc plc", "278", "Gitlab", ".gitlab-ci.yml")}
      </Text>
    </Box>
  );
};

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