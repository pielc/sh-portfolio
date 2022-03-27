import Typewriter from "typewriter-effect";
import { Heading } from "@chakra-ui/react";

export const TypeWriterTitle = () => {
  return (
    <Heading
        fontSize="4em"
        color="rgb(3,173,93)"
        fontFamily="JetBrains Mono, sans-serif"
      >
    <Typewriter
      options={{
        cursor: "_",
        autoStart: true,
        deleteSpeed: 25
        // loop: true
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("~/pierre.le.chanu")
          .pauseFor(2500)
          .deleteChars(15)
          .typeString("plc")
          .start();
      }}
    />
    </Heading>
  );
};
