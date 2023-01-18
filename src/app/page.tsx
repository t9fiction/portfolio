"use client";
import { Inter } from "@next/font/google";
import Social from "@/components/Social";
import { Profile } from "@/components/Profile";
import Header from "@/components/Header";
import {
  Flex,
  Icon,
  VStack,
  ColorModeScript,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/color-mode";
import theme from "./theme";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
// import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <VStack padding={5}>
      <Flex w="100%" pr="2" align={"right"}>
        <Heading ml="8" size="md" fontWeight="semibold" colorScheme="teal">
          {" "}
          NumericSINS
        </Heading>
        <Spacer></Spacer>
        <Icon as={FaInstagram} mr={2} onClick={toggleColorMode}></Icon>
        <Icon as={FaGithub} mr={2} onClick={toggleColorMode}></Icon>
        <Icon as={FaLinkedin} mr={2} onClick={toggleColorMode}></Icon>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Icon
          aria-label="Toggle Mode"
          onClick={toggleColorMode}
          align-items="right"
          ml={"4"}
        >
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Icon>
      </Flex>
      <Header />
      <Social />
      <Profile />
    </VStack>
  );
}
