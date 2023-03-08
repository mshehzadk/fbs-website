"use client";

import { Box, Container, Flex, HStack, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaDiscord, FaFacebook, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <Box>
      <Container maxW={"100%"} bg="blackAlpha.100" py="4">
        <Flex justifyContent={"space-around"} alignItems="center">
          <Text>© 2023 FBS. All rights reserved.</Text>
          <HStack>
            <Box pl="15" as="span" color={"gray"}>
              <Link href={"https://github.com"} target="_blank">
                <FaGithub size="25" />
              </Link>
            </Box>

            <Box pl="15" as="span" color={"gray"}>
              <Link href={"https://facebook.com"} target="_blank">
                <FaFacebook size="25" />
              </Link>
            </Box>

            <Box pl="15" as="span" color={"gray"}>
              <Link href={"https://discord.com"} target="_blank">
                <FaDiscord size="25" />
              </Link>
            </Box>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
