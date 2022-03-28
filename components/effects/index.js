import Typewriter from "typewriter-effect";
import { Heading } from "@chakra-ui/react";

export const TypeWriterTitle = () => {
  return (
    <Heading
      fontSize="4em"
      color="shgreen.500"
      fontFamily="JetBrains Mono, sans-serif"
      marginTop="0.5em"
      marginBottom="0.5em"
    >
      <Typewriter
        options={{
          cursor: "_",
          autoStart: true,
          deleteSpeed: 25,
          // loop: true
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("~/pierre.le.chanu")
            .pauseFor(2500)
            .deleteChars(14)
            .typeString("lc")
            .start();
        }}
      />
    </Heading>
  );
};
