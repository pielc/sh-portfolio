import { Box, HStack, Image } from "@chakra-ui/react";

function fillbarfull(n) {
  return [...Array(n)].map((e, i) => <Box bg='#03ad5d' w='30px' h='13px' key={"fullbar-"+i}/>);
}

function fillbarempty(n) {
  return [...Array(n)].map((e, i) => <Box bg='white' w='30px' h='13px' borderWidth='3px' borderColor='#03ad5d' key={"emptybar-"+i}/>);
}

export const Bar = () => {
  return (
    <HStack>{fillbarfull(5)}{fillbarempty(2)}</HStack>
  )
}

export const Skill = () => {
  return (
    <HStack><Image alt="C++" src="/icons/cpp-icon.svg" width="50" height="50" /> <Bar/> </HStack>
  )
}