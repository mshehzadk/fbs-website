"use client";

import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { IoIosSpeedometer } from "react-icons/io";
import { FaCommentDollar } from "react-icons/fa";
import { BsFillGearFill, BsPeopleFill } from "react-icons/bs";
import { MdContactPage } from "react-icons/md";

export default function Vision() {
  return (
    <Box py="50" as="section">
      {/* top headers */}
      <Box textAlign={"center"}>
        <Text color={"blue.500"} fontWeight="bold">
          Who we are
        </Text>
        <Heading fontWeight={"semibold"}>Vision & Mission</Heading>
        <Text fontSize={"20"} py="3">
          We are on a mission to make the community of blockchain enthusiasts
          empower traditional businesses with advance technologies.
        </Text>
      </Box>
      <Container maxW={1200}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <BsPeopleFill size={80} />
              </Center>

              <Heading fontWeight={"semibold"} size="md" mt="5">
                ABOUT FAST BLOCKCHAIN SOCIETY
              </Heading>
            </CardHeader>
            <CardBody>
              <Text align={"center"}>
                FAST Blockchain Society (FBS) is a group of blockchain
                enthusiasts. It is the first Decentralised, Open Source &
                Borderless community of Pakistan.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">Know More</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <MdContactPage size={80} />
              </Center>
              <Heading size="md" mt="5" fontWeight={"semibold"}>
                WHY FAST BLOCKCHAIN SOCIETY
                <br />
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center">
                Fast Blockchain Society is the start-up of a new generation,
                which is on a mission to transform traditional businesses.
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">View here</Button>
            </CardFooter>
          </Card>
          <Card align="center">
            <CardHeader>
              <Center color="blue.500">
                <BsFillGearFill size={80} />
              </Center>
              <Heading size="md" mt="5" fontWeight={"semibold"}>
                HOW WE WORK
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center">
                We have a business-oriented mindset and are foresighted with
                great vision.{" "}
              </Text>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue">Know More</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
