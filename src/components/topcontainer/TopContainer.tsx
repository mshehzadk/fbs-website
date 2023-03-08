"use client";

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  Hide,
} from "@chakra-ui/react";
import React from "react";

export default function TopContainer() {
  return (
    <Box
      as="section"
      backgroundImage={"/images/background.webp"}
      backgroundSize="contain"
      backgroundAttachment={"fixed"}
      py="20"
      mt="5"
    >
      <HStack>
        {/* left */}
        <Box
          w={{ base: "100%", lg: "50%" }}
          color={"white"}
          pl={{ base: "10", lg: "44" }}
        >
          <Text fontSize={"20"}>WE ALSO MAKE TOMORROW WITH</Text>

          <Heading fontWeight={"semibold"} fontSize={40}>
            BLOCKCHAIN TECHNOLOGY
          </Heading>
          <Box mt="5">
            <Button colorScheme={"blue"} mr="5">
              Learn More
            </Button>
          </Box>
        </Box>
        {/* right */}
        <Hide below="lg">
          <Box w="50%">
            <Image src="/images/banner.png" />
          </Box>
        </Hide>
      </HStack>
    </Box>
  );
}
