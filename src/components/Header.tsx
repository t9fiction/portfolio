"use client";
import React from "react";
import { useColorMode } from "@chakra-ui/color-mode";
import {
  Box,
  Button,
  Circle,
  Flex,
  Image,
  Link,
  Stack,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";

const Header = () => {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Stack w="80%" align={['center']}>
      <Circle
        position={"absolute"}
        bg={"blue.100"}
        opacity={"0.3"}
        size={["300px"]}
        alignSelf={["flex-end"]}
      ></Circle>
      <Flex
        direction={["column", "column", "row"]}
        p={["0", "0", "32px"]}
        alignSelf={["flex-start"]}
      >
        <Box mt={["0", "0", "16px"]}>
          <Text fontSize={["5xl"]} fontWeight={["semibold"]}>
            Hi, I am
          </Text>
          <Text
            fontSize={["7xl"]}
            fontWeight={["bold"]}
            bgGradient="linear(to-r, cyan.400, blue.500, purple.600)"
            bgClip={["text"]}
          >
            Sohail Ishaque
          </Text>
          <Text
            color={isDark ? "whiteAlpha.900" : "blue.500"}
            opacity={isDark ? "0.2" : 0.8}
          >
            Experienced Developer professional with strong leadership and
            relationship building skills. Certified Blockchain Developer,
            developing the Applications in Java and MEAN. Experience in
            developing Decentralized Blockchain applications using Ethereum and
            Hyper ledger.
          </Text>

          <Button mt={["8"]} colorScheme="blue">
            Hire Me
          </Button>
        </Box>
        <Image
          alignSelf={["center"]}
          mt={["0", "0", "12"]}
          mb={["0", "0", "12"]}
          borderRadius="full"
          bg={["transparent"]}
          boxShadow='lg'
          boxSize={['300px']}
          src='https://avatars.githubusercontent.com/u/34830267?s=400&u=2f3c1cb3c73d6cd30b3240fbfb6bfe5174a3cba8&v=4'
        />
      </Flex>
    </Stack>
  );
};

export default Header;
