"use client";
import {
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BiNetworkChart, BiRocket } from "react-icons/bi";
import { CgCommunity } from "react-icons/cg";
import { RxCode } from "react-icons/rx";
import { Feature_Card } from "./Feature_Card";

export default function Feature() {
  return (
    <Box py="50" as="section">
      {/* top headers */}
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Features
        </Text>
        <Heading fontWeight={"semibold"}>What you can expect?</Heading>
        <Text fontSize={"20"} py="3">
          We are building a community of aspiring blockchain developers.
        </Text>
      </Box>
      <Container maxW={1200} mt="10">
        {/* 4 features  */}
        <Box>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2 }} spacing={10}>
            {/* feature 1 */}
            <Feature_Card
              iconComponent={<RxCode size={50} />}
              title={"Coding Workshops"}
              txt={"We regualary invite industry experts for coding workshops"}
            />
            {/* feature 2 */}

            <Feature_Card
              iconComponent={<BiRocket size={50} />}
              title={"Web3.0 Roadmap"}
              txt={
                " We have a full road map for you to become a web3.0 developer."
              }
            />
            {/* feature 3 */}
            <Feature_Card
              iconComponent={<CgCommunity size={50} />}
              title={"Community Support"}
              txt={
                "We as a community are here to help you out throughout our journey. "
              }
            />
            {/* feature 4 */}

            <Feature_Card
              iconComponent={<BiNetworkChart size="50" />}
              title={"Networking"}
              txt={"You will have chance to network with industry experts."}
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
