import { Box, Text, Image } from "@chakra-ui/react";

import { ShBox, lsLine } from "../visuals";

export const Skills = () => {
  return (
    <ShBox>
      <Text
        // fontSize={{ base: "0.8em", md: "1em", xl: "1.2em" }} // TODO: Adapt other sizes to responsive
        fontSize="0.8em"
        fontFamily="JetBrains Mono, sans-serif"
      >
        <Box w="440px" h="1.5em">
          <Text style={{ fontWeight: "bold" }} marginBottom="0.5em">
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
      <PortfolioProject />
      <PluginProject />
    </div>
  );
};

export const PortfolioProject = () => {
  return (
    <ShBox title="website project">
      <Text fontSize="0.8em" fontFamily="JetBrains Mono, sans-serif">
        <Text style={{ fontWeight: "bold" }} marginBottom="0.5em">
          plc@HOME:~/dev/projects/sh-portfolio$ vim README
        </Text>
        <Text>
          {" "}
          This website is a playground to learn and test Frontend development.{" "}
          <br />
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
          ~ <br /> ~ <br /> ~ <br /> ~ <br />
          &quot;README&quot; 5L, 194C
        </Text>
      </Text>
    </ShBox>
  );
};

export const PluginProject = () => {
  return (
    <ShBox title="music plugin project">
      <Text fontSize="0.8em" fontFamily="JetBrains Mono, sans-serif">
        <Text style={{ fontWeight: "bold" }} marginBottom="0.5em">
          plc@HOME:~/dev/projects/vst-plugin$ cat goal.md
        </Text>
        <Text>
          # This project aims to develop a VST plugin allowing to add reverb
          music effect on top of a MIDI instrument.
        </Text>
        <Box m="2em">
          <Image src="util/cone-BW.svg" alt="WIP" boxSize="4em" />
        </Box>
        <Text>Work in progress ..</Text>
      </Text>
    </ShBox>
  );
};
