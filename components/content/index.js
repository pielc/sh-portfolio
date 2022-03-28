import { Box, Center, Circle, Image, Stack, Text } from "@chakra-ui/react";
import { highlight, lsLine, ShBox, ShButton } from "../visuals";

export const Skills = () => {
  return (
    <ShBox>
      <Text fontSize="0.8em" fontFamily="JetBrains Mono, sans-serif">
          <Text h="1.5em" style={{ fontWeight: "bold" }} marginBottom="0.5em">
            plc@HOME:~/dev/projects/sh-portfolio$ ls -la
          </Text>
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
        <Box mx="2em" my="1em">
          <Image src="icons/plc-logo.png" alt="WIP" boxSize="4em" />
        </Box>
        <Text>
          {" "}
          This website is a {highlight("playground to learn and test")} Frontend
          development. <br />
          It has been built with : <br />
          {highlight("- Next.js")} <br />
          {highlight("- Chakra UI")} <br />
          And deployed thanks to Vercel{" "}
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
          # This project aims to develop a {highlight("VST plugin")} allowing to
          add reverb music effect on top of a MIDI instrument.
        </Text>
        <Box mx="2em" my="1em">
          <Image src="icons/cone-BW.svg" alt="WIP" boxSize="4em" />
        </Box>
        <Text>Work in progress ..</Text>
      </Text>
    </ShBox>
  );
};

export const Contact = () => {
  return (
    <ShBox>
      <Text fontSize="0.8em" fontFamily="JetBrains Mono, sans-serif">
        <Text style={{ fontWeight: "bold" }} marginBottom="0.5em">
          plc@HOME:~/contact$ cat contact_list.txt
        </Text>
        <Text>For any question, feel free to contact me :</Text>
        <ShButton
          width="13"
          text="email"
          link="mailto:pierre.le.chanu.pro@gmail.com"
        />
        <ShButton
          width="13"
          text="linkedin"
          link="https://www.linkedin.com/in/pierrelc"
        />
        <Text>You can also browse my projects on github :</Text>
        <ShButton width="13" text="github" link="https://github.com/pielc" />
        <Text>And look through my resume :</Text>
        <ShButton
          width="13"
          text="resume"
          link="/files/resume_PierreLeChanu.pdf"
        />
      </Text>
    </ShBox>
  );
};

export const About = () => {
  return (
    <Center py="1em">
      <Box maxW="80em">
        <Stack direction={{ base: "column", xl: "row" }} spacing="0">
          <ProfilePicture />
          <Box alignSelf="center">
            <Text
              p="0.8em"
              maxW={{ base: "100%", xl: "30em" }}
              justifyContent="center"
              fontSize="1.2em"
            >
              Hello ! I&apos;m {highlight("Pierre")} <br />a{" "}
              {highlight("Software engineer")} driven by curiosity and I mostly
              work on {highlight("backend development")}.
            </Text>
          </Box>
        </Stack>
      </Box>
    </Center>
  );
};

export const ProfilePicture = () => {
  return (
    <Center>
      <Circle bgColor="shgrey.900" size="13em">
        <Image src="pictures/pp.png" alt="plc" boxSize="12em" />
      </Circle>
    </Center>
  );
};
