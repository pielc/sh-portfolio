import Typewriter from "typewriter-effect";
import { Stack } from "@chakra-ui/react";

export const TypeEffect = () => {
  return (
    <Stack>
    <Typewriter
      options={{
        cursor: "_",
        autoStart: true,
        loop: true
      }}
      onInit={(typewriter) => {
        typewriter
          .typeString("Hello World!")
          .pauseFor(2500)
          .deleteAll()
          .start();
      }}
    />
    </Stack>
  );
};
