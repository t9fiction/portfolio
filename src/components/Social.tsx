import React from "react";
import { FaInstagram, FaGithub, FaFacebook, FaGoogle, FaSpotify, FaLinkedin, FaShopify } from "react-icons/fa";
import {
  Flex,
  Box,
  Icon,
  HStack,
  VStack,
  ColorModeScript,
  Heading,
  Spacer,
} from "@chakra-ui/react";

const Social = () => {
  return <HStack spacing={['5','5',"10"]}>
    <Icon as={FaFacebook} boxSize={['5','5','50']}  />
    <Icon as={FaGoogle} boxSize={['5','5','50']}  />
    <Icon as={FaSpotify} boxSize={['5','5','50']}  />
    <Icon as={FaShopify} boxSize={['5','5','50']}  />
    <Icon as={FaLinkedin} boxSize={['5','5','50']}  />
    <Icon as={FaInstagram} boxSize={['5','5','50']}  />
  </HStack>;
};

export default Social;
