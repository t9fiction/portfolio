import { Box, Flex, Heading, Text, Icon, HStack } from "@chakra-ui/react";
import { DiCodeigniter, DiAndroid, DiWebplatform } from "react-icons/di";
import React from "react";

export const Profile = () => {
  return (
    <Flex
      direction={["column", "column", "row"]}
      p={["0", "0", "32px"]}
      alignSelf={["flex-start"]}
      maxW={["100vh", "130vh", "130vh"]}
    >
      <Box alignSelf={["center"]} px={["32"]} py={["16"]}>
        <Heading fontWeight={["extrabold"]} color={["cyan.500"]} size="4xl">
          7+
        </Heading>
        <Text fontSize={["2xl"]} color={["gray.400"]}>
          Years of Experience
        </Text>
      </Box>
      <Box>
        <Flex alignSelf={["center"]} px={["32"]} py={["16"]}>
          <Text fontSize="medium" fontWeight={["bold"]} w={["100%"]}>
            Product design and development, specialized in mobile app
            development
          </Text>
          <HStack>
            <Flex mt={["0", "0", "8"]}>
              <Flex
                rounded={["xl"]}
                direction="column"
                mt={["4"]}
                bg="blue.400"
                h="20vh"
                w="20vh"
                justify={["flex-end"]}
              >
                <Icon
                  color={["white"]}
                  p={["4"]}
                  as={DiAndroid}
                  boxSize={["24"]}
                >
                  Android App
                </Icon>
              </Flex>
            </Flex>
            <Flex
              rounded="xl"
              mt={4}
              ml={["4", "0", "0"]}
              bg="gray.100"
              h="30vh"
              w="30vh"
              justify="flex-end"
              _hover={{ bg: "teal.400" }}
            >
              <Icon color="black" p="4" as={DiCodeigniter} w="24" h="24" />
              <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                Flutter Apps
              </Text>
            </Flex>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
};
